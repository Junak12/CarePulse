

import Container from '@/components/Ui/Container';
import Link from 'next/link';
import React from 'react'

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "My Bookings",
    path: "/my-bookings",
  },
];

const NavLinks = () => {
  return (
    <div className="flex items-center">
      <Container>
        <ul className="flex items-center gap-6  text-md font-medium text-md text-foreground">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}

          <li>
            <details>
              <summary>Services</summary>

              <ul className="absolute bg-white shadow p-3 rounded">
                <li>
                  <Link href="/service/baby-care">👶 Baby Care</Link>
                </li>

                <li>
                  <Link href="/service/elderly-care">👴 Elderly Care</Link>
                </li>

                <li>
                  <Link href="/service/sick-care">🏥 Sick Care</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default NavLinks