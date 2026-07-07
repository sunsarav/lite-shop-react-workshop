import type { HeaderProps } from '../types';
import { Search, ShoppingCart, User, Menu, Box } from 'lucide-react';

const Header = ({ cartCount }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-40 border-b border-blue-700/30 bg-blue-600 shadow-lg shadow-blue-900/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-white">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600 shadow-md">
                            <Box size={20} />
                        </span>
                        <span className="text-xl tracking-tighter uppercase font-black">LITE.SHOP</span>
                    </a>

                    {/* Nav links */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-blue-100">
                        <a className="hover:text-white transition-colors duration-200" href="#">New Arrival</a>
                        <a className="hover:text-white transition-colors duration-200" href="#">Men</a>
                        <a className="hover:text-white transition-colors duration-200" href="#">Women</a>
                        <a className="hover:text-white transition-colors duration-200" href="#">Sale</a>
                    </nav>

                    {/* Right icons */}
                    <div className="flex items-center gap-2">

                        {/* Search */}
                        <div className="relative hidden sm:block">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="h-10 w-48 rounded-[0.75rem] bg-blue-500/30 pl-10 pr-4 text-xs font-medium text-blue-50 placeholder:text-blue-200/50 border border-blue-400/20 focus:bg-blue-500/50 focus:w-64 transition-all duration-300 outline-none"
                            />
                            <Search size={16} className="absolute left-3.5 top-3 text-blue-200" />
                        </div>

                        {/* Cart */}
                        <button
                            type="button"
                            aria-label="Cart"
                            className="relative inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-blue-500/30 text-blue-50 hover:text-white hover:bg-blue-500/50 border border-blue-400/20 transition-all duration-200"
                        >
                            <ShoppingCart size={20} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* User */}
                        <button
                            type="button"
                            aria-label="Account"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-blue-500/30 text-blue-50 hover:text-white hover:bg-blue-500/50 border border-blue-400/20 transition-all duration-200"
                        >
                            <User size={20} />
                        </button>

                        {/* Mobile menu */}
                        <button
                            type="button"
                            aria-label="Menu"
                            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-blue-500/30 text-blue-50 hover:text-white hover:bg-blue-500/50 border border-blue-400/20 transition-all duration-200"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;