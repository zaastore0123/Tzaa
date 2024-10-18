import { getCartProductFromLS } from "./getCartProducts"

export const updateCartProductTotal = () => {
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");
  
    let localCartProducts = getCartProductFromLS();
    let initialValue = 0;
    let totalProductPrice = localCartProducts.reduce((accum, currentProductElement) => {
      let productPrice = parseInt(currentProductElement.price) || 0;
      return accum + productPrice;
    }, initialValue);
    //   console.log(totalProductPrice);
  
    productSubTotal.textContent = `₹${totalProductPrice}`;
    productFinalTotal.textContent = `₹${totalProductPrice + 50}`;


    


};

