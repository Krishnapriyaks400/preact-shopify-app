import React from 'react'
import { BrowserRouter } from 'react-router'
import NavLinks from "./component/NavLinks.jsx";
import Router from "./routes";


export  function App() {
  return (
    <BrowserRouter>
      <NavLinks />
      <Router />
    </BrowserRouter>
    
  )
}
