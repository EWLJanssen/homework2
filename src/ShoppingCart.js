class ShoppingCart {
    constructor(cart) {
        this.cart = cart
        this.items = []
    }
    getItems(item){
        this.items
    }
    addItem(itemName, quantity, price){
        this.items.push(itemName, quantity, price)
    }
    clearItem(item){
        this.items.remove(item)
    }
    total(pricePerUnit, quantity) {
        return this.price
            .reduce((a, b) => a * b, 0)
    }
}




const cart = new ShoppingCart()



module.exports = class ShoppingCart{}