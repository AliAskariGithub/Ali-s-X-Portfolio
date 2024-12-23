"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { IoIosSend } from "react-icons/io";
import { RippleButton } from "./ui/button";

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7b876683-f37a-49de-b89e-5fb893c34edd",
          name: formData.get("name"),
          email: formData.get("email"),
          telno: formData.get("telno"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Message has been sent successfully! You will be contacted soon.",
          icon: "success",
        });
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to send your message. Please try again later.",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      id="Contact"
      className="relative dark:bg-[rgb(23,23,23)] bg-[rgb(255,255,255)] w-full z-10 flex flex-col items-center justify-center  py-20"
    >
      <div className="flex flex-col items-center justify-center max-w-6xl px-6 md:px-16 h-full space-y-12">
        <h1 className="text-4xl font-extrabold text-black dark:text-white heading-animation">
          Contact Me
        </h1>
        <div
          className="w-11/12 max-w-lg p-6 slide-in-bck-center rounded-lg shadow-md dark:shadow-none shadow-zinc-400  bg-[rgb(228,228,228)]
 dark:bg-[rgb(15,15,15)]"
        >
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-2 text-black/70 dark:text-white/70">
            Please fill out the form below to get in touch.
          </p>
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              className="w-full p-2 border rounded-lg shadow-xl border-zinc-200 dark:border-transparent dark:bg-zinc-700 dark:text-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
              className="w-full p-2 border rounded-lg shadow-xl border-zinc-200 dark:border-transparent dark:bg-zinc-700 dark:text-gray-300"
            />
            <input
              type="tel"
              placeholder="Your Valid Phone Number"
              name="telno"
              required
              className="w-full p-2 border rounded-lg shadow-xl border-zinc-200 dark:border-transparent dark:bg-zinc-700 dark:text-gray-300"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows={6}
              required
              className="w-full p-2 border rounded-lg shadow-xl border-zinc-200 dark:border-transparent dark:bg-zinc-700 dark:text-gray-300"
            />
            <RippleButton
              type="submit"
              className={
                isSubmitting
                  ? "bg-black/50"
                  : "flex items-center justify-center gap-1 text-lg shadow-lg"
              }
            >
              {isSubmitting ? "Sending..." : "Send"} <IoIosSend />
            </RippleButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
