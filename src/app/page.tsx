export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg p-8 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent opacity-10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-dark to-accent-dark bg-clip-text text-transparent">
            Welcome to LifeBook
          </h1>
          <p className="text-lg max-w-3xl">
            Your personal CRM and goal management system based on the Lifebook framework.
            Track your contacts, set goals across 12 life categories, and get AI-powered insights.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg p-8 relative overflow-hidden">
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-primary opacity-10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark">Contact Management</h2>
            <p className="mb-6 text-gray-700">
              Organize your personal and professional contacts with detailed profiles, tags, and interaction tracking.
            </p>
            <a href="/contacts" className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg px-4 py-2 transition-all duration-300 hover:shadow-md hover:bg-white/80 font-medium inline-block text-primary-dark">
              Manage Contacts
            </a>
          </div>
        </section>

        <section className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg p-8 relative overflow-hidden">
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-accent opacity-10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark">Goal Tracking</h2>
            <p className="mb-6 text-gray-700">
              Set and track goals across the 12 Lifebook categories with progress visualization and reminders.
            </p>
            <a href="/goals" className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg px-4 py-2 transition-all duration-300 hover:shadow-md hover:bg-white/80 font-medium inline-block text-primary-dark">
              Manage Goals
            </a>
          </div>
        </section>
      </div>

      {/* Quick Actions */}
      <section className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-primary-dark">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a href="/contacts/new" className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 p-5 text-center">
            <span className="block text-primary-dark font-medium">Add Contact</span>
          </a>
          <a href="/goals/new" className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 p-5 text-center">
            <span className="block text-primary-dark font-medium">Create Goal</span>
          </a>
          <a href="/insights" className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 p-5 text-center">
            <span className="block text-primary-dark font-medium">View Insights</span>
          </a>
          <a href="/settings" className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 p-5 text-center">
            <span className="block text-primary-dark font-medium">Settings</span>
          </a>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-primary-dark">Lifebook Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 p-4 text-center">
            <span className="text-primary-dark">Health & Fitness</span>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 p-4 text-center">
            <span className="text-primary-dark">Intellectual Life</span>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 p-4 text-center">
            <span className="text-primary-dark">Emotional Life</span>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 p-4 text-center">
            <span className="text-primary-dark">Character</span>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 p-4 text-center">
            <span className="text-primary-dark">Spiritual Life</span>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 p-4 text-center">
            <span className="text-primary-dark">Love Relationships</span>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 p-4 text-center">
            <span className="text-primary-dark">Parenting</span>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 p-4 text-center">
            <span className="text-primary-dark">Social Life</span>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 p-4 text-center">
            <span className="text-primary-dark">Financial</span>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 p-4 text-center">
            <span className="text-primary-dark">Career</span>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 p-4 text-center">
            <span className="text-primary-dark">Quality of Life</span>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 p-4 text-center">
            <span className="text-primary-dark">Life Vision</span>
          </div>
        </div>
      </section>
    </div>
  );
}
