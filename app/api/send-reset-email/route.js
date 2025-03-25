import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import connectDB from '@/app/lib/db';
import AcceptedUser from '@/app/models/AcceptedUser';

export async function POST(req) {
  const { email } = await req.json();
  await connectDB();

  // Check if user exists in 'acceptedusers'
  const user = await AcceptedUser.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: 'Email not found' }, { status: 404 });
  }

  // Generate JWT token (valid for 1 hour)
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Email transporter (Replace with real SMTP)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.Email_User,
      pass: process.env.Email_Password,
    },
  });

  const resetLink = `http://localhost:3000/forgot-password?token=${token}`;

  const mailOptions = {
    from: process.env.Email_User,
    to: email,
    subject: 'Reset Your Password',
    html: `<p>Click the link below to reset your password:</p>
           <a href="${resetLink}">${resetLink}</a>
           <p>This link will expire in 1 hour.</p>`,
  };

  await transporter.sendMail(mailOptions);

  return NextResponse.json({ message: 'Password reset link sent!' }, { status: 200 });
}
