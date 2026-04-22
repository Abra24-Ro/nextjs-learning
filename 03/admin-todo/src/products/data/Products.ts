export interface Product {
  id       : string;
  name     : string;
  price    : number;
  rating   : number;
  image    : string;
  category : string;
  stock    : number;
  discount?: number;
}

export const products: Product[] = [
  {
    id      : "UUID-ABC-1",
    name    : "Teslo Hoodie",
    price   : 15,
    rating  : 5,
    image   : "/images/products/1623735-00-A_0_2000.jpg",
    category: "Hoodies",
    stock   : 12,
  },
  {
    id      : "UUID-ABC-2",
    name    : "Teslo Cap",
    price   : 25,
    rating  : 3,
    image   : "/images/products/1657916-00-A_1.jpg",
    category: "Accesorios",
    stock   : 8,
  },
  {
    id      : "UUID-ABC-3",
    name    : "Let the Sunshine Tee",
    price   : 36,
    rating  : 2,
    image   : "/images/products/1700280-00-A_1.jpg",
    category: "Remeras",
    stock   : 20,
    discount: 10,
  },
  {
    id      : "UUID-ABC-4",
    name    : "Cybertruck Hoodie",
    price   : 45,
    rating  : 5,
    image   : "/images/products/1742702-00-A_0_2000.jpg",
    category: "Hoodies",
    stock   : 5,
  },
  {
    id      : "UUID-ABC-5",
    name    : "Teslo Jacket",
    price   : 89,
    rating  : 4,
    image   : "/images/products/1623735-00-A_0_2000.jpg",
    category: "Camperas",
    stock   : 7,
    discount: 15,
  },
  {
    id      : "UUID-ABC-6",
    name    : "Model S Tee",
    price   : 30,
    rating  : 4,
    image   : "/images/products/1657916-00-A_1.jpg",
    category: "Remeras",
    stock   : 15,
  },
  {
    id      : "UUID-ABC-7",
    name    : "Plaid Mode Hoodie",
    price   : 55,
    rating  : 5,
    image   : "/images/products/1700280-00-A_1.jpg",
    category: "Hoodies",
    stock   : 3,
    discount: 20,
  },
  {
    id      : "UUID-ABC-8",
    name    : "Teslo Beanie",
    price   : 18,
    rating  : 3,
    image   : "/images/products/1742702-00-A_0_2000.jpg",
    category: "Accesorios",
    stock   : 0,
  },
];