export type Product = {
    id: string;
    name: string;
    category: string;
    image: string;
    rating: number;
    badge?: {
        label: string;
        variant: 'discount' | 'limited' | 'soldOut' | 'popular' | 'hot' | 'new';
    };
    stockText: string;
    price: number;
    originalPrice?: number;
    buttonText: string;
    disabled?: boolean;
};

export type ProductCardProps = {
    product: Product;
    onAddToCart?: () => void;
};

export type ProductToolbarProps = {
    title: string;
};

export type CategoryItem = {
    label: string;
    count: number;
    checked?: boolean;
};

export type FilterSidebarProps = {
    categories: CategoryItem[];
};

export type HeaderProps ={
    cartCount: number;
};

export type PaginationProps = {
    currentPage: number;
    totalPages: number;
};