'use client';

import { useState } from 'react';

// Interface for habit data
interface Habit {
  id: number;
  name: string;
  description: string;
  category: string;
  frequency: 'daily' | 'weekly';
  goal: number;
  streak: number;
  completionHistory: {
    date: string;
    completed: boolean;
  }[];
}

// Categories based on Lifebook
const categories = [
  'Health & Fitness',
  'Intellectual Life',
  'Emotional Life',
  'Character',
  'Spiritual Life',
  'Love Relationships',
  'Parenting',
  'Social Life',
  'Financial',
  'Career',
  'Quality of Life',
  'Life Vision',
];

// Mock data for habits
const habits: Habit[] = [
  {
    id: 1,
    name: 'Morning meditation',
    description: 'Start the day with 15 minutes of meditation to improve focus and reduce stress.',
    category: 'Spiritual Life',
    frequency: 'daily',
    goal: 0,
    streak: 7,
    completionHistory: [
      { date: '2025-03-09', completed: true },
      { date: '2025-03-08', completed: true },
      { date: '2025-03-07', completed: true },
      { date: '2025-03-06', completed: true },
      { date: '2025-03-05', completed: true },
      { date: '2025-03-04', completed: true },
      { date: '2025-03-03', completed: true },
      { date: '2025-03-02', completed: false },
    ],
  },
  {
    id: 2,
    name: 'Read for 30 minutes',
    description: 'Read books or articles to expand knowledge and perspective.',
    category: 'Intellectual Life',
    frequency: 'daily',
    goal: 0,
    streak: 0,
    completionHistory: [
      { date: '2025-03-09', completed: false },
      { date: '2025-03-08', completed: false },
      { date: '2025-03-07', completed: true },
      { date: '2025-03-06', completed: true },
      { date: '2025-03-05', completed: true },
      { date: '2025-03-04', completed: false },
      { date: '2025-03-03', completed: true },
      { date: '2025-03-02', completed: true },
    ],
  },
  {
    id: 3,
    name: 'Exercise',
    description: 'Physical activity for at least 30 minutes to improve health and fitness.',
    category: 'Health & Fitness',
    frequency: 'daily',
    goal: 0,
    streak: 3,
    completionHistory: [
      { date: '2025-03-09', completed: true },
      { date: '2025-03-08', completed: true },
      { date: '2025-03-07', completed: true },
      { date: '2025-03-06', completed: false },
      { date: '2025-03-05', completed: false },
      { date: '2025-03-04', completed: true },
      { date: '2025-03-03', completed: true },
      { date: '2025-03-02', completed: false },
    ],
  },
  {
    id: 4,
    name: 'Journal entry',
    description: 'Write in journal to reflect on the day and track progress toward goals.',
    category: 'Emotional Life',
    frequency: 'daily',
    streak: 0,
    completionHistory: [
      { date: '2025-03-09', completed: false },
      { date: '2025-03-08', completed: true },
      { date: '2025-03-07', completed: true },
      { date: '2025-03-06', completed: false },
      { date: '2025-03-05', completed: false },
      { date: '2025-03-04', completed: true },
      { date: '2025-03-03', completed: false },
      { date: '2025-03-02', completed: true },
    ],
  },
  {
    id: 5,
    name: 'Budget review',
    description: 'Review spending and budget to stay on track with financial goals.',
    category: 'Financial',
    frequency: 'weekly',
    goal: 0,
    streak: 0,
    completionHistory: [
      { date: '2025-03-09', completed: false },
      { date: '2025-03-02', completed: true },
      { date: '2025-02-23', completed: true },
      { date: '2025-02-16', completed: true },
      { date: '2025-02-09', completed: false },
      { date: '2025-02-02', completed: true },
      { date: '2025-01-26', completed: true },
      { date: '2025-01-19', completed: true },
    ],
  },
];

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

export default function Habits() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [todaysHabits, setTodaysHabits] = useState(
    habits.map((habit) => {
      const todayEntry = habit.completionHistory.find((entry) => entry.date === today);
      return {
        ...habit,
        completedToday: todayEntry ? todayEntry.completed : false,
      };
    })
  );

  // Filter habits based on selected category
  const filteredHabits = todaysHabits.filter((habit) => {
    return selectedCategory === 'All' || habit.category === selectedCategory;
  });

  const handleHabitClick = (habit: Habit) => {
    setSelectedHabit(habit);
    setIsCreating(false);
  };

  const handleCreateNew = () => {
    setIsCreating(true);
    setSelectedHabit(null);
  };

  const toggleHabitCompletion = (id: number) => {
    setTodaysHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id === id) {
          return {
            ...habit,
            completedToday: !habit.completedToday,
          };
        }
        return habit;
      })
    );
  };

  // Calculate completion rate for the last 7 days
  const calculateCompletionRate = (habit: Habit) => {
    const last7Days = habit.completionHistory.slice(0, 7);
    const completedDays = last7Days.filter((day) => day.completed).length;
    return Math.round((completedDays / last7Days.length) * 100);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Habits</h1>
        <button
          onClick={handleCreateNew}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          New Habit
        </button>
      </div>

      {/* Today's Habits */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Today's Habits</h2>
          <div>
            <label htmlFor="category-filter" className="sr-only">
              Filter by Category
            </label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white text-sm"
            >
              <option value="All">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-hidden">
          {filteredHabits.length > 0 ? (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredHabits.map((habit) => (
                <li key={habit.id} className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id={`habit-${habit.id}`}
                        name={`habit-${habit.id}`}
                        type="checkbox"
                        checked={habit.completedToday}
                        onChange={() => toggleHabitCompletion(habit.id)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor={`habit-${habit.id}`}
                        className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        {habit.name}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 mr-2">
                        {habit.category}
                      </span>
                      <button
                        onClick={() => handleHabitClick(habit)}
                        className="ml-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 text-sm"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-4 text-gray-500 dark:text-gray-400">
              No habits found for the selected category.
            </div>
          )}
        </div>
      </div>

      {/* Habit Details or Create Form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow flex-grow">
        {isCreating ? (
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Create New Habit</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              This is a placeholder for the habit creation form. In the full implementation, you would be able to create new habits, set frequency, and connect them to goals.
            </p>
            <button
              onClick={() => setIsCreating(false)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        ) : selectedHabit ? (
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-medium text-gray-900 dark:text-white">{selectedHabit.name}</h2>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                {selectedHabit.category}
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedHabit.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Current Streak</h3>
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{selectedHabit.streak} days</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Frequency</h3>
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 capitalize">{selectedHabit.frequency}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Completion Rate</h3>
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{calculateCompletionRate(selectedHabit)}%</p>
              </div>
            </div>

            {selectedHabit.goal && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Connected Goal</h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedHabit.goal}</p>
                </div>
              </div>
            )}

            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Completion History</h3>
              <div className="flex flex-wrap gap-2">
                {selectedHabit.completionHistory.slice(0, 14).map((day, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 rounded-md flex items-center justify-center text-xs ${
                      day.completed
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                    }`}
                    title={`${day.date}: ${day.completed ? 'Completed' : 'Not completed'}`}
                  >
                    {new Date(day.date).getDate()}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                Edit
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Mark Complete
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-500 dark:text-gray-400">Select a habit or create a new one</p>
          </div>
        )}
      </div>
    </div>
  );
} 