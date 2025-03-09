import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">LifeBook</span>
              <nav className="ml-6 flex space-x-4">
                <Link href="/dashboard" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/journal" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium">
                  Journal
                </Link>
                <Link href="/goals" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium">
                  Goals
                </Link>
                <Link href="/habits" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium">
                  Habits
                </Link>
                <Link href="/insights" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium">
                  Insights
                </Link>
              </nav>
            </div>
            <div className="flex items-center">
              <Link href="/dashboard" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Transform Your Life with</span>
                <span className="block text-indigo-600 dark:text-indigo-400">LifeBook</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                A holistic life management application based on the Lifebook framework. Track goals, build habits, and journal your way to a balanced and fulfilling life.
              </p>
              <div className="mt-10 flex justify-center">
                <Link href="/auth/signup" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Start Your Journey
                </Link>
                <Link href="#features" className="ml-3 px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 dark:text-indigo-400 dark:bg-gray-800 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Holistic Life Management
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
                Organize and improve all 12 areas of your life with our integrated approach.
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="pt-6">
                  <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Integrated Journaling</h3>
                      <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                        Record your thoughts, track emotions, and receive AI-powered insights that connect your daily activities to your goals.
                      </p>
                      <div className="mt-5">
                        <Link href="/journal" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                          Start journaling →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="pt-6">
                  <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Habit Formation</h3>
                      <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                        Build consistent habits aligned with your goals. Track streaks, set reminders, and visualize your progress over time.
                      </p>
                      <div className="mt-5">
                        <Link href="/habits" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                          Track your habits →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="pt-6">
                  <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Goal Setting</h3>
                      <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                        Set and track goals across all 12 life categories. Break them down into actionable milestones and monitor your progress.
                      </p>
                      <div className="mt-5">
                        <Link href="/goals" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                          Set your goals →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Feature 4 */}
                <div className="pt-6">
                  <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">AI Insights</h3>
                      <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                        Receive personalized insights and recommendations based on your journal entries, goals, and habits.
                      </p>
                      <div className="mt-5">
                        <Link href="/insights" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                          View insights →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Feature 5 */}
                <div className="pt-6">
                  <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                          </svg>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Progress Tracking</h3>
                      <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                        Visualize your progress across all life categories with intuitive charts and dashboards.
                      </p>
                      <div className="mt-5">
                        <Link href="/dashboard" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                          View dashboard →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-indigo-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                The 12 Lifebook Categories
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
                A comprehensive framework for holistic life management.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
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
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow p-4 text-center">
                  <p className="font-medium text-gray-900 dark:text-white">{category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-indigo-700 dark:bg-indigo-900">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to transform your life?</span>
              <span className="block text-indigo-300">Start your LifeBook journey today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="/dashboard" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                  Get started
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link href="/journal" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Start journaling
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} LifeBook. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
