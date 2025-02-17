import dbConnect from "@/app/lib/db";
import AcceptedUser from "@/app/models/AcceptedUser";
import bcrypt from "bcrypt";

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

    // Successful login
    return new Response(
      JSON.stringify({
        message: "Login successful",
        user: { email: user.email, name: user.name },
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
