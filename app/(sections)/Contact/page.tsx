"use client";

import emailjs from "@emailjs/browser";
import { z } from "zod";
import { motion } from "framer-motion";
import { itemsVariants, containerVariants } from "@/app/animations/variants";
import { useForm } from "react-hook-form";
import { contactFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiAlertCircle } from "react-icons/fi";
import { toast } from "react-hot-toast";

type TContactFormSchema = z.infer<typeof contactFormSchema>;

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const sendEmail = async (data: TContactFormSchema) => {
    try {
      // Create a hidden form element dynamically
      const form = document.createElement("form");
      form.style.display = "none";

      // Add form fields with the submitted data
      const addField = (name: string, value: string) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
      };

      addField("name", data.name);
      addField("email", data.email);
      addField("message", data.message);

      // Append form to body temporarily
      document.body.appendChild(form);

      // Send the form using EmailJS
      await emailjs.sendForm("service_i3fthhk", "template_nkk4t2h", form, {
        publicKey: "D9bPnMpbgLlvnNdHf",
      });

      // Clean up
      document.body.removeChild(form);

      // Show success message
      toast.success("Message sent successfully!");

      // Reset form fields
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      className="flex items-center justify-center min-h-screen w-full px-4"
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

        <form onSubmit={handleSubmit(sendEmail)} className="space-y-6">
          <motion.div variants={itemsVariants} className="flex gap-3">
            <div className="flex flex-col w-full">
              <motion.div className="relative">
                <motion.input
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } transition duration-300 ease-in-out`}
                  variants={itemsVariants}
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                />
                {errors.name && (
                  <div className="absolute right-3 top-3.5 text-red-500">
                    <FiAlertCircle size={20} />
                  </div>
                )}
              </motion.div>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 mt-2 text-sm flex items-center gap-1"
                >
                  <FiAlertCircle className="flex-shrink-0" />
                  {errors.name.message}
                </motion.p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <motion.div className="relative">
                <motion.input
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } transition duration-300 ease-in-out`}
                  variants={itemsVariants}
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && (
                  <div className="absolute right-3 top-3.5 text-red-500">
                    <FiAlertCircle size={20} />
                  </div>
                )}
              </motion.div>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 mt-2 text-sm flex items-center gap-1"
                >
                  <FiAlertCircle className="flex-shrink-0" />
                  {errors.email.message}
                </motion.p>
              )}
            </div>
          </motion.div>
          <motion.div variants={itemsVariants} className="relative">
            <motion.textarea
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.message
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              } transition duration-300 ease-in-out resize-none`}
              variants={itemsVariants}
              placeholder="Write a message"
              rows={5}
              {...register("message")}
            />
            {errors.message && (
              <div className="absolute right-3 top-3.5 text-red-500">
                <FiAlertCircle size={20} />
              </div>
            )}
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 mt-2 text-sm flex items-center gap-1"
              >
                <FiAlertCircle className="flex-shrink-0" />
                {errors.message.message}
              </motion.p>
            )}
          </motion.div>
          <motion.button
            className={`w-full px-4 py-3 bg-primary text-white font-semibold 
            rounded-lg transition duration-300 ease-in-out 
            hover:bg-primary-dark disabled:bg-gray-400 disabled:cursor-not-allowed`}
            variants={itemsVariants}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
