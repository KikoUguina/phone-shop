import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/header/Header';
import Card from './components/card/Card';
import ProductList from './pages/productList/ProductList'
//import ProductDetail from './pages/productDetail/ProductDetail'

function App() {
  return (
      <Router>
        <Header/>
        <ProductList/>
      </Router>
  );
}

export default App;