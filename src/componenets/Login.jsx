import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ()=>{
    const Navigate = useNavigate();
    const [form,setForm] = useState({});
    const handle = (e)=>{
        const {name,value} = e.target;
        setForm({

            ...form,
            [name]:value}
        )
     console.log(Navigate);
    
    }
    const Submit = ()=>{
        console.log(form);
    }
   

    return <div>
      
      <input onChange={handle} type="text" placeholder="email" name="email" />
      <input onChange={handle} type="text" placeholder="password" name="password"/>
      <button onClick={()=>Navigate("/")}>Click</button>


    </div>
}
export default Login;