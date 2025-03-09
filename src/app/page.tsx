import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="relative isolate">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Transform Your Life with LifeBook
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                A holistic life management application based on the Lifebook framework. Track goals, build habits, and journal your way to a balanced and fulfilling life.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/dashboard"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
                <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Holistic Life Management</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Organize and improve all 12 areas of your life with our integrated approach.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600 dark:text-indigo-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    Integrated Journaling
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">
                      Record your thoughts, track emotions, and receive AI-powered insights that connect your daily activities to your goals.
                    </p>
                    <p className="mt-6">
                      <Link href="/journal" className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400">
                        Start journaling <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600 dark:text-indigo-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    Habit Formation
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">
                      Build consistent habits aligned with your goals. Track streaks, set reminders, and visualize your progress over time.
                    </p>
                    <p className="mt-6">
                      <Link href="/habits" className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400">
                        Track your habits <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600 dark:text-indigo-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                    Goal Setting
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">
                      Set and track goals across all 12 life categories. Break them down into actionable milestones and monitor your progress.
                    </p>
                    <p className="mt-6">
                      <Link href="/goals" className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400">
                        Set your goals <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* AI Insights section */}
        <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">AI Insights</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Receive personalized insights and recommendations based on your journal entries, goals, and habits.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Our AI analyzes your data to identify patterns, suggest improvements, and help you make progress in all areas of your life.
              </p>
              <div className="mt-10 flex items-center justify-center">
                <Link
                  href="/insights"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  View your insights
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Categories section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">The 12 Lifebook Categories</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                A comprehensive framework for holistic life management.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {[
                  { name: "Health & Fitness", description: "Physical wellbeing and vitality" },
                  { name: "Intellectual Life", description: "Learning and mental growth" },
                  { name: "Emotional Life", description: "Emotional wellbeing and stability" },
                  { name: "Character", description: "Values, integrity, and personal growth" },
                  { name: "Spiritual Life", description: "Connection to something greater" },
                  { name: "Love Relationships", description: "Romantic partnerships" },
                  { name: "Parenting", description: "Raising and nurturing children" },
                  { name: "Social Life", description: "Friendships and community" },
                  { name: "Financial", description: "Money management and wealth building" },
                  { name: "Career", description: "Professional growth and fulfillment" },
                  { name: "Quality of Life", description: "Lifestyle and daily experiences" },
                  { name: "Life Vision", description: "Overall purpose and direction" },
                ].map((category) => (
                  <div key={category.name} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                      <div className="h-full w-full flex items-center justify-center p-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
