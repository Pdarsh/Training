import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'



const Menu = () => {
  return (

    <div className='menu'>
        <div className="menu-items"><Link to='/grid'><h4>CSS Grid and Semantic Tags</h4></Link></div>
        <div className="menu-items"><Link to='/'><h4>CSS-Preprocessor</h4></Link></div>
        <div className="menu-items"><Link to='/hoc'><h4>Higher Order Component</h4></Link></div>
        <div className="menu-items"><Link to='/form'><h4>Forms</h4></Link></div>
        <div className="menu-items"><Link to='/state-management'><h4>React-Redux</h4></Link></div>
        <div className="menu-items"><Link to='/'><h4>Core JS Concepts</h4></Link></div>
    </div>

  )
}

export default Menu