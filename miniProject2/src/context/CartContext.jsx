import { useState,useContext, createContext } from "react";

const CartContext = createContext();

export const CartProvider = (props) => {


    const [cart, setCart] = useState([]);

    const handleCartUpdate = (newProduct) => {

        const productIndex = cart.findIndex((product) => product.id == newProduct.id)
        console.log(productIndex);

        if (productIndex !== -1) {
            setCart([...cart]);
        }
        else {
            setCart((prevCart) => [...prevCart, newProduct])
        }
    }

    return (
        <CartContext.Provider value={{ cart, handleCartUpdate}}>
            {props.children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContext);
}