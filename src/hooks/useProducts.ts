import { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { ProductData } from '../data/homeData';

export function useProducts(params?: { category?: string; bestSellers?: boolean }) {
    const [products, setProducts] = useState<ProductData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await apiService.getProducts(params);
                setProducts(data);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to fetch products'));
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
        // We stringify params to use as dependency if needed, 
        // but usually in home page we just fetch once on mount or when section changes.
    }, [params?.category, params?.bestSellers]);

    return { products, loading, error };
}
