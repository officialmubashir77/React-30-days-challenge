import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20 text-white">
        <h1 className="text-5xl font-bold">
          User Authentication System
        </h1>

        <p className="mt-4 text-slate-400">
          Register, login and manage your account.
        </p>
      </main>

      <Footer />

    </div>
  )
}

export default App