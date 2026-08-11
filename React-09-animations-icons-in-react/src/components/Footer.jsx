import React from "react";

const Footer = () => {
  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Users", href: "/users" },
    { label: "Profile", href: "/profile" },
  ];

  const accountLinks = [
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
  ];

  return (
    <footer className="overflow-hidden border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">

          {/* Brand */}
          <div
            className="animate__animated animate__fadeInUp"
            style={{
              animationDuration: "500ms",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 font-bold shadow-lg shadow-blue-600/20 transition duration-300 hover:scale-105">
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
          <div
            className="animate__animated animate__fadeInUp"
            style={{
              animationDelay: "120ms",
              animationDuration: "500ms",
            }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-slate-400 transition duration-300 hover:translate-x-1 hover:text-blue-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Account */}
          <div
            className="animate__animated animate__fadeInUp"
            style={{
              animationDelay: "240ms",
              animationDuration: "500ms",
            }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Account
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {accountLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-slate-400 transition duration-300 hover:translate-x-1 hover:text-blue-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-800" />

        {/* Bottom */}
        <div
          className="animate__animated animate__fadeInUp flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"
          style={{
            animationDelay: "340ms",
            animationDuration: "500ms",
          }}
        >
          <p>© 2026 AuthSystem. All rights reserved.</p>

          <p className="transition duration-300 hover:text-blue-400">
            Built with React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;