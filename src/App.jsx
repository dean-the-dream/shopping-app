import './App.scss';
import Header from './components/Header/Header';
import CategoriesGroup from './components/CategoriesGroup/CategoriesGroup';
import ItemsGroup from './components/ItemsGroup/ItemsGroup';
import data from './assets/data';

function App() {
  //copy list of products
  const productList= data;

  //send list of categories to categories list
  const categoriesList = productList.map((x) =>x.category )
 
// unpack product list



  return (
    <>
      <Header/>
      <CategoriesGroup list={categoriesList}/>
      <ItemsGroup items={productList}/>
    </>
  );
}

export default App;
