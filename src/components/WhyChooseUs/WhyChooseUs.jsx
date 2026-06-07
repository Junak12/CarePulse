

import React from "react";

const features = [
  {
    title: "Verified Caregivers",
    desc: "All caregivers go through strict background checks and skill verification.",
    icon: "✔",
  },
  {
    title: "24/7 Availability",
    desc: "Book care anytime you need — we are always available for your family.",
    icon: "⏰",
  },
  {
    title: "Affordable Pricing",
    desc: "Transparent hourly pricing with no hidden charges or extra fees.",
    icon: "💰",
  },
  {
    title: "Emergency Support",
    desc: "Quick response support for urgent care and emergency situations.",
    icon: "🚑",
  },
  {
    title: "Trusted by Families",
    desc: "Hundreds of families rely on us for safe and reliable home care.",
    icon: "🏡",
  },
  {
    title: "Easy Booking",
    desc: "Simple and fast booking process in just a few clicks.",
    icon: "⚡",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold">
          Why Choose <span className="text-[var(--primary)]">Care.Pulse</span>
        </h2>

        <p className="mt-4 text-[var(--muted)] text-base md:text-lg">
          We provide safe, reliable, and professional home care services
          designed to give you peace of mind.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="
              border
              rounded-2xl
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-md
            "
            style={{
              borderColor: "var(--border)",
            }}
          >
            {/* Icon */}
            <div className="text-2xl mb-4">{item.icon}</div>

            {/* Title */}
            <h3 className="text-lg font-semibold">{item.title}</h3>

            {/* Description */}
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
