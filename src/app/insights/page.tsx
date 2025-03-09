'use client';

import { useState } from 'react';

// Interface for insight data
interface Insight {
  id: number;
  title: string;
  description: string;
  category: string;
  type: 'journal' | 'goal' | 'habit' | 'combined';
  date: string;
  actionItems?: string[];
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

// Mock data for insights
const mockInsights: Insight[] = [
  {
    id: 1,
    title: 'Goal Progress Acceleration',
    description: 'Your running habit consistency has increased by 20% this month, which is directly contributing to your half marathon goal. At this rate, you\'ll be ready for the half marathon ahead of schedule.',
    category: 'Health & Fitness',
    type: 'goal',
    date: '2025-03-09',
    actionItems: [
      'Consider increasing your long run distance by 10% this week',
      'Add one strength training session per week to prevent injuries',
      'Update your goal timeline to reflect your accelerated progress',
    ],
  },
  {
    id: 2,
    title: 'Reading Habit Opportunity',
    description: 'Your journal entries indicate you\'re spending 45 minutes on social media in the evenings. This time could be redirected to your reading habit, which has been inconsistent lately.',
    category: 'Intellectual Life',
    type: 'habit',
    date: '2025-03-08',
    actionItems: [
      'Set a 15-minute social media limit in the evenings',
      'Place a book by your bed as a visual reminder',
      'Start with just 10 minutes of reading to rebuild the habit',
    ],
  },
  {
    id: 3,
    title: 'Financial Goal Insight',
    description: 'Based on your current saving rate, you\'ll reach your emergency fund goal 2 months later than planned. Your recent journal entries mention increased dining out expenses.',
    category: 'Financial',
    type: 'journal',
    date: '2025-03-07',
    actionItems: [
      'Review your dining budget and consider cooking one more meal at home per week',
      'Set up an automatic transfer to your emergency fund',
      'Track dining expenses for 2 weeks to identify patterns',
    ],
  },
  {
    id: 4,
    title: 'Meditation Impact',
    description: 'Your consistent meditation practice correlates with improved emotional balance in your journal entries. Days with meditation show 40% fewer mentions of stress or anxiety.',
    category: 'Spiritual Life',
    type: 'habit',
    date: '2025-03-06',
    actionItems: [
      'Continue your current meditation streak',
      'Consider adding 5 minutes to your practice',
      'Journal specifically about meditation benefits to reinforce the habit',
    ],
  },
  {
    id: 5,
    title: 'Life Balance Alert',
    description: 'Over the past month, 70% of your time and focus has been on Career and Financial categories, while Health & Fitness and Relationships have received less than 10% each.',
    category: 'Balance',
    type: 'balance',
    date: '2025-03-05',
    actionItems: [
      'Schedule at least two social activities in the coming week',
      'Block time for exercise on your calendar',
      'Consider a weekly review of time allocation across life categories',
    ],
  },
];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'quarter'>('week');

  // Filter insights based on selected category
  const filteredInsights = mockInsights.filter((insight) => {
    return selectedCategory === 'All' || insight.category === selectedCategory;
  });

  const handleInsightClick = (insight: Insight) => {
    setSelectedInsight(insight);
  };

  // Mock data for category distribution
  const categoryDistribution = [
    { category: 'Health & Fitness', percentage: 15 },
    { category: 'Intellectual Life', percentage: 10 },
    { category: 'Emotional Life', percentage: 8 },
    { category: 'Character', percentage: 5 },
    { category: 'Spiritual Life', percentage: 12 },
    { category: 'Love Relationships', percentage: 7 },
    { category: 'Parenting', percentage: 3 },
    { category: 'Social Life', percentage: 5 },
    { category: 'Financial', percentage: 15 },
    { category: 'Career', percentage: 12 },
    { category: 'Quality of Life', percentage: 5 },
    { category: 'Life Vision', percentage: 3 },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Insights</h1>
        <div className="flex space-x-2">
          <select
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
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value as 'week' | 'month' | 'quarter')}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white text-sm"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Insights List */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Insights</h2>
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: '600px' }}>
              {filteredInsights.length > 0 ? (
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredInsights.map((insight) => (
                    <li
                      key={insight.id}
                      className={`cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                        selectedInsight?.id === insight.id ? 'bg-indigo-50 dark:bg-indigo-900' : ''
                      }`}
                      onClick={() => handleInsightClick(insight)}
                    >
                      <div className="px-4 py-4">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{insight.title}</p>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                            {insight.type}
                          </span>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{insight.description}</p>
                        </div>
                        <div className="mt-2 flex justify-between">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            {insight.category}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {new Date(insight.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                  No insights found for the selected category.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Insight Detail and Charts */}
        <div className="lg:col-span-2">
          {selectedInsight ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-medium text-gray-900 dark:text-white">{selectedInsight.title}</h2>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                  {selectedInsight.category}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedInsight.description}</p>

              {selectedInsight.actionItems && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Recommended Actions</h3>
                  <ul className="space-y-2">
                    {selectedInsight.actionItems.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 text-indigo-500">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Related Data</h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    This insight is based on analysis of your journal entries, habit tracking data, and goal progress over the past {timeframe}.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {/* Life Balance Chart */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Life Balance</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Distribution of your time and focus across the 12 Lifebook categories based on your journal entries, habits, and goals.
                </p>
                <div className="h-64 flex items-center justify-center">
                  <div className="w-full">
                    {categoryDistribution.map((item) => (
                      <div key={item.category} className="mb-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{item.category}</span>
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Weekly Summary */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Weekly Summary</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Achievements</h3>
                    <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>Completed 85% of your daily habits</li>
                      <li>Made progress on 3 major goals</li>
                      <li>Journaled 5 out of 7 days</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Areas for Improvement</h3>
                    <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>Health & Fitness category received less attention</li>
                      <li>Reading habit was inconsistent</li>
                      <li>Social Life goals had no recorded progress</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mood Trends</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Your journal entries show a positive trend in emotional well-being, with more mentions of feeling "energized" and "focused" compared to last week.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 