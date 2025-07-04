import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* GitHub-like Top Navbar */}
      <header className="bg-gray-900 text-white px-6 py-3 shadow-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">🐙 GitHub</span>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#" className="hover:text-gray-300">Pull requests</a>
              <a href="#" className="hover:text-gray-300">Issues</a>
              <a href="#" className="hover:text-gray-300">Codespaces</a>
              <a href="#" className="hover:text-gray-300">Marketplace</a>
              <a href="#" className="hover:text-gray-300">Explore</a>
            </nav>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search GitHub"
              className="bg-gray-800 text-white text-sm px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </header>

      {/* Main Dashboard Layout */}
      <main className="max-w-7xl mx-auto mt-6 px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="md:col-span-1 bg-white rounded-lg shadow p-4">
          <h2 className="font-semibold text-lg mb-3">Profile</h2>
          <p className="text-sm text-gray-600">Fatima Azfar</p>
          <p className="text-sm text-gray-500">Verior Intern</p>
        </aside>

        {/* Feed / Content */}
        <section className="md:col-span-2 bg-white rounded-lg shadow p-4">
          <h2 className="font-semibold text-lg mb-3">Repositories</h2>
          <ul className="space-y-3">
            <li className="border-b pb-2">
              <h3 className="text-blue-600 font-medium">personal-portfolio</h3>
              <p className="text-sm text-gray-600">Your animated portfolio using Tailwind</p>
            </li>
            <li className="border-b pb-2">
              <h3 className="text-blue-600 font-medium">github-clone</h3>
              <p className="text-sm text-gray-600">This current project</p>
            </li>
          </ul>
        </section>

        {/* Right Panel */}
        <aside className="md:col-span-1 bg-white rounded-lg shadow p-4">
          <h2 className="font-semibold text-lg mb-3">Pinned</h2>
          <ul className="space-y-2">
            <li className="text-sm text-blue-600">CS50-Puzzle-Day</li>
            <li className="text-sm text-blue-600">Blood Bank Management</li>
          </ul>
        </aside>
      </main>
    </div>
  );
}

export default App;
