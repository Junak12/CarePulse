"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [])
  if (!mounted) {
    return null;
  }


  return (
    <section className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] bg-[var(--primary)] opacity-15 blur-[140px]" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] bg-[var(--secondary)] opacity-15 blur-[140px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-6 py-16 md:py-16 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 mb-5 px-4 py-1 rounded-full border border-[var(--border)] bg-[var(--card)] text-sm"
        >
          <span className="text-[var(--primary)] font-semibold">
            Care.Pulse
          </span>
          <span className="text-[var(--muted)]">
            • Trusted Home Healthcare Platform
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-3xl md:text-6xl font-bold leading-tight"
        >
          Compassionate Care at Your{" "}
          <span className="text-[var(--primary)]">Doorstep</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-6 text-[var(--muted)] max-w-2xl mx-auto text-base md:text-lg"
        >
          Care.Pulse connects you with verified caregivers for baby care,
          elderly care, and medical support — anytime you need it, anywhere you
          are.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/services"
            className="
              px-6 py-3
              rounded-lg
              bg-[var(--primary)]
              text-white
              font-medium
              shadow-md
              hover:bg-[var(--primary-hover)]
              transition-all
              hover:scale-105
              active:scale-95
            "
          >
            Book a Caregiver
          </Link>

          <Link
            href="/about"
            className="
              px-6 py-3
              rounded-lg
              border border-[var(--border)]
              bg-[var(--card)]
              hover:border-[var(--primary)]
              hover:text-[var(--primary)]
              transition-all
              hover:scale-105
              active:scale-95
            "
          >
            Learn About Us
          </Link>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={item}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm"
        >
          <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:shadow-md transition">
            👶 Certified Baby Care Specialists
          </div>

          <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:shadow-md transition">
            👴 Professional Elderly Support
          </div>

          <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:shadow-md transition">
            🏥 On-demand Medical Assistance
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
