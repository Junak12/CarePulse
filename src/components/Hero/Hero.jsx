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

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 py-24 lg:py-16"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)]">
            <span className="font-semibold text-[var(--primary)]">
              Care.Pulse
            </span>
            <span className="text-[var(--muted)]">
              • Trusted Home Healthcare Platform
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div variants={item} className="mt-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-5xl mx-auto">
            Compassionate Care at Your{" "}
            <span className="text-[var(--primary)]">Doorstep</span>
          </h1>

          <p className="mt-6 text-[var(--muted)] text-lg max-w-3xl mx-auto leading-relaxed">
            Care.Pulse connects you with verified caregivers for baby care,
            elderly care, and medical support — anytime you need it, anywhere
            you are.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link
            href="/services"
            className="
              px-7 py-3.5
              rounded-xl
              bg-[var(--primary)]
              text-white
              font-medium
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
              px-7 py-3.5
              rounded-xl
              border border-[var(--border)]
              font-medium
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

        {/* Stats */}
        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto text-center"
        >
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-[var(--primary)]">
              12K+
            </h3>
            <p className="text-sm md:text-base text-[var(--muted)] mt-2">
              Care Hours
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-[var(--primary)]">
              500+
            </h3>
            <p className="text-sm md:text-base text-[var(--muted)] mt-2">
              Verified Caregivers
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-[var(--primary)]">
              98%
            </h3>
            <p className="text-sm md:text-base text-[var(--muted)] mt-2">
              Satisfaction Rate
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div variants={item} className="max-w-5xl mx-auto mt-16">
          <div className="h-px w-full bg-[var(--border)]" />
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div
            className="
              border border-[var(--border)]
              rounded-2xl
              p-6
              transition-all
              hover:-translate-y-2
            "
          >
            <div className="text-4xl mb-4">👶</div>

            <h3 className="text-xl font-semibold mb-3">Baby Care</h3>

            <p className="text-[var(--muted)] leading-relaxed">
              Certified caregivers providing safe, reliable, and nurturing care
              for your little ones at home.
            </p>
          </div>

          <div
            className="
              border border-[var(--border)]
              rounded-2xl
              p-6
              transition-all
              hover:-translate-y-2
            "
          >
            <div className="text-4xl mb-4">👴</div>

            <h3 className="text-xl font-semibold mb-3">Elderly Care</h3>

            <p className="text-[var(--muted)] leading-relaxed">
              Professional support and companionship services designed for the
              comfort and wellbeing of seniors.
            </p>
          </div>

          <div
            className="
              border border-[var(--border)]
              rounded-2xl
              p-6
              transition-all
              hover:-translate-y-2
            "
          >
            <div className="text-4xl mb-4">🏥</div>

            <h3 className="text-xl font-semibold mb-3">Medical Support</h3>

            <p className="text-[var(--muted)] leading-relaxed">
              On-demand healthcare assistance delivered by qualified and trusted
              professionals whenever needed.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
