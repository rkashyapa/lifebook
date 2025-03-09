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
      <body suppressHydrationWarning className={`${inter.variable} font-sans bg-gray-50`}>
        <header className="bg-white border-b">
          <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">LifeBook</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="text-gray-600 hover:text-blue-600">Dashboard</a></li>
                <li><a href="/contacts" className="text-gray-600 hover:text-blue-600">Contacts</a></li>
                <li><a href="/goals" className="text-gray-600 hover:text-blue-600">Goals</a></li>
                <li><a href="/insights" className="text-gray-600 hover:text-blue-600">Insights</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-white border-t">
          <div className="max-w-5xl mx-auto px-4 py-4 text-center text-gray-500 text-sm">
            <p suppressHydrationWarning>© 2025 LifeBook - Personal CRM & Goal Management</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
