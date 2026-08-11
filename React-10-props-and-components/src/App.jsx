import React from 'react'
import { Home , Pencil , ScanBox , Contact , User , UserKey} from 'lucide-react'
import Button from "./components/shared/Button"

import "animate.css"

const App = () => {

  const buttonsData = [
    {
      id: 1,
      label: "Home",
      icon: Home,
      color: "blue",
    },
    {
      id: 2,
      label: "Tutorials",
      icon: Pencil,
      color: "rose",
    },
    {
      id: 3,
      label: "Placements",
      icon: ScanBox,
      color: "amber",
    },
    {
      id: 4,
      label: "Contact Us",
      icon: Contact,
      color: "green",
    },
    {
      id: 5,
      label: "Signup",
      icon: User,
      color: "blue",
    },
    {
      id: 6,
      label: "Login",
      icon: UserKey,
      color: "gray",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow-lg">

        <h1 className="text-3xl font-bold text-black">
          Welcome Back!
        </h1>

        <p className="mt-3 text-black/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nulla soluta provident maiores delectus iure quisquam quis
          vitae ipsum illum nihil nam commodi quas.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">

          {buttonsData.map((button) => (
            <Button
              key={button.id}
              {...button}
            />
          ))}

        </div>

      </div>

    </div>
  )
}

export default App