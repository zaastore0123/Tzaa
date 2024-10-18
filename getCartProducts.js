import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS = () =>{
    let cartProducts = localStorage.getItem("cartProdutsLS");
    if(!cartProducts){
        return [];
    }
    cartProducts = JSON.parse(cartProducts);

    updateCartValue(cartProducts);
    return cartProducts;
};