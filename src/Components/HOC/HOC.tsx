import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Hoc = () => {
  return (
    <div> <h1>HOC</h1>
    <div style={{display: "flex",
                justifyContent:"space-around"}}>
        <div><Link to='userlist'>UserList</Link></div>
        <div><Link to='productlist'>ProductList</Link></div>
    </div>
    <Outlet/>
    </div>
  )
}

export default Hoc