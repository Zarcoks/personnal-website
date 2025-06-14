import { useState } from 'react'
import website_data from '../data/website_data.json'
import Navbar from './components/Navbar'


function App() {
  return (
    <main className="flex min-h-screen min-w-screen justify-evenly bg-neutral-800">
      <Navbar website_data={website_data} />
      <div>
        
      </div>
    </main>
  )
}

export default App
