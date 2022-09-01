import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'



const Menu = () => {
  const topics = [{ title: "CSS Grid and Semantic Tags", route: "grid" },
  { title: "CSS-Preprocessor", route: "" },
  { title: "Higher Order Component", route: "hoc" },
  { title: "Forms", route: "form" },
  { title: "React-Redux", route: "state-management" },
  { title: "Core JS Concepts", route: "" }
  ]
  return (
    <div className='menu'>
      {topics.map((topic) => {
        return (
          <div key={topic.title} className='menu-items'><Link className='menu-route' to={`/${topic.route}`}><h4>{topic.title}</h4></Link></div>
        )
      })}
    </div>
  )
}

export default Menu