// Определение псевдонимов типов для объектов
type ProductType = 'boots' | 'krosovki' | 'sandals';

interface Product {
    id: number;
    category: string;
    type: ProductType;
    size: number;
    color: string;
    price: number;
    sale: number;
    realprice: number;
}

interface ShoesCollection {
    [key: string]: Product[];
}


interface Products {
    shoes: ShoesCollection;
    addProduct: (product: Product) => void;
}

// Определение объекта products
const products: Products = {
    shoes: {
        boots: [],
        krosovki: [],
        sandals: []
    },
  
    addProduct(product: Product) {
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

// Создание продуктов
const product1: Product = {
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

const product2: Product = {
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

const product3: Product = {
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
function filterShoes(
    products: any, 
    minPrice: number,
    maxPrice: number,
    size: number,
    color: string
  ) {
    const filteredShoes: number[] = [];
    for (const category in products.shoes) {
      if (category === "boots" || category === "krosovki" || category === "sandals") {
        for (const shoe of products.shoes[category]) {
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
    return filteredShoes;
  }
  
const filteredShoes = filterShoes(products, 200, 400, 40, "black");
console.log("filter:", filteredShoes); 