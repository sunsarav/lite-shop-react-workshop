import type { PaginationProps } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
    const pages = [1, 2, 3];

    return (
        <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
            <button
                type="button"
                aria-label="Previous page"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
            >
                <ChevronLeft size={18} />
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    type="button"
                    aria-current={page === currentPage ? 'page' : undefined}
                    className={
                        page === currentPage
                            ? 'inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-600 bg-blue-600 text-white font-medium transition-all duration-200'
                            : 'inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50'
                    }
                >
                    {page}
                </button>
            ))}

            <span className="px-2 text-sm text-slate-400">…</span>

            <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
            >
                {totalPages}
            </button>

            <button
                type="button"
                aria-label="Next page"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
            >
                <ChevronRight size={18} />
            </button>
        </nav>
    );
};

export default Pagination;