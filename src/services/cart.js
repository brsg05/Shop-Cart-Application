//adicionar um item ao carrinho
//deletar item do carrinho
//remover um item do carrinho
//calcular o valor total do carrinho


async function addItemToCart(userCart, item){
    userCart.push(item);
}

async function deleteItemFromCart(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index != -1){
        userCart.splice(index, 1);
    }
}

async function removeOneItemFromCart(userCart, item){

    const indexFound = userCart.findIndex((itemCart) => itemCart.name === item.name);

    if(indexFound == -1){
        console.log("Item not found in cart");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity--;
    }
    else{
        userCart.splice(indexFound, 1);
        
    }
}

async function calculateTotal(userCart){
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log("\nCart Total is:");
    console.log( result + "R$");
}

async function displayCart(userCart){
    console.log("\nYour cart: ");
    userCart.forEach((item,index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price}R$ - ${item.quantity}`);
    })
}

export{
    addItemToCart,
    calculateTotal,
    deleteItemFromCart,
    removeOneItemFromCart,
    displayCart
}