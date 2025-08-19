export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">✨</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Smart Campus Assistant</h1>
          <p className="text-gray-600">SVIST - Pure HTML/CSS/JS Version</p>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            The Smart Campus Assistant has been created as a pure HTML/CSS/JavaScript application.
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-purple-900 mb-2">Access the Application</h3>
            <p className="text-sm text-purple-700 mb-3">
              To view the full Smart Campus Assistant, open the{" "}
              <code className="bg-purple-100 px-1 rounded">index.html</code> file directly in your browser.
            </p>
            <div className="text-xs text-purple-600">
              <p>📁 Files created:</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>index.html - Main application</li>
                <li>styles.css - All styling</li>
                <li>script.js - Interactive functionality</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Features Included</h3>
            <div className="text-sm text-blue-700 space-y-1">
              <p>✅ Beautiful purple gradient login page</p>
              <p>✅ Student/Teacher login options</p>
              <p>✅ Interactive dashboard with cards</p>
              <p>✅ Campus events and notifications</p>
              <p>✅ Responsive design</p>
              <p>✅ Pure HTML/CSS/JS implementation</p>
            </div>
          </div>

          <div className="text-xs text-gray-500 mt-4">
            <p>Demo credentials: Any Student ID with password 6+ characters</p>
          </div>
        </div>
      </div>
    </div>
  )
}
