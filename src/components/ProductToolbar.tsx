import type { ProductToolbarProps } from '../types';
import { ChevronDown } from 'lucide-react';

const ProductToolbar = ({ title }: ProductToolbarProps) => {
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
                {title}
            </h1>

            <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                <span className="hidden sm:inline">Sort by:</span>
                <div className="relative">
                    <select className="appearance-none border border-slate-200 bg-white rounded-[0.75rem] py-2 pl-3 pr-9 text-sm">
                        <option>Newest</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Best Selling</option>
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                        <ChevronDown size={16} />
                    </span>
                </div>
            </label>
        </div>
    );
};

export default ProductToolbar;