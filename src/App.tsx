import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import { Routes, Route } from 'react-router-dom'
import Hoc from './Components/HOC/HOC';
import UserList from './Components/HOC/UserList';
import ProductList from './Components/HOC/ProductList';
import Grid from './Components/Grid/Grid';
import Form from './Components/Form/SignUp/Form';
import BankState from './Components/StateManagement/BankState';




function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='grid' element={<Grid />} />
          <Route path='form' element={<Form />} />
          <Route path='hoc' element={<Hoc />}>
            <Route index element={<UserList />} />
            <Route path='userlist' element={<UserList />} />
            <Route path='productlist' element={<ProductList />} />
          </Route>
          <Route path='state-management' element={<BankState/>}/>
        </Routes>

      </div>
    </>
  );
}

export default App;
