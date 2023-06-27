import React, { useState } from 'react'
import './LandingPage.css'
import Navbar from '../../components/Navbar/Navbar'
import LoginForm from '../../components/LoginForm/LoginForm'

function LandingPage() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="landing-page">
      <Navbar />
      <div className="contenedor head">
          <h1 className="titulo">Catan 2.0</h1>
          <p className="copy">¡Juega con tus amigos y se el mejor colonizador de tierras!</p>
          <LoginForm />
      </div>

    </div>
    </>
  )
}

export default LandingPage
