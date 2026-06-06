import Logo from "@/components/Logo";
import Container from "@/components/Ui/Container";
import React from "react";
import NavLinks from "./NavLinks";
import AuthButton from "./AuthButton";

const Navbar = () => {
  return (
    <Container>
      <div className="border-b border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <NavLinks />
          </div>

          {/* Auth */}
          <div className="hidden md:flex">
            <AuthButton />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <details className="dropdown dropdown-end">
              <summary className="btn btn-ghost">☰</summary>

              <ul className="menu dropdown-content mt-3 z-[50] w-52 p-3 shadow rounded-box bg-[var(--card)] border border-[var(--border)]">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/my-bookings">My Bookings</a>
                </li>

                <div className="divider"></div>

                <li>
                  <a href="/service/baby-care">👶 Baby Care</a>
                </li>
                <li>
                  <a href="/service/elderly-care">👴 Elderly Care</a>
                </li>
                <li>
                  <a href="/service/sick-care">🏥 Sick Care</a>
                </li>

                <div className="divider"></div>

                <li>
                  <AuthButton />
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;