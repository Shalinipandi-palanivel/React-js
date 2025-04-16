/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SeeProductDetails = () => {

    const[detail, setDetail] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.productID}`) //productID is used in the root element in index.js as a dynamic parameter
        .then(res => res.json())
        .then((data) => setDetail(data));
    },[]);

    return (

        <div className="product-wrapper">
            <div className="left-col">
                {/* eslint-disable-next-line jsx-a11y/alt-text*/ }
                <img src = {detail.image}/>
            </div>
            <div className="right-col">
                <h2>{detail.title}</h2>
                <h5>Category:{detail.category}</h5>
                <p>{detail.description}</p>
                <p>price:{detail.price}</p>
                <button>See Product</button>
                
            </div>
        </div>
    )
}

export default SeeProductDetails;