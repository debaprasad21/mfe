import { mount } from "products/ProductsIndex";
import { mountCart } from "cart/CartShow";

mount(document.querySelector("#my-products"));
mountCart(document.querySelector("#my-cart"));

console.log("Container Bootstrap");
