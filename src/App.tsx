import FilterSidebar from './components/FilterSidebar';
import { categories } from './data/categories'; // or wherever you put it

function App() {
    return <FilterSidebar categories={categories} />;
}

export default App;