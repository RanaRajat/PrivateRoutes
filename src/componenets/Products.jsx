import { useParams } from "react-router-dom";

const Products = ()=>{
    const {id} = useParams();
    console.log(id)
    return<h1>
        Products{id}
    </h1>
}
export default Products;