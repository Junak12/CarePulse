"use client"

import { ThemeProviderWrapper } from "@/context/ThemeContext";
import { ThemeProvider } from "next-themes"

export const Providers = ({children}) => {
    return (
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </ThemeProvider>
    );
}