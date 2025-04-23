import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/header/Header';
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
      <Router>
        <Header />
      </Router>
  );
}

export default App;