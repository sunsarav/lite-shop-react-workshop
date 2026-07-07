import Header from './components/Header';
import FilterSidebar from './components/FilterSidebar';
import ProductToolbar from './components/ProductToolbar';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { categories } from './data/categories';

function App() {
    return (
        <div className="min-h-screen bg-slate-100/30 text-slate-950 antialiased font-sans">
            <Header cartCount={0} />

            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

                    <div className="lg:col-span-3 lg:sticky lg:top-20 self-start">
                        <FilterSidebar categories={categories} />
                    </div>

                    <section className="lg:col-span-9">
                        <div className="border border-slate-200 rounded-[1.25rem] bg-slate-50/50 backdrop-blur-sm shadow-sm p-5">
                            <ProductToolbar title="Recommended for you" />
                            <div className="mt-5 h-px bg-slate-100"></div>
                            <ProductGrid />
                            <Pagination currentPage={1} totalPages={12} />
                        </div>
                    </section>

                </div>
            </main>

            <Newsletter />
            <Footer />
        </div>
    );
}

export default App;