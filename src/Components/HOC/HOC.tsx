import { Link, Outlet } from 'react-router-dom';
import './HOC.css'


const Hoc = () => {
  return (
    <div> <h1>HOC</h1>
    <div className='list-group'>
        <div><Link className='hoc-route' to='userlist'>UserList</Link></div>
        <div><Link className='hoc-route' to='productlist'>ProductList</Link></div>
    </div>
    <Outlet/>
    </div>
  )
}

export default Hoc