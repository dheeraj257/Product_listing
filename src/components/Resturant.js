import React, { useState } from 'react'
import Navbar from './Navbar'
import ItemCard from './ItemCard'
import Menu from '../assets/MenuApi'

const uniqueCategory = [
  ...new Set(
    Menu.map((curr) => {
      return curr.category;
    })
  ), 'All',]

export const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    console.log(category);
    if (category === 'All') {
      setMenuData(Menu);
      document.title = `${category}`;

      return;
    }

    const updatedItem = Menu.filter((curr) => {
      return curr.category === category;
    })
    setMenuData(updatedItem);
    document.title = `${category}`;
  }

  return (
    <>
      <Navbar uniqueCategory={uniqueCategory} filterItem={filterItem} />
      <ItemCard menuData={menuData} />
    </>
  )
}
