import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'


export default function App() {
  return(
    <>
    <div className="font-sans rounded-lg my-10 mx-auto w-2/5 h-2/5 bg-slate-800 bg-hero">
      <Navbar />  
      <Main />
    </div>
    
    </>
  )
}

