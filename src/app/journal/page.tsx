'use client';

import { useState } from 'react';

// Mock data for journal entries
const journalEntries = [
  {
    id: 1,
    title: 'Morning Reflection',
    content: "Today I'm feeling optimistic about my career goals. I had a productive meeting with my manager yesterday and we discussed potential growth opportunities within the company. I need to focus on developing my leadership skills and taking on more challenging projects.",
    date: '2025-03-09T08:30:00',
    category: 'Career',
    mood: 'Optimistic',
  },
  {
    id: 2,
    title: 'Workout Progress',
    content: "Completed a 5K run today, feeling stronger than last week. My pace has improved by 30 seconds per kilometer. I need to focus on my nutrition to support my training goals. Planning to increase my protein intake and reduce processed foods.",
    date: '2025-03-08T18:15:00',
    category: 'Health & Fitness',
    mood: 'Energized',
  },
  {
    id: 3,
    title: 'Financial Planning',
    content: "Reviewed my investment portfolio and made some adjustments based on my long-term goals. I'm on track to meet my savings target for the year, but need to reduce some discretionary spending. Planning to automate more of my savings to stay consistent.",
    date: '2025-03-07T19:45:00',
    category: 'Financial',
    mood: 'Focused',
  },
  {
    id: 4,
    title: 'Family Time',
    content: "Spent the evening with family playing board games and having meaningful conversations. These moments remind me of what's truly important in life. I want to make this a weekly tradition to strengthen our bonds.",
    date: '2025-03-06T20:30:00',
    category: 'Love Relationships',
    mood: 'Content',
  },
  {
    id: 5,
    title: 'Book Reflections',
    content: "Finished reading \"Atomic Habits\" by James Clear. The concept of identity-based habits resonated with me. I'm going to focus on building systems rather than setting goals. Starting with my morning routine to include reading and meditation.",
    date: '2025-03-05T21:00:00',
    category: 'Intellectual Life',
    mood: 'Inspired',
  },
];

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

// Mood options
const moods = [
  'Happy',
  'Sad',
  'Anxious',
  'Calm',
  'Energized',
  'Tired',
  'Focused',
  'Distracted',
  'Inspired',
  'Frustrated',
  'Content',
  'Optimistic',
];

export default function Journal() {
  const [selectedEntry, setSelectedEntry] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [newEntry, setNewEntry] = useState({
    title: '',
    content: '',
    category: categories[0],
    mood: moods[0],
  });

  const handleEntryClick = (id: number) => {
    setSelectedEntry(id);
    setIsCreating(false);
  };

  const handleCreateNew = () => {
    setIsCreating(true);
    setSelectedEntry(null);
    setNewEntry({
      title: '',
      content: '',
      category: categories[0],
      mood: moods[0],
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a database
    console.log('New journal entry:', newEntry);
    // Reset form and state
    setIsCreating(false);
  };

  const selectedEntryData = journalEntries.find((entry) => entry.id === selectedEntry);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Journal</h1>
        <button
          onClick={handleCreateNew}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          New Entry
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 h-full">
        {/* Journal Entries List */}
        <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Entries</h2>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: '600px' }}>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {journalEntries.map((entry) => (
                <li
                  key={entry.id}
                  className={`cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                    selectedEntry === entry.id ? 'bg-indigo-50 dark:bg-indigo-900' : ''
                  }`}
                  onClick={() => handleEntryClick(entry.id)}
                >
                  <div className="px-4 py-4">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{entry.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(entry.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="mt-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{entry.content}</p>
                    </div>
                    <div className="mt-2 flex justify-between">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                        {entry.category}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                        {entry.mood}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Journal Entry Detail or Create Form */}
        <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow">
          {isCreating ? (
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">New Journal Entry</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newEntry.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={newEntry.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mood" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Mood
                    </label>
                    <select
                      id="mood"
                      name="mood"
                      value={newEntry.mood}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    >
                      {moods.map((mood) => (
                        <option key={mood} value={mood}>
                          {mood}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Content
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={newEntry.content}
                    onChange={handleInputChange}
                    rows={12}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsCreating(false)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Save Entry
                  </button>
                </div>
              </form>
            </div>
          ) : selectedEntryData ? (
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-medium text-gray-900 dark:text-white">{selectedEntryData.title}</h2>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(selectedEntryData.date).toLocaleString()}
                </div>
              </div>

              <div className="flex space-x-2 mb-6">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                  {selectedEntryData.category}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                  {selectedEntryData.mood}
                </span>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{selectedEntryData.content}</p>
              </div>

              <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">AI Insights</h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Category Analysis:</strong> This entry primarily focuses on your career development, showing a positive outlook and strategic thinking.
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    <strong>Goal Alignment:</strong> This aligns with your Q1 goal of "Advance in current role" and shows progress in the "Seek mentorship" milestone.
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    <strong>Suggestion:</strong> Consider creating a specific action plan for developing leadership skills mentioned in this entry.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 dark:text-gray-400">Select an entry or create a new one</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 