import React from "react"

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 font-bold shadow-lg shadow-blue-600/20">
                A
              </div>

              <h2 className="text-xl font-bold">
                Auth<span className="text-blue-500">System</span>
              </h2>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              A simple user authentication system built with React,
              Tailwind CSS, Node.js, Express and MongoDB.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="/"
                className="w-fit text-sm text-slate-400 transition hover:text-blue-400"
              >
                Home
              </a>

              <a
                href="/users"
                className="w-fit text-sm text-slate-400 transition hover:text-blue-400"
              >
                Users
              </a>

              <a
                href="/profile"
                className="w-fit text-sm text-slate-400 transition hover:text-blue-400"
              >
                Profile
              </a>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Account
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="/login"
                className="w-fit text-sm text-slate-400 transition hover:text-blue-400"
              >
                Login
              </a>

              <a
                href="/register"
                className="w-fit text-sm text-slate-400 transition hover:text-blue-400"
              >
                Register
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-800" />

        {/* Bottom */}
        <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 AuthSystem. All rights reserved.
          </p>

          <p>
            Built with React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer