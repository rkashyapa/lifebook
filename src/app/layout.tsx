import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./reset.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en" className="light">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col bg-white`}
        style={{ backgroundColor: 'white', color: '#333' }}
      >
        <header className="bg-blue-600 text-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold">
              LifeBook
            </h1>
            <nav>
              <ul className="flex space-x-8">
                <li><a href="/" className="text-white hover:text-blue-100 text-sm font-medium">Dashboard</a></li>
                <li><a href="/contacts" className="text-white hover:text-blue-100 text-sm font-medium">Contacts</a></li>
                <li><a href="/goals" className="text-white hover:text-blue-100 text-sm font-medium">Goals</a></li>
                <li><a href="/insights" className="text-white hover:text-blue-100 text-sm font-medium">Insights</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-6 bg-white">
          {children}
        </main>
        <footer className="bg-gray-100 border-t mt-auto">
          <div className="max-w-6xl mx-auto px-4 py-4 text-center text-gray-500 text-sm">
            <p suppressHydrationWarning>© {new Date().getFullYear()} LifeBook - Personal CRM & Goal Management</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
