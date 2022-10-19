import './App.scss';
import Header from './components/Header/Header';
import CategoriesGroup from './components/CategoriesGroup/CategoriesGroup';
import data from './assets/data';

function App() {
  const productList= data;
  // console.log(productList)
  const categoriesList = productList.map((x) =>x.category )
 
// console.log(categoriesList)

  return (
    <>
      <Header/>
      <CategoriesGroup list={categoriesList}/>
    </>
  );
}

export default App;
