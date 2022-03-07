

import { Link } from "react-router-dom"

const User = ()=>{
   

    
    return <div>
        {[1,2,3,4,5].map((e,i)=><Link key={i} to={`/user/${e}`}>User {e}</Link>)}
    </div>
}
export default User;