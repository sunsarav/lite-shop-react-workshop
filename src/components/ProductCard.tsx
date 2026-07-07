import type { ProductCardProps } from '../types';
import { Eye, Plus, Heart, Star } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
    const {
        image,
        name,
        category,
        rating,
        badge,
        stockText,
        price,
        originalPrice,
        buttonText,
        disabled
    } = product;

    return (
        <article className="border border-slate-200 rounded-[1.25rem] bg-white p-3 transition-all hover:border-blue-400 hover:shadow-lg hover:-translate-y-1.5 group">

            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                <img
                    src={image}
                    alt={name}
                    className="aspect-[4/5] w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button type="button" aria-label="Quick View" className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center">
                        <Eye size={20} />
                    </button>
                    <button type="button" aria-label="Add to cart" className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center">
                        <Plus size={20} />
                    </button>
                </div>

                {badge && (
                    <span className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full bg-slate-900/60 text-white">
                        {badge.label}
                    </span>
                )}

                <button type="button" aria-label="Add to favorites" className="absolute right-3 top-3 h-10 w-10 rounded-xl border border-slate-200/50 bg-white/70 text-slate-600">
                    <Heart size={20} />
                </button>
            </div>

            <div className="mt-4 px-1 pb-2 space-y-1">
                <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">
                        {category}
                    </p>
                    <div className="flex items-center gap-1">
                        <Star size={10} className="text-amber-400 fill-amber-400" />
                        <span className="text-[10px] font-bold text-slate-400">
                            {rating}
                        </span>
                    </div>
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600">
                    {name}
                </h3>

                <p className="text-[11px] font-medium text-slate-500">
                    {stockText}
                </p>

                <div className="flex items-center justify-between gap-3 pt-3">
                    <div className="flex flex-col">
                        {originalPrice && (
                            <span className="text-[10px] text-slate-400 line-through font-medium leading-none">
                                {originalPrice} kr
                            </span>
                        )}
                        <span className="text-lg font-black text-slate-900 tracking-tight">
                            {price} kr
                        </span>
                    </div>

                    <button
                        type="button"
                        aria-label="Add to cart"
                        disabled={disabled}
                        onClick={onAddToCart}
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-xs font-bold text-white transition-all hover:bg-blue-600"
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;