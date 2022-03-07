import {Link} from "react-router-dom";
const Navbar = ()=>{
    return <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">contact</Link>
        <Link to="/product">Products</Link>
        <Link to="/user">Users</Link>
        <Link to="/login">Login</Link>


    
    


    </div>
}
export default Navbar;