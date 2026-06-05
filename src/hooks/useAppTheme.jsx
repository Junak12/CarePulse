"use client";

import { useThemeContext } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

export default function useAppTheme() {
  const { theme, resolvedTheme, isDark, toggleTheme, setTheme } =
    useThemeContext();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    theme,
    resolvedTheme,
    isDark,
    toggleTheme,
    setTheme,
    mounted,
  };
}
