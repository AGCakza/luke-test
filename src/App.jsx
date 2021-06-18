import React from 'react'
import 'materialize-css'
import { NavBar, Intro, Features, Panel, ContactUs, Footer } from './Components'

const App = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <Features />
      <Panel />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App;
