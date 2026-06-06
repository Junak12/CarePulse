"use client";

import useAppTheme from "@/hooks/useAppTheme";
import Link from "next/link";

export default function AuthButton() {
  const { isDark, toggleTheme, mounted } = useAppTheme();

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2 md:gap-3">
      
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className="h-10 w-10 rounded-full border border-[var(--border)] bg-[var(--card)] flex items-center justify-center transition-all hover:scale-105 hover:shadow-md active:scale-95"
      >
        <span className="text-lg">{isDark ? "☀️" : "🌙"}</span>
      </button>

      <Link
        href="/login"
        className="
          hidden sm:inline-flex
          px-4 py-2
          rounded-lg
          border border-[var(--border)]
          text-[var(--foreground)]
          bg-[var(--card)]
          hover:border-[var(--primary)]
          hover:text-[var(--primary)]
          hover:shadow-sm
          transition-all
        "
      >
        Login
      </Link>

      
      <Link
        href="/register"
        className="
          px-4 py-2
          rounded-lg
          bg-[var(--primary)]
          text-white
          font-medium
          shadow-sm
          hover:bg-[var(--primary-hover)]
          hover:shadow-md
          active:scale-95
          transition-all
        "
      >
        Sign Up
      </Link>
    </div>
  );
}
