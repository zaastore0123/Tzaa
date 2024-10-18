import products from "./api/product.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
    return cartProducts.some((currentProductElement) => currentProductElement.id === curProd.id);

});

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const { category, id, image, name, stock, price } = curProd;


        const lSActualData = fetchQuantityFromCartLS(id, price);

        let productClone = document.importNode(templateContainer.content, true);

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;


        productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;
        productClone.querySelector(".productPrice").textContent = lSActualData.price;

        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            incrementDecrement(event, id, stock, price);
        });



        productClone
            .querySelector(".remove-to-cart-button")
            .addEventListener("click", () => removeProdFromCart(id));





        cartElement.appendChild(productClone);
    })
}

showCartProduct();

updateCartProductTotal();