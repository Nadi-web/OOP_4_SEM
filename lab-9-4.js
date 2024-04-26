// Задание 1

function Product(id, category, type, size, color, price, sale) {
    this.id = id;
    this.category = category;
    this.type = type;
    this.size = size;
    this.color = color;
    this.sale = sale;
    this.price = price;

    Object.defineProperty(this, 'realprice',{
        get: function () {
            return this.price * (1 - (this.sale / 100));
        }
    });
}


let products = {
    shoes: {
      boots: [],
      krosovki: [],
      sandals: []
    },
  
    addProduct: function(product) {
      switch(product.type) {
        case 'boots':
          this.shoes.boots.push(product);
          break;
        case 'krosovki':
          this.shoes.krosovki.push(product);
          break;
        case 'sandals':
          this.shoes.sandals.push(product);
          break;
      }
    }
};
  
let product1 = new Product(1, 'shoes', 'boots', 40, 'black', 320, 100);
let product2 = new Product(2, 'shoes', 'krosovki', 39, 'white', 180, 30);
let product3 = new Product(3, 'shoes', 'sandals', 40, 'black', 250, 10);
  
products.addProduct(product1);
products.addProduct(product2);
products.addProduct(product3);
  
console.log(products.shoes);
  

// Задание 2

function filterShoes(products, minPrice, maxPrice, size, color) {
    const filteredShoes = [];
    for (const category in products) {
      if (category === "shoes") {
        for (const type in products[category]) {
          for (const shoe of products[category][type]) {
            if (
              shoe.price >= minPrice &&
              shoe.price <= maxPrice &&
              shoe.size === size &&
              shoe.color === color
            ) {
              filteredShoes.push(shoe.id);
            }
          }
        }
      }
    }
    return filteredShoes;
}
  

const filteredShoes = filterShoes(products, 200, 400, 40, "black");
console.log(filteredShoes); 

// Задание 4

Object.defineProperty(products, "price", {
    writable: true, // можно изменять
    enumerable: true, // можно перечислять
    configurable: false, // нельзя удалять
});

Object.defineProperty(products, "id", {
    writable: false, 
    enumerable: true, 
    configurable: false, 
});
  