"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "My Bookings", path: "/my-bookings" },
];

const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const linkClass = (path) =>
    `transition-colors hover:text-[var(--primary)] ${
      isActive(path) ? "text-[var(--primary)] font-semibold" : ""
    }`;

  const serviceLinkClass = (path) =>
    `block px-3 py-2 rounded hover:bg-[var(--border)] transition-colors ${
      isActive(path) ? "text-[var(--primary)] font-semibold" : ""
    }`;

  return (
    <nav className="w-full">
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link href={link.path} className={linkClass(link.path)}>
              {link.title}
            </Link>
          </li>
        ))}

        {/* Services Dropdown */}
        <li className="relative group">
          <span className="cursor-pointer hover:text-[var(--primary)] transition-colors">
            Services
          </span>

          <ul className="absolute left-0 mt-3 hidden group-hover:block min-w-[180px] bg-[var(--card)] border border-[var(--border)] shadow-md rounded-md p-2 z-50">
            <li>
              <Link
                href="/service/baby-care"
                className={serviceLinkClass("/service/baby-care")}
              >
                👶 Baby Care
              </Link>
            </li>

            <li>
              <Link
                href="/service/elderly-care"
                className={serviceLinkClass("/service/elderly-care")}
              >
                👴 Elderly Care
              </Link>
            </li>

            <li>
              <Link
                href="/service/sick-care"
                className={serviceLinkClass("/service/sick-care")}
              >
                🏥 Sick Care
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <details className="group w-full">
          <summary className="cursor-pointer font-medium py-2 text-[var(--foreground)]">
            Menu ☰
          </summary>

          <ul className="mt-3 space-y-2 bg-[var(--card)] border border-[var(--border)] rounded-lg p-3 shadow-sm">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`block py-2 px-2 rounded hover:bg-[var(--border)] ${
                    isActive(link.path)
                      ? "text-[var(--primary)] font-semibold"
                      : ""
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}

            {/* Mobile Services */}
            <details className="group">
              <summary className="cursor-pointer py-2 px-2 rounded hover:bg-[var(--border)]">
                Services
              </summary>

              <ul className="mt-2 ml-3 space-y-2">
                <li>
                  <Link
                    href="/service/baby-care"
                    className={`block py-1 ${
                      isActive("/service/baby-care")
                        ? "text-[var(--primary)] font-semibold"
                        : ""
                    }`}
                  >
                    👶 Baby Care
                  </Link>
                </li>

                <li>
                  <Link
                    href="/service/elderly-care"
                    className={`block py-1 ${
                      isActive("/service/elderly-care")
                        ? "text-[var(--primary)] font-semibold"
                        : ""
                    }`}
                  >
                    👴 Elderly Care
                  </Link>
                </li>

                <li>
                  <Link
                    href="/service/sick-care"
                    className={`block py-1 ${
                      isActive("/service/sick-care")
                        ? "text-[var(--primary)] font-semibold"
                        : ""
                    }`}
                  >
                    🏥 Sick Care
                  </Link>
                </li>
              </ul>
            </details>
          </ul>
        </details>
      </div>
    </nav>
  );
};

export default NavLinks;
