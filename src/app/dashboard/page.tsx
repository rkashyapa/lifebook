import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | LifeBook",
  description: "Your personal life management dashboard",
};

interface CategoryProgress {
  name: string;
  progress: number;
  color: string;
}

// Mock data for demonstration
const categoriesProgress: CategoryProgress[] = [
  { name: "Health & Fitness", progress: 65, color: "bg-red-500" },
  { name: "Intellectual Life", progress: 80, color: "bg-blue-500" },
  { name: "Emotional Life", progress: 45, color: "bg-yellow-500" },
  { name: "Character", progress: 90, color: "bg-green-500" },
  { name: "Spiritual Life", progress: 30, color: "bg-purple-500" },
  { name: "Love Relationships", progress: 75, color: "bg-pink-500" },
  { name: "Parenting", progress: 60, color: "bg-indigo-500" },
  { name: "Social Life", progress: 50, color: "bg-orange-500" },
  { name: "Financial", progress: 85, color: "bg-teal-500" },
  { name: "Career", progress: 70, color: "bg-cyan-500" },
  { name: "Quality of Life", progress: 55, color: "bg-lime-500" },
  { name: "Life Vision", progress: 40, color: "bg-emerald-500" },
];

// Mock data for habits
const todaysHabits = [
  { id: 1, name: "Morning meditation", completed: true, category: "Spiritual Life" },
  { id: 2, name: "Read for 30 minutes", completed: false, category: "Intellectual Life" },
  { id: 3, name: "Exercise", completed: true, category: "Health & Fitness" },
  { id: 4, name: "Journal entry", completed: false, category: "Emotional Life" },
  { id: 5, name: "Budget review", completed: false, category: "Financial" },
];

// Mock data for recent journal entries
const recentJournalEntries = [
  {
    id: 1,
    title: "Morning Reflection",
    excerpt: "Today I'm feeling optimistic about my career goals...",
    date: "Today, 8:30 AM",
    category: "Career",
  },
  {
    id: 2,
    title: "Workout Progress",
    excerpt: "Completed a 5K run today, feeling stronger than last week...",
    date: "Yesterday, 6:15 PM",
    category: "Health & Fitness",
  },
  {
    id: 3,
    title: "Financial Planning",
    excerpt: "Reviewed my investment portfolio and made some adjustments...",
    date: "2 days ago, 7:45 PM",
    category: "Financial",
  },
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Welcome back! Here's an overview of your life progress.
      </p>

      {/* Overview Cards */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    Journal Entries
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900 dark:text-white">28</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    Habits Completed
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900 dark:text-white">2/5</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    Active Goals
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900 dark:text-white">12</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Progress */}
      <h2 className="mt-8 text-lg font-medium text-gray-900 dark:text-white">Category Progress</h2>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categoriesProgress.map((category) => (
          <div key={category.name} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">{category.name}</h3>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{category.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className={`${category.color} h-2.5 rounded-full`}
                  style={{ width: `${category.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Today's Habits */}
      <h2 className="mt-8 text-lg font-medium text-gray-900 dark:text-white">Today's Habits</h2>
      <div className="mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {todaysHabits.map((habit) => (
            <li key={habit.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id={`habit-${habit.id}`}
                      name={`habit-${habit.id}`}
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      defaultChecked={habit.completed}
                    />
                    <label htmlFor={`habit-${habit.id}`} className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {habit.name}
                    </label>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                      {habit.category}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Journal Entries */}
      <h2 className="mt-8 text-lg font-medium text-gray-900 dark:text-white">Recent Journal Entries</h2>
      <div className="mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentJournalEntries.map((entry) => (
            <li key={entry.id}>
              <a href={`/journal/${entry.id}`} className="block hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 truncate">
                      {entry.title}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                        {entry.category}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {entry.excerpt}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                      <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <p>
                        {entry.date}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 