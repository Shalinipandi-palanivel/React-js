import { createContext, useState } from "react";

//usercontext - to persist the value of the cart without returning to the initial value for every changes

export const UserActivityContext = createContext(); 
export const UserActivityProvider = ({children}) => {
    const[selectedProduct, setSelectedProduct] = useState({});

    const updateCart = (productId) => {
        setSelectedProduct((oldState) => {
            const newState = {...oldState};
            newState[productId] = true;
            return newState;

        })
    }
    const value = {
        selectedProduct,
        updateCart
    }
    return (

        <UserActivityContext.Provider value = {value}>
            {children}
        </UserActivityContext.Provider>
    )

}