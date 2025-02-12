"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { itemsVariants, containerVariants } from "@/app/animations/variants";

export default function ContactUs() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailInput = form.current?.querySelector(
      'input[name="user_email"]'
    ) as HTMLInputElement;

    // Validate email
    if (!emailInput.value.trim()) {
      setEmailError("Please enter your email.");
      emailInput.focus();
      return;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
      setEmailError("Please enter a valid email address.");
      emailInput.focus();
      return;
    } else {
      setEmailError("");
    }

    setLoading(true);

    emailjs
      .sendForm("service_i3fthhk", "template_nkk4t2h", form.current!, {
        publicKey: "D9bPnMpbgLlvnNdHf",
      })
      .then(
        () => {
          setSent("Your message has been sent! THANK YOU!");
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <motion.div
      variants={containerVariants}
      className="flex items-center justify-center min-h-screen w-full"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8"
      >
        <motion.h1
          className="text-center text-4xl font-bold mb-6 text-primary"
          variants={itemsVariants}
        >
          Contact Us
        </motion.h1>
        <motion.hr
          className="w-24 mx-auto h-1 bg-primary mb-8"
          variants={itemsVariants}
        />
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          <motion.div
            variants={itemsVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              focus:border-blue-500 transition duration-300 ease-in-out 
              transform focus:scale-105"
              variants={itemsVariants}
              type="text"
              name="user_name"
              placeholder="Name"
              required
            />
            <motion.input
              className={`w-full px-4 py-3 border ${
                emailError ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
              focus:border-blue-500 transition duration-300 ease-in-out 
              transform focus:scale-105`}
              variants={itemsVariants}
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
          </motion.div>
          {emailError && (
            <motion.p
              className="text-red-500 text-sm"
              variants={itemsVariants}
            >
              {emailError}
            </motion.p>
          )}
          <motion.textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500 
            focus:border-blue-500 transition duration-300 ease-in-out 
            transform focus:scale-105 resize-none"
            variants={itemsVariants}
            name="message"
            placeholder="Write a message"
            rows={5}
            required
          />
          <motion.button
            className={`w-full px-4 py-3 bg-primary text-white font-semibold 
            rounded-lg transition duration-300 ease-in-out 
            transform hover:scale-105 ${
              loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            variants={itemsVariants}
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
        </form>
        {sent && (
          <motion.h1
            className="text-green-600 mt-2 mb-[3px] text-xl font-semibold"
          >
            {sent}
          </motion.h1>
        )}
      </motion.div>
    </motion.div>
  );
}