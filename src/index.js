import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";


const myCart = [];
const myWishList = [];

const item1 = await createItem('Hotwheels ferrari', 20.99 , 1);
const item2 = await createItem('Hotwheels lamborghini', 80, 3);

console.log("Welcome to your cart!");

await cartService.addItemToCart(myCart, item1);
await cartService.addItemToCart(myCart, item2);

cartService.displayCart(myCart);

await cartService.removeOneItemFromCart(myCart, item2);
await cartService.removeOneItemFromCart(myCart, item2);
//await cartService.deleteItemFromCart(myCart, item1.name)
//await cartService.deleteItemFromCart(myCart, item2.name)

cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);