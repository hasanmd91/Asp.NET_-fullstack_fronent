import { product } from '../../types/product';

const productsData: product[] = [
  {
    id: 1,
    title: 'New Title 1',
    price: 200,
    description: 'A very powerful computer',
    images: ['https://i.imgur.com/PK1WFTJ.jpeg'],
    category: {
      id: 16,
      name: 'Electronics',
      image: 'https://i.imgur.com/F1XLwX4.jpeg',
    },
  },
  {
    id: 2,
    title: 'New Title 2',
    price: 500,
    description: 'A very powerful computer',
    images: ['https://i.imgur.com/4XE4KwK.jpeg'],
    category: {
      id: 16,
      name: 'Electronics',
      image: 'https://i.imgur.com/F1XLwX4.jpeg',
    },
  },
  {
    id: 3,
    title: 'New Title 3',
    price: 80,
    description: 'Cool hoodie for your good boy',
    images: ['https://i.imgur.com/p8AjjXS.jpeg'],
    category: {
      id: 17,
      name: 'Clothes',
      image: 'https://i.imgur.com/xYO6uDv.jpeg',
    },
  },
];

export default productsData;