import ProductCard from './components/ProductCard';
import { products } from './data/products';

function App() {
    return <ProductCard product={products[0]} />;
}

export default App;