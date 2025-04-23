import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/header/Header';
import ProductList from './pages/productList/ProductList';
import ProductDetail from './pages/productDetail/ProductDetail';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
