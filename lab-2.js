// Определение объекта products
var products = {
    shoes: {
        boots: [],
        krosovki: [],
        sandals: []
    },
    addProduct: function (product) {
        switch (product.type) {
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
// Создание продуктов
var product1 = {
    id: 1,
    category: 'shoes',
    type: 'boots',
    size: 40,
    color: 'black',
    price: 320,
    sale: 100,
    get realprice() {
        return this.price * (1 - (this.sale / 100));
    }
};
var product2 = {
    id: 2,
    category: 'shoes',
    type: 'krosovki',
    size: 39,
    color: 'white',
    price: 180,
    sale: 30,
    get realprice() {
        return this.price * (1 - (this.sale / 100));
    }
};
var product3 = {
    id: 3,
    category: 'shoes',
    type: 'sandals',
    size: 40,
    color: 'black',
    price: 250,
    sale: 10,
    get realprice() {
        return this.price * (1 - (this.sale / 100));
    }
};
// Добавление продуктов в коллекцию
products.addProduct(product1);
products.addProduct(product2);
products.addProduct(product3);
console.log(products.shoes);
// Определение функции filterShoes
function filterShoes(products, minPrice, maxPrice, size, color) {
    var filteredShoes = [];
    for (var category in products.shoes) {
        if (category === "boots" || category === "krosovki" || category === "sandals") {
            for (var _i = 0, _a = products.shoes[category]; _i < _a.length; _i++) {
                var shoe = _a[_i];
                if (shoe.price >= minPrice &&
                    shoe.price <= maxPrice &&
                    shoe.size === size &&
                    shoe.color === color) {
                    filteredShoes.push(shoe.id);
                }
            }
        }
    }
    return filteredShoes;
}

