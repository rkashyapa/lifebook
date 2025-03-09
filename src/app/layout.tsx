import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LifeBook - Personal CRM & Goal Management",
  description: "A personal CRM and goal management application based on the Lifebook framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.variable} font-sans`}>
        <header className="sticky top-0 z-10 mb-8">
          <div className="glass mx-auto my-4 max-w-7xl px-6 py-3">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent">
                LifeBook
              </h1>
              <nav>
                <ul className="flex space-x-8">
                  <li><a href="/" className="text-primary-dark hover:text-primary transition-colors">Dashboard</a></li>
                  <li><a href="/contacts" className="text-primary-dark hover:text-primary transition-colors">Contacts</a></li>
                  <li><a href="/goals" className="text-primary-dark hover:text-primary transition-colors">Goals</a></li>
                  <li><a href="/insights" className="text-primary-dark hover:text-primary transition-colors">Insights</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-6 pb-12">
          {children}
        </main>
        <footer className="mt-auto py-6">
          <div className="glass max-w-7xl mx-auto px-6 py-4 text-center">
            <p suppressHydrationWarning className="text-sm text-primary-dark">
              © 2025 LifeBook - Personal CRM & Goal Management
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
