"use client";

import React from "react";
import { motion } from "framer-motion";

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

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.div variants={container} initial="hidden" animate="show">
        {/* Header */}
        <motion.div variants={item} className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold">
            About <span className="text-[var(--primary)]">Care.Pulse</span>
          </h1>

          <p
            className="mt-5 text-base md:text-lg leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Care.Pulse is a trusted home healthcare platform dedicated to
            connecting families with verified caregivers for baby care, elderly
            care, and medical support.
          </p>
        </motion.div>

        {/* Mission / Vision */}
        <motion.div
          variants={container}
          className="mt-16 grid md:grid-cols-2 gap-10"
        >
          <motion.div
            variants={item}
            className="border rounded-2xl p-6 hover:-translate-y-1 transition-all"
            style={{ borderColor: "var(--border)" }}
          >
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              To make professional home care accessible, affordable, and safe
              for every family by connecting them with trusted caregivers.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="border rounded-2xl p-6 hover:-translate-y-1 transition-all"
            style={{ borderColor: "var(--border)" }}
          >
            <h2 className="text-xl font-semibold">Our Vision</h2>
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              To become the most reliable home healthcare platform, ensuring
              comfort, dignity, and safety for every individual at home.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={container}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <motion.div variants={item}>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">
              500+
            </h3>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Verified Caregivers
            </p>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">
              12K+
            </h3>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Care Hours Delivered
            </p>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">
              98%
            </h3>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Satisfaction Rate
            </p>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">
              24/7
            </h3>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Support Available
            </p>
          </motion.div>
        </motion.div>

        {/* Closing */}
        <motion.div
          variants={item}
          className="mt-20 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-semibold">
            Caring for your loved ones is our responsibility
          </h2>

          <p
            className="mt-4 text-sm md:text-base"
            style={{ color: "var(--muted)" }}
          >
            We believe every family deserves safe, professional, and reliable
            home care services they can trust anytime, anywhere.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
