import Menu from './Components/Menu/Menu';
import { Routes, Route } from 'react-router-dom'
import Hoc from './Components/HOC/HOC';
import UserList from './Components/HOC/UserList';
import ProductList from './Components/HOC/ProductList';
import Grid from './Components/Grid/Grid';
import Form from './Components/Form/SignUp/Form';
import BankState from './Components/StateManagement/BankState';
import { IMenu } from './Models/Menu';
import CoreJS from './Components/CoreJS/CoreJS';
import Closures from './Components/CoreJS/Closures/Closures';
import DomManipulation from './Components/CoreJS/DomManipulation/DomManipulation';

const RouteFile = () => {


  const MainMenu: IMenu[] = [{ title: "CSS Grid and Semantic Tags", route: "grid" },
  { title: "CSS-Preprocessor", route: "" },
  { title: "Higher Order Component", route: "hoc" },
  { title: "Forms", route: "form" },
  { title: "React-Redux", route: "state-management" },
  { title: "Core JS Concepts", route: "core-js" }
  ]


  return (
    <Routes>
      <Route path='/' element={<Menu menus={MainMenu} />} />
      <Route path='grid' element={<Grid />} />
      <Route path='form' element={<Form />} />
      <Route path='hoc' element={<Hoc />}>
        <Route index element={<UserList />} />
        <Route path='userlist' element={<UserList />} />
        <Route path='productlist' element={<ProductList />} />
      </Route>
      <Route path='state-management' element={<BankState />} />
      <Route path='core-js' element={<CoreJS />}/>
      <Route path='core-js/closure' element={<Closures />} />
      <Route path='core-js/dom-manipulation' element={<DomManipulation />} />

    </Routes>
  )
}

export default RouteFile