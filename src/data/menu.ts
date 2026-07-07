import { MenuCategory } from '../types';

export const categories: MenuCategory[] = [
  {
    id: 'tea-tones',
    name: 'Tea Tones',
    items: [
      { id: 'tt1', name: 'Normal Tea', priceR: 20, priceL: 39, isVeg: true },
      { id: 'tt2', name: 'Elaichi Tea', priceR: 25, priceL: 49, isVeg: true },
      { id: 'tt3', name: 'Ginger Tea', priceR: 25, priceL: 49, isVeg: true },
      { id: 'tt4', name: 'Masala Tea', priceR: 25, priceL: 49, isVeg: true },
      { id: 'tt5', name: 'Irani Tea', priceR: 49, priceL: 99, isVeg: true },
      { id: 'tt6', name: 'Black Tea', priceR: 20, priceL: 29, isVeg: true },
      { id: 'tt7', name: 'Green Tea', priceR: null, priceL: 29, isVeg: true },
      { id: 'tt8', name: 'Mint Tea', priceR: 30, priceL: 59, isVeg: true },
      { id: 'tt9', name: 'Jaggery Tea', priceR: 30, priceL: 59, isVeg: true },
      { id: 'tt10', name: 'Lemon Tea', priceR: 20, priceL: 39, isVeg: true },
      { id: 'tt11', name: 'Honey Lemon Tea', priceR: 25, priceL: 49, isVeg: true },
      { id: 'tt12', name: 'Tandoori Tea', priceR: 40, priceL: 79, isVeg: true },
      { id: 'tt13', name: 'Hibiscus Tea with Honey', priceR: 39, priceL: 79, isVeg: true },
      { id: 'tt14', name: 'Ice Tea', priceR: null, priceL: 49, isVeg: true },
      { id: 'tt15', name: 'Kashmiri Tea', priceR: null, priceL: 99, isVeg: true },
      { id: 'tt16', name: 'Chocolate Tea', priceR: 39, priceL: 79, isVeg: true }
    ]
  },
  {
    id: 'cravy-coffee',
    name: 'Cravy Coffee',
    items: [
      { id: 'cc1', name: 'Black Coffee', priceR: 20, priceL: 39, isVeg: true },
      { id: 'cc2', name: 'Special Filter Coffee', priceR: 25, priceL: 49, isVeg: true },
      { id: 'cc3', name: 'Ginger Coffee', priceR: 30, priceL: 59, isVeg: true },
      { id: 'cc4', name: 'Jaggery Coffee', priceR: 30, priceL: 59, isVeg: true },
      { id: 'cc5', name: 'Cold Coffee', priceR: null, priceL: 79, isVeg: true }
    ]
  },
  {
    id: 'milky-way',
    name: 'Milky Way',
    items: [
      { id: 'mw1', name: 'Plain Milk', priceR: 20, priceL: 39, isVeg: true },
      { id: 'mw2', name: 'Horlicks', priceR: 29, priceL: 59, isVeg: true },
      { id: 'mw3', name: 'Hot Badam Milk', priceR: 29, priceL: 59, isVeg: true },
      { id: 'mw4', name: 'Cold Boost', priceR: null, priceL: 89, isVeg: true },
      { id: 'mw5', name: 'Cold Bournvita', priceR: null, priceL: 89, isVeg: true },
      { id: 'mw6', name: 'Cold Badam Milk', priceR: null, priceL: 89, isVeg: true },
      { id: 'mw7', name: 'Hot Chocolate Milk', priceR: 59, priceL: 99, isVeg: true }
    ]
  },
  {
    id: 'cold-tik-tok',
    name: 'Cold Tik Tok',
    items: [
      { id: 'ct1', name: 'Butter Milk', price: 49, isVeg: true },
      { id: 'ct2', name: 'Mint Mojito', price: 99, isVeg: true },
      { id: 'ct3', name: 'Watermelon Mojito', price: 99, isVeg: true },
      { id: 'ct4', name: 'Mango Mojito', price: 99, isVeg: true },
      { id: 'ct5', name: 'Blue Lagoon Mojito', price: 99, isVeg: true },
      { id: 'ct6', name: 'Green Virgin Mojito', price: 99, isVeg: true },
      { id: 'ct7', name: 'Plain Lemon Soda', price: 55, isVeg: true },
      { id: 'ct8', name: 'Green Mint Lime Soda', price: 65, isVeg: true },
      { id: 'ct9', name: 'Blue Mint Lime Soda', price: 65, isVeg: true }
    ]
  },
  {
    id: 'ice-age',
    name: 'Ice Age',
    items: [
      { id: 'ia1', name: 'Madka Ice Cream', price: 69, isVeg: true },
      { id: 'ia2', name: 'Flavoured Ice Cream', price: 99, isVeg: true },
      { id: 'ia3', name: 'Mud Cups Special Ice Cream', price: 109, isVeg: true }
    ]
  },
  {
    id: 'milk-shakes',
    name: 'Milk Shakes',
    items: [
      { id: 'ms8', name: 'Tender Coconut Milkshake', price: 109, isVeg: true },
      { id: 'ms1', name: 'Mango Milkshake', price: 89, isVeg: true },
      { id: 'ms2', name: 'Vanilla Milkshake', price: 89, isVeg: true },
      { id: 'ms3', name: 'Butterscotch Milkshake', price: 89, isVeg: true },
      { id: 'ms4', name: 'Strawberry Milkshake', price: 89, isVeg: true },
      { id: 'ms5', name: 'Chocolate Milkshake', price: 99, isVeg: true },
      { id: 'ms6', name: 'Kit Kat Milkshake', price: 109, isVeg: true, isChefPick: true },
      { id: 'ms7', name: 'Oreo Milkshake', price: 109, isVeg: true, isChefPick: true }
    ]
  },
  {
    id: 'quick-bites',
    name: 'Quick Bites',
    items: [
      { id: 'qb1', name: 'Crispy Corn', price: 109, isVeg: true },
      { id: 'qb2', name: 'Potato Wedges', price: 119, isVeg: true },
      { id: 'qb3', name: 'Chilli Garlics Pops', price: 119, isVeg: true },
      { id: 'qb4', name: 'Veg Fingers', price: 129, isVeg: true }
    ]
  },
  {
    id: 'bun-blast',
    name: 'Bun Blast',
    items: [
      { id: 'bb1', name: 'Bun Butter Jam', price: 49, isVeg: true },
      { id: 'bb2', name: 'Bun Muska', price: 49, isVeg: true },
      { id: 'bb3', name: 'Madurai Butter Bun', price: 59, isVeg: true }
    ]
  },
  {
    id: 'sosi-sandwich',
    name: 'Sosi Sandwich',
    items: [
      { id: 'ss1', name: 'Bread Butter Jam', price: 59, isVeg: true },
      { id: 'ss2', name: 'Veg Sandwich', price: 79, isVeg: true },
      { id: 'ss3', name: 'Corn Peri Peri Sandwich', price: 99, isVeg: true },
      { id: 'ss4', name: 'Egg Sandwich', price: 89, isVeg: false },
      { id: 'ss5', name: 'Boiled Egg Sandwich', price: 89, isVeg: false },
      { id: 'ss6', name: 'Chilli Cheese Sandwich', price: 89, isVeg: true },
      { id: 'ss7', name: 'Corn Peri Peri Cheese Sandwich', price: 109, isVeg: true },
      { id: 'ss8', name: 'Veg Paneer Sandwich', price: 109, isVeg: true },
      { id: 'ss9', name: 'Chocolate Sandwich', price: 109, isVeg: true },
      { id: 'ss10', name: 'Peanut Nutella Sandwich', price: 109, isVeg: true },
      { id: 'ss11', name: 'Choco Peanut Nutella Sandwich', price: 109, isVeg: true }
    ]
  },
  {
    id: 'fries-fashion',
    name: 'Fries Fashion',
    items: [
      { id: 'ff1', name: 'Plain French Fries', price: 99, isVeg: true },
      { id: 'ff2', name: 'Peri Peri Fries', price: 109, isVeg: true, isSpicy: true },
      { id: 'ff3', name: 'Cheese Peri Peri Fries', price: 129, isVeg: true, isSpicy: true },
      { id: 'ff4', name: 'Mexican Fries', price: 119, isVeg: true, isSpicy: true },
      { id: 'ff5', name: 'Loaded Fries', price: 159, isVeg: true },
      { id: 'ff6', name: 'Fries Platter', price: 199, isVeg: true },
      { id: 'ff7', name: 'Popcorn Fries (Plain)', price: 89, isVeg: true },
      { id: 'ff8', name: 'Popcorn Fries (Peri)', price: 99, isVeg: true, isSpicy: true }
    ]
  },
  {
    id: 'busy-burger',
    name: 'Busy Burger',
    items: [
      { id: 'bg1', name: 'Veg Aloo Tikki Burger', price: 109, isVeg: true },
      { id: 'bg2', name: 'Egg Burger', price: 119, isVeg: false },
      { id: 'bg3', name: 'Mud Cups Special Burger', price: 169, isVeg: true, isChefPick: true },
      { id: 'bg4', name: 'Twin Burger (Veg)', price: 139, isVeg: true },
      { id: 'bg5', name: 'Tower Burger', price: 159, isVeg: true }
    ]
  },
  {
    id: 'nuggets',
    name: 'Nuggets',
    items: [
      { id: 'n1', name: 'Veg Nuggets', price: 109, isVeg: true },
      { id: 'n2', name: 'Cheese Nuggets', price: 119, isVeg: true },
      { id: 'n4', name: 'Corn Cheese Nuggets', price: 129, isVeg: true },
      { id: 'n5', name: 'Nuggets Lolli Pop', price: 129, isVeg: true }
    ]
  },
  {
    id: 'mazza-momos',
    name: 'Mazza Momos',
    items: [
      { id: 'mm3', name: 'Mushroom Momos', price: 119, isVeg: true },
      { id: 'mm1', name: 'Veg Momos (Fried)', price: 99, isVeg: true },
      { id: 'mm2', name: 'Paneer Momos (Fried)', price: 109, isVeg: true },
      { id: 'mm4', name: 'Corn & Cheese (Fried)', price: 119, isVeg: true }
    ]
  },
  {
    id: 'pizza-paradise',
    name: 'Pizza Paradise',
    items: [
      { id: 'pp1', name: 'Mexican Pizza', price: 159, isVeg: true },
      { id: 'pp2', name: 'Corn Cheese Pizza', price: 169, isVeg: true },
      { id: 'pp3', name: 'Italian Pizza', price: 179, isVeg: true },
      { id: 'pp4', name: 'Paneer Pizza', price: 189, isVeg: true },
      { id: 'pp5', name: 'Mud Cups Special Pizza', price: 199, isVeg: true, isChefPick: true }
    ]
  },
  {
    id: 'rolls',
    name: 'Rolls',
    items: [
      { id: 'r1', name: 'Veg Roll', price: 79, isVeg: true },
      { id: 'r2', name: 'Egg Roll', price: 89, isVeg: false },
      { id: 'r3', name: 'Veg-Cheese Roll', price: 89, isVeg: true },
      { id: 'r4', name: 'Paneer Roll', price: 109, isVeg: true },
      { id: 'r5', name: 'Egg-Cheese Roll', price: 99, isVeg: false },
      { id: 'r6', name: 'Paneer-Cheese Roll', price: 119, isVeg: true }
    ]
  },
  {
    id: 'egg-panda',
    name: 'Egg Panda',
    items: [
      { id: 'ep1', name: 'Special Boiled Eggs (2 No)', price: 59, isVeg: false },
      { id: 'ep2', name: 'Bread Omelette', price: 79, isVeg: false },
      { id: 'ep3', name: 'Bun Egg Fry', price: 89, isVeg: false },
      { id: 'ep4', name: 'Bread Mayo Omelette', price: 89, isVeg: false }
    ]
  },
  {
    id: 'mazza-maggie',
    name: 'Mazza Maggie',
    items: [
      { id: 'mg1', name: 'Veg Maggie', price: 59, isVeg: true },
      { id: 'mg2', name: 'Egg Maggie', price: 89, isVeg: false },
      { id: 'mg3', name: 'Corn Maggie', price: 79, isVeg: true },
      { id: 'mg4', name: 'Schezwan Paneer Maggie', price: 99, isVeg: true, isSpicy: true }
    ]
  },
  {
    id: 'pasta-porsh',
    name: 'Pasta Porsh',
    items: [
      { id: 'pt1', name: 'Indian Masala Pasta', price: 179, isVeg: true },
      { id: 'pt2', name: 'Creamy Pasta', price: 189, isVeg: true }
    ]
  },
];
