// app/api/auth/signup/route.js
import connectDb from '../../lib/db'; // MongoDB connection
import User from '../../models/User'; // User model
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }),
        { status: 400 }
      );
    }

    await connectDb();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: 'User already exists' }),
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new Response(
      JSON.stringify({ message: 'User registered successfully!' }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Error during signup:', error);
    return new Response(
      JSON.stringify({ message: 'Server error during signup' }),
      { status: 500 }
    );
  }
}
