import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 text-white backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-bold shadow-lg shadow-blue-600/20">
            A
          </div>

          <h1 className="text-xl font-bold tracking-tight">
            Auth<span className="text-blue-500">System</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Home
          </a>

          <a
            href="/users"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Users
          </a>

          <a
            href="/profile"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Profile
          </a>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            Login
          </a>

          <a
            href="/register"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:bg-blue-500"
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 transition hover:bg-slate-800 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            // Menu Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5">
            <a
              href="/"
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              Home
            </a>

            <a
              href="/users"
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              Users
            </a>

            <a
              href="/profile"
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              Profile
            </a>

            <div className="my-2 border-t border-slate-800" />

            <a
              href="/login"
              className="rounded-lg border border-slate-700 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-900"
            >
              Login
            </a>

            <a
              href="/register"
              className="rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Create Account
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
