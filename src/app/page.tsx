export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Welcome Section */}
      <section className="mb-8 p-6 bg-white rounded-lg border border-gray-200">
        <h1 className="text-2xl font-bold mb-3 text-gray-800">Welcome to LifeBook</h1>
        <p className="text-gray-700">
          Your personal CRM and goal management system based on the Lifebook framework.
          Track your contacts, set goals across 12 life categories, and get AI-powered insights.
        </p>
      </section>

      {/* Main Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-3 text-gray-800">Contact Management</h2>
          <p className="text-gray-700 mb-4">
            Organize your personal and professional contacts with detailed profiles, tags, and interaction tracking.
          </p>
          <a href="/contacts" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Manage Contacts
          </a>
        </div>

        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-3 text-gray-800">Goal Tracking</h2>
          <p className="text-gray-700 mb-4">
            Set and track goals across the 12 Lifebook categories with progress visualization and reminders.
          </p>
          <a href="/goals" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Manage Goals
          </a>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="p-6 bg-white rounded-lg border border-gray-200 mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/contacts/new" className="p-4 bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 text-center">
            <span className="block text-blue-600 font-medium">Add Contact</span>
          </a>
          <a href="/goals/new" className="p-4 bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 text-center">
            <span className="block text-blue-600 font-medium">Create Goal</span>
          </a>
          <a href="/insights" className="p-4 bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 text-center">
            <span className="block text-blue-600 font-medium">View Insights</span>
          </a>
          <a href="/settings" className="p-4 bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 text-center">
            <span className="block text-blue-600 font-medium">Settings</span>
          </a>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="p-6 bg-white rounded-lg border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Lifebook Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-center">
            <span className="text-gray-700 text-sm">Health & Fitness</span>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-center">
            <span className="text-gray-700 text-sm">Intellectual Life</span>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-center">
            <span className="text-gray-700 text-sm">Emotional Life</span>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-center">
            <span className="text-gray-700 text-sm">Character</span>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-center">
            <span className="text-gray-700 text-sm">Spiritual Life</span>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-center">
            <span className="text-gray-700 text-sm">Love Relationships</span>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-center">
            <span className="text-gray-700 text-sm">Parenting</span>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-center">
            <span className="text-gray-700 text-sm">Social Life</span>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-center">
            <span className="text-gray-700 text-sm">Financial</span>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-center">
            <span className="text-gray-700 text-sm">Career</span>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-center">
            <span className="text-gray-700 text-sm">Quality of Life</span>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-center">
            <span className="text-gray-700 text-sm">Life Vision</span>
          </div>
        </div>
      </section>
    </div>
  );
}
