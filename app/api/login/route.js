import dbConnect from "@/app/lib/db";
import AcceptedUser from "@/app/models/AcceptedUser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Secret key for JWT (store this in an environment variable in production)
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

export async function POST(req) {
  try {
    await dbConnect();

    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Email and password are required" }),
        { status: 400 }
      );
    }

    // Find the user in the AcceptedUser collection
    const user = await AcceptedUser.findOne({ email });
    if (!user) {
      return new Response(
        JSON.stringify({ message: "Invalid email or password" }),
        { status: 401 }
      );
    }

    // Compare the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ message: "Invalid email or password" }),
        { status: 401 }
      );
    }

    // Update lastLogin timestamp
    user.lastLogin = new Date();
    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email }, // Payload
      JWT_SECRET, // Secret key
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Successful login, return token and user details
    return new Response(
      JSON.stringify({
        message: "Login successful",
        user: { email: user.email, name: user.name },
        token, // Include the JWT token in the response
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error during login:", error);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}

// Optional: Middleware to verify JWT for protected routes
export const verifyToken = async (req) => {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return { error: "No token provided", status: 401 };
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    // Find user by ID from the token payload
    await dbConnect();
    const user = await AcceptedUser.findById(decoded.userId);
    if (!user) {
      return { error: "User not found", status: 404 };
    }

    return { user, status: 200 };
  } catch (error) {
    console.error("Error verifying token:", error);
    return { error: "Invalid or expired token", status: 401 };
  }
};