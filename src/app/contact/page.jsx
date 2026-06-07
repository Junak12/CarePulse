"use client";

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <motion.div variants={container} initial="hidden" animate="show">
        {/* Header */}
        <motion.div variants={item} className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Contact <span className="text-[var(--primary)]">Us</span>
          </h1>

          <p
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg"
            style={{ color: "var(--muted)" }}
          >
            Need help, have questions, or want to book a caregiver? We are here
            to support you 24/7.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Contact Info */}
          <motion.div variants={item} className="space-y-5 sm:space-y-6">
            <div
              className="border rounded-2xl p-5 sm:p-6"
              style={{ borderColor: "var(--border)" }}
            >
              <h3 className="font-semibold text-base sm:text-lg">📍 Address</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                Sylhet, Bangladesh
              </p>
            </div>

            <div
              className="border rounded-2xl p-5 sm:p-6"
              style={{ borderColor: "var(--border)" }}
            >
              <h3 className="font-semibold text-base sm:text-lg">📞 Phone</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                +880 1234 567890
              </p>
            </div>

            <div
              className="border rounded-2xl p-5 sm:p-6"
              style={{ borderColor: "var(--border)" }}
            >
              <h3 className="font-semibold text-base sm:text-lg">✉️ Email</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                support@carepulse.com
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={item}
            className="border rounded-2xl p-5 sm:p-6 space-y-4 sm:space-y-5"
            style={{ borderColor: "var(--border)" }}
          >
            <h3 className="text-lg sm:text-xl font-semibold">Send a Message</h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 sm:p-4 rounded-lg border outline-none text-sm sm:text-base"
              style={{ borderColor: "var(--border)" }}
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 sm:p-4 rounded-lg border outline-none text-sm sm:text-base"
              style={{ borderColor: "var(--border)" }}
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 sm:p-4 rounded-lg border outline-none text-sm sm:text-base resize-none"
              style={{ borderColor: "var(--border)" }}
            />

            <button
              type="submit"
              className="
                w-full
                py-3 sm:py-3.5
                rounded-xl
                bg-[var(--primary)]
                text-white
                font-semibold
                text-sm sm:text-base
                hover:opacity-90
                transition
              "
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
