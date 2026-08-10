import React from "react"

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* Navbar */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          
          <h2 className="text-xl font-bold tracking-tight">
            React<span className="text-blue-500">App</span>
          </h2>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#" className="transition hover:text-white">
              Home
            </a>

            <a href="#" className="transition hover:text-white">
              About
            </a>

            <a href="#" className="transition hover:text-white">
              Features
            </a>

            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-500">
            Get Started
          </button>

        </div>
      </header>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        
        {/* Background effects */}
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"></div>

        <div className="absolute -right-20 top-80 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl"></div>

        <section className="relative mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl items-center px-6 py-20">
          
          <div className="mx-auto max-w-4xl text-center">
            
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              🚀 Built with React + Tailwind CSS
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Build beautiful
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                React Applications
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              A clean and modern React interface designed completely with
              Tailwind CSS. Fast, responsive and easy to customize for your
              next project.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              
              <button className="w-full rounded-xl bg-blue-600 px-7 py-3.5 font-semibold shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 sm:w-auto">
                Start Building
              </button>

              <button className="w-full rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-slate-200 transition duration-300 hover:bg-white/10 sm:w-auto">
                Learn More
              </button>

            </div>

            {/* Feature Cards */}
            <div className="mt-16 grid gap-5 text-left sm:grid-cols-3">
              
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                  ⚡
                </div>

                <h3 className="text-lg font-semibold">
                  Fast
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Lightweight and optimized interface built for speed.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-xl">
                  📱
                </div>

                <h3 className="text-lg font-semibold">
                  Responsive
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Looks great on mobile, tablet and desktop screens.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-500/40">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-xl">
                  🎨
                </div>

                <h3 className="text-lg font-semibold">
                  Customizable
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Easily change spacing, colors and layouts using Tailwind.
                </p>
              </div>

            </div>

          </div>
        </section>
      </main>

    </div>
  )
}

export default App