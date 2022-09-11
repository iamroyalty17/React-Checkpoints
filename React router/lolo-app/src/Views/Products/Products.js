import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    const [timer, setTimer] = useState(5)
    let t = timer
    useEffect(() => {
        setInterval(() => {
        t-=1
    }, 1000);
    }, [timer])


    /*
After the 5 second the function navigate will change the url into `/`
and the home page will be rendered
*/
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 5000);
    }, [])

    

    return (
        <div>
            <h1>Products</h1>
            <p>
                Count down: <span>{t}</span>
            </p>
        </div>
    )
}
export default Products;