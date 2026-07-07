import ProductToolbar from './components/ProductToolbar';
import Pagination from './components/Pagination';

function App() {
    return (
        <div>
            <ProductToolbar title="Recommended for you" />
            <Pagination currentPage={1} totalPages={12} />
        </div>
    );
}

export default App;