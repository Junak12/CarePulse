import Link from "next/link";
import React from "react";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "My Bookings", path: "/my-bookings" },
];

const NavLinks = () => {
  return (
    <nav className="w-full">
      
      <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className="hover:text-[var(--primary)] transition-colors"
            >
              {link.title}
            </Link>
          </li>
        ))}

       
        <li className="relative group">
          <span className="cursor-pointer hover:text-[var(--primary)] transition-colors">
            Services
          </span>

          <ul className="absolute left-0 mt-3 hidden group-hover:block min-w-[180px] bg-[var(--card)] border border-[var(--border)] shadow-md rounded-md p-2 z-50">
            <li>
              <Link
                className="block px-3 py-2 hover:bg-[var(--border)] rounded"
                href="/service/baby-care"
              >
                👶 Baby Care
              </Link>
            </li>

            <li>
              <Link
                className="block px-3 py-2 hover:bg-[var(--border)] rounded"
                href="/service/elderly-care"
              >
                👴 Elderly Care
              </Link>
            </li>

            <li>
              <Link
                className="block px-3 py-2 hover:bg-[var(--border)] rounded"
                href="/service/sick-care"
              >
                🏥 Sick Care
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      
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
                  className="block py-2 px-2 rounded hover:bg-[var(--border)]"
                >
                  {link.title}
                </Link>
              </li>
            ))}

           
            <details className="group">
              <summary className="cursor-pointer py-2 px-2 rounded hover:bg-[var(--border)]">
                Services
              </summary>

              <ul className="mt-2 ml-3 space-y-2">
                <li>
                  <Link className="block py-1" href="/service/baby-care">
                    👶 Baby Care
                  </Link>
                </li>

                <li>
                  <Link className="block py-1" href="/service/elderly-care">
                    👴 Elderly Care
                  </Link>
                </li>

                <li>
                  <Link className="block py-1" href="/service/sick-care">
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
