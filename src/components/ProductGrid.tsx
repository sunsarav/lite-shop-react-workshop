import ProductCard from './ProductCard';
import { products } from '../data/products';
import type { Product } from '../types';

const ProductGrid = () => {

    const handleAddToCart = (product: Product) => {
        console.log('Added to cart:', product);
    };

    return (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    product={product}
                    onAddToCart={() => handleAddToCart(product)}
                />
            ))}
        </div>
    );
};

export default ProductGrid;