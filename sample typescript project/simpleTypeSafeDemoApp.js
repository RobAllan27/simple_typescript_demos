"use strict";
function getProduct(id) {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    };
}
const product = getProduct(1);
console.log(`Calling direct to the Product - The product ${product.name} costs $${product.price}`);
const showProduct = (name, price) => {
    console.log(`Calling via a Function - The product ${name} costs $${price}.`);
};
showProduct(product.name, product.price);
const showCompleteProduct = (id, name, price) => {
    console.log(`The product ${name} costs $${price} and has an id ${id}.`);
};
showCompleteProduct(product.id, product.name, product.price);
