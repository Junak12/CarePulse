import Navbar from "@/components/Global/Navbar/Navbar";
import "./globals.css";
import { Providers } from "./providers";

import Footer from "@/components/Global/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Providers>
          {/* FULL WIDTH NAVBAR */}
          <Navbar/>

          {/* CENTERED CONTENT SYSTEM */}
          <main className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-15">
              {children}
            </div>
          </main>

          {/* FULL WIDTH FOOTER */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
