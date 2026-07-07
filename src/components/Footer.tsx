import { AtSign, Camera, Box } from 'lucide-react';

const footerColumns = [
    { heading: 'Shop', links: ['New Arrival', 'Best Sellers', 'Men Collection', 'Women Collection'] },
    { heading: 'Support', links: ['Order Status', 'Shipping Policy', 'Returns & Exchanges', 'FAQs'] },
    { heading: 'Company', links: ['About Us', 'Sustainability', 'Careers', 'Contact'] },
];

const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">

                    {/* Brand column */}
                    <div className="col-span-2 lg:col-span-2 space-y-6">
                        <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-slate-900">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg">
                                <Box size={20} />
                            </span>
                            <span className="text-xl tracking-tighter uppercase font-black">LITE.SHOP</span>
                        </a>
                        <p className="max-w-xs text-sm text-slate-500 leading-relaxed font-medium">
                            Modern e-commerce experience built for speed and elegance. Discover the latest trends in outerwear, footwear and accessories.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" aria-label="Twitter" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
                                <AtSign size={18} />
                            </a>
                            <a href="#" aria-label="Instagram" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
                                <Camera size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Link columns — mapped */}
                    {footerColumns.map((column, index) => (
                        <div key={index} className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">
                                {column.heading}
                            </h4>
                            <ul className="space-y-4 text-sm font-bold text-slate-500">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" className="hover:text-blue-600 transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-20 border-t border-slate-100 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        &copy; 2026 LITE.SHOP. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;