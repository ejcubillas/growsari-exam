import { createSlice } from '@reduxjs/toolkit';
import data from '../../data/products.json';
import {
  LaundryIcon, 
  MilkIcon, 
  AlcoholIcon, 
  CigaretteIcon,
  CoffeeIcon,
  MoreIcon,
} from "../../Icons";

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: data,
    categories: [
      'Canned Seafood',
      'Water',
      'Seasonings and Mixes',
      'Milk',
      'Packed Meat',
      'Laundry Products',
      'Cleaning Products',
      'RTD',
      'Bread and Biscuits',
      'Chips',
      'Candies and Chocolates',
      'Oral Care',
      'Coffee',
      'Softdrinks',
      'Hair Care',
      'Condiments and Spices',
      'Packed Fruits',
      'Oil and Sauces',
      'Spreads and Dressings',
      'Alcohol',
      'Cigarettes',
      'Sports Drinks',
      'Bath and Body Care',
      'Diapers',
      'Nuts',
      'Rice and Noodles',
      'Feminine Care',
      'Cookies',
      'Party Needs',
      'Powdered Drink'
    ]
  },
  reducers: {
    
    
  },
})

export const {
  search,
} = productSlice.actions;

export default productSlice.reducer;

