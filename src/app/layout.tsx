import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link'


export const metadata: Metadata = {
  title: "Hector A. Rodriguez",
  description: "A portfolio website for Web and App dev, AI, and Data analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white p-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Hector A. Rodriguez</Link>
            <div>
              <Link href="/portfolio" className="ml-6 hover:text-gray-300 transition-colors">Portfolio</Link>
              <Link href="/about" className="ml-6 hover:text-gray-300 transition-colors">About</Link>
              {/* You'll add a link to your Contact page here later */}
              <Link href="/contact" className="ml-6 hover:text-gray-300 transition-colors">Contact</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center mt-8">
          &copy; {new Date().getFullYear()} Hector A. Rodriguez. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
