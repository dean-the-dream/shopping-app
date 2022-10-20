import './App.scss';
import Header from './components/Header/Header';
import CategoriesGroup from './components/CategoriesGroup/CategoriesGroup';
import ItemsGroup from './components/ItemsGroup/ItemsGroup';
import SideBar from './components/SideBar/SideBar';
import { useState, useEffect } from 'react';

function App() {
  //get products from api
  const [hookData, setHookData] = useState("");
  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(newData => setHookData(newData.products) )
  },[])

  //copy list of products
  const productList= [...hookData];

  //send list of categories to categories list
  let categoriesList = productList.map((x) =>x.category );
  categoriesList = [...new Set(categoriesList)]
 
  // create hook for categories
  const [selectCategory, setSelectCategory] = useState([...categoriesList])

  



  return (
    <>
      <Header/>
      {}
      <CategoriesGroup list={categoriesList} />
      <div className="main">
        <SideBar/>
        <ItemsGroup items={productList} categories=""/>
      </div>
    </>
  );
}

export default App;
