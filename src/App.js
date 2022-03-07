
import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from './componenets/Home';
import About from './componenets/About';
import Navbar from './componenets/Navbar';
import Contact from './componenets/contact';
import Products from './componenets/Products';
import User from './componenets/User';
import UserDetails from './componenets/UserDetails';
import PrivateRoute from './componenets/PrivateRoute';

import Login from './componenets/Login';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route  path="/" element={<Home/>}></Route>
  
      <Route  path="/about" element={<About/>}></Route>
      <Route  path="/contact" element={<Contact/>}></Route>
      <Route  path="/product" element={<Products/>}></Route>
      <Route  path="/user" element={<User/>}></Route>
      <Route 
       path="/user/:id" 
       element={<PrivateRoute><UserDetails/></PrivateRoute>}>
       </Route>
      <Route path="/login" element={<Login/>}></Route>





      </Routes>
    </div>
  );
}

export default App;