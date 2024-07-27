"use server";

import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid Sender Email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: `Contact Form <onboarding@resend.dev>`,
      to: `zaryabcom123@gmail.com`,
      subject: "Message from your Porfolio",
      reply_to: senderEmail,
      text: message,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
