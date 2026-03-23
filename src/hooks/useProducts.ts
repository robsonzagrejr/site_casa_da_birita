import { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { ProductData } from '../data/homeData';

export function useProducts(params?: { category?: string; bestSellers?: boolean; collection?: string }) {
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
    }, [params?.category, params?.bestSellers, params?.collection]);

    return { products, loading, error };
}
