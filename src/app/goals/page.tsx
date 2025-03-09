'use client';

import { useState } from 'react';

// Goal types
type GoalTimeframe = 'annual' | 'quarterly' | 'monthly' | 'weekly';

interface Goal {
  id: number;
  title: string;
  description: string;
  category: string;
  timeframe: GoalTimeframe;
  progress: number;
  dueDate: string;
  milestones: Milestone[];
}

interface Milestone {
  id: number;
  title: string;
  completed: boolean;
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

// Mock data for goals
const mockGoals: Goal[] = [
  {
    id: 1,
    title: 'Run a half marathon',
    description: 'Train and complete a half marathon to improve cardiovascular health and endurance.',
    category: 'Health & Fitness',
    timeframe: 'quarterly',
    progress: 65,
    dueDate: '2025-06-15',
    milestones: [
      { id: 1, title: 'Run 5K without stopping', completed: true },
      { id: 2, title: 'Run 10K without stopping', completed: true },
      { id: 3, title: 'Run 15K without stopping', completed: false },
      { id: 4, title: 'Complete a half marathon', completed: false },
    ],
  },
  {
    id: 2,
    title: 'Read 24 books this year',
    description: 'Expand knowledge and perspective by reading 2 books per month across various genres.',
    category: 'Intellectual Life',
    timeframe: 'annual',
    progress: 25,
    dueDate: '2025-12-31',
    milestones: [
      { id: 5, title: 'Read 6 books (Q1)', completed: true },
      { id: 6, title: 'Read 12 books (Q2)', completed: false },
      { id: 7, title: 'Read 18 books (Q3)', completed: false },
      { id: 8, title: 'Read 24 books (Q4)', completed: false },
    ],
  },
  {
    id: 3,
    title: 'Build emergency fund',
    description: 'Save 6 months of living expenses for financial security and peace of mind.',
    category: 'Financial',
    timeframe: 'annual',
    progress: 50,
    dueDate: '2025-12-31',
    milestones: [
      { id: 9, title: 'Save 1 month of expenses', completed: true },
      { id: 10, title: 'Save 3 months of expenses', completed: true },
      { id: 11, title: 'Save 6 months of expenses', completed: false },
    ],
  },
  {
    id: 4,
    title: 'Advance in current role',
    description: 'Take on more responsibility and develop leadership skills to prepare for promotion.',
    category: 'Career',
    timeframe: 'quarterly',
    progress: 40,
    dueDate: '2025-03-31',
    milestones: [
      { id: 12, title: 'Complete leadership training', completed: true },
      { id: 13, title: 'Lead a project team', completed: false },
      { id: 14, title: 'Seek mentorship', completed: true },
      { id: 15, title: 'Request performance review', completed: false },
    ],
  },
  {
    id: 5,
    title: 'Practice daily meditation',
    description: 'Establish a consistent meditation practice to improve mental clarity and emotional balance.',
    category: 'Spiritual Life',
    timeframe: 'monthly',
    progress: 80,
    dueDate: '2025-03-31',
    milestones: [
      { id: 16, title: 'Meditate 5 minutes daily for a week', completed: true },
      { id: 17, title: 'Meditate 10 minutes daily for a week', completed: true },
      { id: 18, title: 'Meditate 15 minutes daily for a week', completed: true },
      { id: 19, title: 'Meditate 20 minutes daily for a week', completed: false },
    ],
  },
];

export default function Goals() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTimeframe, setSelectedTimeframe] = useState<GoalTimeframe | 'All'>('All');
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  // Filter goals based on selected category and timeframe
  const filteredGoals = mockGoals.filter((goal) => {
    const categoryMatch = selectedCategory === 'All' || goal.category === selectedCategory;
    const timeframeMatch = selectedTimeframe === 'All' || goal.timeframe === selectedTimeframe;
    return categoryMatch && timeframeMatch;
  });

  const handleGoalClick = (goal: Goal) => {
    setSelectedGoal(goal);
    setIsCreating(false);
  };

  const handleCreateNew = () => {
    setIsCreating(true);
    setSelectedGoal(null);
  };

  const handleMilestoneToggle = (goalId: number, milestoneId: number) => {
    // In a real app, this would update the database
    console.log(`Toggling milestone ${milestoneId} for goal ${goalId}`);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Goals</h1>
        <button
          onClick={handleCreateNew}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          New Goal
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Category
            </label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="All">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="timeframe-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Timeframe
            </label>
            <select
              id="timeframe-filter"
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value as GoalTimeframe | 'All')}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="All">All Timeframes</option>
              <option value="annual">Annual</option>
              <option value="quarterly">Quarterly</option>
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 flex-grow">
        {/* Goals List */}
        <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              {filteredGoals.length} {filteredGoals.length === 1 ? 'Goal' : 'Goals'}
            </h2>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: '600px' }}>
            {filteredGoals.length > 0 ? (
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredGoals.map((goal) => (
                  <li
                    key={goal.id}
                    className={`cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                      selectedGoal?.id === goal.id ? 'bg-indigo-50 dark:bg-indigo-900' : ''
                    }`}
                    onClick={() => handleGoalClick(goal)}
                  >
                    <div className="px-4 py-4">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{goal.title}</p>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                          {goal.timeframe}
                        </span>
                      </div>
                      <div className="mt-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{goal.description}</p>
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">{goal.progress}%</span>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div
                              className="bg-indigo-600 h-2.5 rounded-full"
                              style={{ width: `${goal.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Due: {new Date(goal.dueDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                No goals found. Try adjusting your filters or create a new goal.
              </div>
            )}
          </div>
        </div>

        {/* Goal Detail or Create Form */}
        <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow">
          {isCreating ? (
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Create New Goal</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                This is a placeholder for the goal creation form. In the full implementation, you would be able to create new goals with milestones, set due dates, and connect them to habits.
              </p>
              <button
                onClick={() => setIsCreating(false)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          ) : selectedGoal ? (
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-medium text-gray-900 dark:text-white">{selectedGoal.title}</h2>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                  {selectedGoal.category}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedGoal.description}</p>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</h3>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{selectedGoal.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${selectedGoal.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Due Date</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(selectedGoal.dueDate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Milestones</h3>
                <ul className="space-y-3">
                  {selectedGoal.milestones.map((milestone) => (
                    <li key={milestone.id} className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id={`milestone-${milestone.id}`}
                          name={`milestone-${milestone.id}`}
                          type="checkbox"
                          checked={milestone.completed}
                          onChange={() => handleMilestoneToggle(selectedGoal.id, milestone.id)}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor={`milestone-${milestone.id}`}
                          className={`font-medium ${
                            milestone.completed
                              ? 'text-gray-400 dark:text-gray-500 line-through'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {milestone.title}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Connected Habits</h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Run 3 times per week</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Stretch daily for 10 minutes</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Track nutrition daily</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Edit
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Update Progress
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 dark:text-gray-400">Select a goal or create a new one</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 