import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "./assets/Header.jsx"
import {Footer} from "./assets/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page">
        <Header />
        <Bio />
        <Footer />
      </div>
    </>
  );
}

export default App
function Bio(){
  return (
         <section id="about" className="bio-container">
          <h1>Hi, I'm Joshua Chimezie</h1>
          <p className="tagline">Frontend Developer in traing. Port Harcourt</p>
          <p>
            I started with HTML and CSS, learned JavaScript and now am learning React to build faster, cleaner interface.
          </p>
          <ul id="skills" className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React (learning)</li>
          </ul>
        </section>
  )
}
