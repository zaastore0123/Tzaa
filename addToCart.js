import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS()

export const addToCart = (event, id, stock) => {


    let arreyLocalStorageProduct = getCartProductFromLS();





    const currentProductElement = document.querySelector(`#card${id}`);
    // console.log(currentProductElement);
    let quantity = currentProductElement.querySelector(".productQuantity").innerText;
    let price = currentProductElement.querySelector(".productPrice").innerText;

    price = price.replace("₹", "");

    let existingProd = arreyLocalStorageProduct.find((curProd) => curProd.id === id);

    if (existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updatedCart = { id, quantity, stock };
         updatedCart =arreyLocalStorageProduct.map((curProd) => {
            return (curProd.id === id) ? updatedCart : curProd;
        }
        );
        localStorage.setItem('cartProdutsLS', JSON.stringify(arreyLocalStorageProduct));
        showToast("add", id);
    }

    if (existingProd) {
        // alert('bc duplicate ha');
        return false;
    }
    price = Number(price * quantity);
    quantity = Number(quantity)



    // let updateCart = {id,quantity,price};
    arreyLocalStorageProduct.push({ id, quantity, price });
    localStorage.setItem('cartProdutsLS', JSON.stringify(arreyLocalStorageProduct));


    updateCartValue(arreyLocalStorageProduct);

    showToast("delete", id);




};