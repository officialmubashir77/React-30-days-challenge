import React from 'react'
import Navbar from '../../React-07-tailwind-essential-classes/src/components/Navbar'
import Footer from '../../React-07-tailwind-essential-classes/src/components/Footer'
import MainSection from './components/MainSection'

const App = () => {
  return (
    <div>
      <Navbar/>

      <MainSection/>

      <Footer/>
    </div>
  )
}

export default App