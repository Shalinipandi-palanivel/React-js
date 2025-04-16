import {useState, useEffect } from "react";
import Product from "./product";
import ProductFilter from "./productFilter";

const ProductList = () => {

    const[products, setProducts] = useState([]);
    const[selectedProduct, setSelectedProduct] = useState({});

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then((data) => setProducts(data));
    },[]);

    const filterProducts = (category) => { 
            fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then((data) => setProducts(data));
        };

        const updateCart = (productId) => {
            setSelectedProduct((oldState) => {
                const newState = {...oldState};
                newState[productId] = true;
                return newState;
            })
        }

    return (
        <div>
            {JSON.stringify(selectedProduct)}
            <h2>Product List</h2>
            <ProductFilter filterProducts = {filterProducts}/>
            <div> {                
                products.map((item) => (                
                     <Product 
                     key = {item.id}
                     detail= {item}
                     updateCart = {updateCart}
                     isProductInCart = {selectedProduct[item.id]}/>
                ))
            }
            </div>
        </div>
    )

}

export default ProductList;