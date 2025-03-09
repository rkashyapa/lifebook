import { Navbar } from "@/components/ui/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | LifeBook",
  description: "Manage your life with LifeBook's holistic approach",
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 space-y-1">
                <div className="space-y-2">
                  <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Lifebook Categories
                  </h3>
                  {[
                    "Health & Fitness",
                    "Intellectual Life",
                    "Emotional Life",
                    "Character",
                    "Spiritual Life",
                    "Love Relationships",
                    "Parenting",
                    "Social Life",
                    "Financial",
                    "Career",
                    "Quality of Life",
                    "Life Vision"
                  ].map((category, index) => (
                    <a
                      key={index}
                      href={`/dashboard/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <span className="truncate">{category}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 