import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import AcceptedUser from '@/app/models/AcceptedUser';
import connectDB from '@/app/lib/db';

export async function POST(req) {
  await connectDB();
  const { email } = await req.json();

  // Check if user exists
  const user = await AcceptedUser.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: 'Email not found' }, { status: 400 });
  }

  // Generate reset token (valid for 1 hour)
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Send email with reset link
  const resetLink = `${process.env.NEXT_PUBLIC_URL}/forgot-password?token=${token}`;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.Email_User,
      pass: process.env.Email_Password,
    },
  });

  const mailOptions = {
    from: process.env.Email_User,
    to: email,
    subject: 'Reset Your Password',
    html: `<p>Click the link below to reset your password:</p>
           <a href="${resetLink}">${resetLink}</a>`,
  };

  await transporter.sendMail(mailOptions);

  return NextResponse.json({ message: 'Reset link sent to your email' }, { status: 200 });
}
