export default function Home() {
  return (
    <div style={{ backgroundColor: 'white', color: '#333' }}>
      <div className="mb-6 p-6 bg-blue-50 rounded-lg border border-blue-100">
        <h1 className="text-2xl font-bold mb-2 text-gray-800">Welcome to LifeBook</h1>
        <p className="text-gray-700">
          Your personal CRM and goal management system based on the Lifebook framework.
          Track your contacts, set goals across 12 life categories, and get AI-powered insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Contact Management</h2>
          <p className="text-gray-700 mb-4">
            Organize your personal and professional contacts with detailed profiles, tags, and interaction tracking.
          </p>
          <a href="/contacts" className="text-blue-600 hover:underline">
            Manage Contacts →
          </a>
        </div>

        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Goal Tracking</h2>
          <p className="text-gray-700 mb-4">
            Set and track goals across the 12 Lifebook categories with progress visualization and reminders.
          </p>
          <a href="/goals" className="text-blue-600 hover:underline">
            Manage Goals →
          </a>
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/contacts/new" className="p-4 bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 text-center">
            <span className="text-blue-600 font-medium">Add Contact</span>
          </a>
          <a href="/goals/new" className="p-4 bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 text-center">
            <span className="text-blue-600 font-medium">Create Goal</span>
          </a>
          <a href="/insights" className="p-4 bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 text-center">
            <span className="text-blue-600 font-medium">View Insights</span>
          </a>
          <a href="/settings" className="p-4 bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 text-center">
            <span className="text-blue-600 font-medium">Settings</span>
          </a>
        </div>
      </div>
    </div>
  );
}
