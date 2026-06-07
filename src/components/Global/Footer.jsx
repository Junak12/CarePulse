import React from "react";
import Link from "next/link";
import Container from "../Ui/Container";

const Footer = () => {
  return (
    <Container>
      <footer className="border-t mt-10 border-slate-600">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <h2 className="text-xl font-bold">
                Care.<span className="text-[var(--primary)]">Pulse</span>
              </h2>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Trusted home healthcare platform connecting families with
                verified caregivers for safe and reliable care.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul
                className="space-y-2 text-sm"
                style={{ color: "var(--muted)" }}
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul
                className="space-y-2 text-sm"
                style={{ color: "var(--muted)" }}
              >
                <li>Baby Care</li>
                <li>Elderly Care</li>
                <li>Medical Support</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul
                className="space-y-2 text-sm"
                style={{ color: "var(--muted)" }}
              >
                <li>📍 Sylhet, Bangladesh</li>
                <li>📞 +880 1234 567890</li>
                <li>✉️ support@carepulse.com</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
            style={{ borderColor: "var(--border)", color: "var(--muted)" }}
          >
            <p>© {new Date().getFullYear()} Care.Pulse. All rights reserved.</p>

            <div className="flex gap-6">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
