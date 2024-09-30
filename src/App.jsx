import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Home from './views/Home'
import Taller1 from './views/Taller1'
import Taller2 from './views/Taller2'
import Taller3 from './views/Taller3'

function App() {
  const [selected, setSelected] = useState({
    name: 'home',
  })

  return (
    <>
      <div className="w-100">
        <Hero button={selected} setButton={setSelected} />
        {selected.name === "home" &&
          <Home />
        }
        {selected.name === "taller1" &&
          <Taller1 />
        }
        {selected.name === "taller2" &&
          <Taller2 />
        }
        {selected.name === "taller3" &&
          <Taller3 />
        }
        <footer className='w-100 h-24 pt-3'>
          <div className='flex justify-center'>
            <img src="/footer-logo.png" alt="logo facultad" />
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
