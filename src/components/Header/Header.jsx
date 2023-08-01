import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Header.css'
import {Anchor} from '../Anchor/Anchor'

export const Header = () => {
  return (
    <div className='Header'>
      <a href="">portafolio</a>
      <Navbar>
        <Anchor textAnchor = "Home"/>   
        <Anchor textAnchor = "About Us"/> 
        <Anchor textAnchor = "Contact US"/>  
        <Anchor textAnchor = "Services"/>  
      </Navbar>
    </div>
  )
}
