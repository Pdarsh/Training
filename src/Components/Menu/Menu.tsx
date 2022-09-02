import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
import {  MenuProps } from '../../Models/Menu'



const Menu:React.FC<MenuProps> = ({menus}) => {



  return (
    <div className='menu'>
      {menus.map((topic) => {
        return (
          <div key={topic.title} className='menu-items'><Link className='menu-route' to={`${topic.route}`}><h4>{topic.title}</h4></Link></div>
        )
      })}
    </div>
  )
}

export default Menu