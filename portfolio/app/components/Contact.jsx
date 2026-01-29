import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef(null);

  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });

  /* ---------- VALIDATION ---------- */

  const validateName = (value) => {
    if (!value.trim()) return "Name is required";
    if (value.length < 3) return "Minimum 3 characters";
    return "";
  };

  const validateEmail = (value) => {
    if (!value.trim()) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]:
        name === "name"
          ? validateName(value)
          : validateEmail(value),
    }));
  };

  /* ---------- SEND EMAIL ---------- */

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    const nameError = validateName(form.current.name.value);
    const emailError = validateEmail(form.current.email.value);

    if (nameError || emailError) {
      setErrors({ name: nameError, email: emailError });
      return;
    }

    setResult("Sending...");

    emailjs
      .sendForm(
        "service_n17xuy4",
        "template_oezz67s",
        form.current,
        "H3mLhez_r7ymjEmHf"
      )
      .then(() => {
        setResult("Message sent successfully!");
        form.current.reset();
        setErrors({ name: "", email: "" });
      })
      .catch(() => setResult("Failed to send"));
  };

  return (
    <section
      id="contact"
      className="w-full px-[12%] py-20 bg-gradient-to-b from-slate-950 via-slate-950/60 to-slate-950"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Schedule a call with me
          </h2>

          <p className="text-slate-300 mb-8 max-w-md">
            Reach out and let’s discuss how I can help you.
          </p>

          <div className="space-y-4 text-slate-200 mb-6">
            <p>📞 +91 8714503966</p>
            <p>✉️ lakshmisanthosh87@gmail.com</p>
            <p>📍 Thrissur, Kerala</p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/lakshmisanthosh87"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/lakshmi-santhosh-81733b384?"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-500 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/lakshmi__lax_"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/916282369345"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-green-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-slate-950/80 p-8 rounded-3xl border border-slate-700"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white"
              />
              {errors.name && (
                <p className="text-red-400 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email}</p>
              )}
            </div>
          </div>

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white mb-6"
          />

          <button
            type="submit"
            className="py-3 px-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white mx-auto block"
          >
            Send Message
          </button>

          {result && (
            <p className="text-center mt-4 text-slate-300">{result}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
