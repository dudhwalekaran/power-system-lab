import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import AcceptedUser from '@/app/models/AcceptedUser';
import connectDB from '@/app/lib/db';

export async function POST(req) {
  await connectDB();
  const { token, password } = await req.json();

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if user exists
    const user = await AcceptedUser.findOne({ email: decoded.email });
    if (!user) {
      return NextResponse.json({ message: 'Email not found' }, { status: 400 });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);
    await AcceptedUser.updateOne({ email: decoded.email }, { $set: { password: hashedPassword } });

    return NextResponse.json({ message: 'Password updated successfully!' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Invalid or expired token' }, { status: 400 });
  }
}
