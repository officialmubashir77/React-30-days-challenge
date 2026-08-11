import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Users", href: "/users" },
    { label: "Profile", href: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 text-white backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="/"
          className="animate__animated animate__fadeInDown flex items-center gap-2"
          style={{
            animationDuration: "500ms",
          }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-bold shadow-lg shadow-blue-600/20 transition duration-300 hover:scale-105">
            A
          </div>

          <h1 className="text-xl font-bold tracking-tight">
            Auth<span className="text-blue-500">System</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="animate__animated animate__fadeInDown text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
              style={{
                animationDelay: `${120 + index * 90}ms`,
                animationDuration: "500ms",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/login"
            className="animate__animated animate__fadeInDown rounded-lg px-4 py-2 text-sm font-semibold text-slate-300 transition duration-300 hover:bg-white/5 hover:text-white"
            style={{
              animationDelay: "420ms",
              animationDuration: "500ms",
            }}
          >
            Login
          </a>

          <a
            href="/register"
            className="animate__animated animate__fadeInDown rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 active:scale-95"
            style={{
              animationDelay: "510ms",
              animationDuration: "500ms",
            }}
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="animate__animated animate__fadeInDown flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-700 bg-slate-900 transition duration-300 hover:bg-slate-800 active:scale-95 md:hidden"
          style={{
            animationDelay: "120ms",
            animationDuration: "500ms",
          }}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
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
        <div className="animate__animated animate__fadeInDown border-t border-slate-800 bg-slate-950 md:hidden"
          style={{ animationDuration: "300ms" }}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="animate__animated animate__fadeInLeft rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:bg-slate-900 hover:text-white"
                style={{
                  animationDelay: `${80 + index * 70}ms`,
                  animationDuration: "350ms",
                }}
              >
                {link.label}
              </a>
            ))}

            <div className="my-2 border-t border-slate-800" />

            <a
              href="/login"
              className="animate__animated animate__fadeInLeft rounded-lg border border-slate-700 px-4 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:bg-slate-900"
              style={{
                animationDelay: "290ms",
                animationDuration: "350ms",
              }}
            >
              Login
            </a>

            <a
              href="/register"
              className="animate__animated animate__fadeInLeft rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:bg-blue-500 active:scale-95"
              style={{
                animationDelay: "360ms",
                animationDuration: "350ms",
              }}
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