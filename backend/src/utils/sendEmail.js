import nodemailer from "nodemailer";

export const sendVerificationEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // or another service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const url = `http://localhost:5000/api/verify-email?token=${token}`;

  await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: email,
  subject: "Verify your email",
  html: `<p>Please click this link to verify your email: <a href="${url}">Verify Email</a></p>`,
});

};
