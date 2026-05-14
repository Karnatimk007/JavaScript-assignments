import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand/About Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4 tracking-wider text-blue-400">BlogAPP</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover stories, thinking, and expertise from writers on any topic. 
              Join our community and share your own perspectives with the world.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Home</a></li>
              <li><a href="/login" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Sign In</a></li>
              <li><a href="/register" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Create Account</a></li>
            </ul>
          </div>

        </div>
        
        {/* Divider & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BlogAPP. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
