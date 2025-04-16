import { useContext, useEffect, useMemo, useState } from "react";
import { UserActivityContext } from "./UserActivityContext";

function Cart() {
    const [products, setProducts] = useState([]);
    const { selectedProduct } = useContext(UserActivityContext);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
        },[]);

    const totalCartValue = useMemo(() => {
        return Object.keys(selectedProduct).reduce((acc, itemId) => {
            const productDetail = products.find(product =>  {
                // eslint-disable-next-line eqeqeq
                return product.id == itemId;
            });
            if (productDetail) {
                acc += productDetail.price;
            }
            return acc;
        }, 0);   
    }, [selectedProduct, products]);

    return (
        <>
            <div> Products in the cart</div>
            <div>Total cart value: {totalCartValue}</div>
        </>
    )
}

export default Cart;