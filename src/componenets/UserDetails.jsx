import {  useParams } from "react-router-dom"
import {  useEffect,useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import {Navigate} from "react-router-dom";
const UserDetails = ()=>{
    const {id} = useParams();
 const [user,setUser] = useState({});
  const {token}= useContext(AuthContext);
useEffect(()=>{
    fetch(`https://reqres.in/api/users/${id}`).then(d=>d.json()).then(d=>{
    setUser(d.data);

    })
},[id])



    return<div>
        <img src={user.avatar} alt="" />
        {user.first_name}{user.last_name}
        contact:{user.email}
      
    </div>
}
export default UserDetails;