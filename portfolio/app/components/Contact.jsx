import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { assets } from "@/assests/assets";
import Image from "next/image";

const Contact = () => {
  const form = useRef(null);
  const [result, setResult] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    setResult("Sending...");

    emailjs
      .sendForm(
        "service_zwt65rj",
        "template_f6gfa3t",
        form.current,
        "H3mLhez_r7ymjEmHf"
      )
      .then(() => {
        setResult("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setResult("Failed to send. Please try again.");
      });
  };

  return (
    <div>
      <div
        id="contact"
        className="w-full px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-slate-950/0 via-slate-950/40 to-slate-950"
      >
        <h4 className="text-center mb-2 text-lg font-ovo text-slate-300">
          Connect with me
        </h4>
        <h2 className="text-center text-3xl sm:text-5xl font-ovo text-slate-50">
          Get in touch
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-slate-200">
          I&apos;d love to hear from you! If you have any questions, ideas, or
          opportunities, drop a message below.
        </p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto -mt-8 mb-10 rounded-3xl border border-slate-700/80 bg-slate-950/80 backdrop-blur-xl p-8 shadow-[0_18px_45px_rgba(15,23,42,0.9)]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 rounded-xl border border-slate-700 bg-slate-900/80 outline-none text-sm text-slate-100 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-shadow"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 rounded-xl border border-slate-700 bg-slate-900/80 outline-none text-sm text-slate-100 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-shadow"
          />
        </div>

        <textarea
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 rounded-xl border border-slate-700 bg-slate-900/80 outline-none text-sm text-slate-100 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-shadow mb-6 resize-none"
        />

        <button
          type="submit"
          className="py-3 px-10 w-max flex items-center justify-between gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full mx-auto hover:from-cyan-400 hover:to-blue-600 hover:-translate-y-0.5 shadow-lg shadow-cyan-500/40 transition-all duration-300"
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="arrow" />
        </button>

        {result && (
          <p className="mt-4 text-center text-sm text-slate-200">{result}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
