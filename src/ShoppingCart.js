class ShoppingCart {
    constructor() {
        this.items = [];
    }
    getItems() {
        return this.items;
    }
    addItem(itemName, quantity, price) {
        const addsThisItem = {
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        }
        this.items.push(addsThisItem);
    }
    clear() {
        this.items = [];
    }
    total() {
        const allPrices = this.items.map(item => item.pricePerUnit * item.quantity);
        const totalPrice = allPrices.reduce((a,b) => a + b, 0)
        return totalPrice;
    }
}

const cart = new ShoppingCart();

module.exports = ShoppingCart;
