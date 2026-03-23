import * as homeData from '../data/homeData';

// Simulating API latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const apiService = {
    // Fetch products with optional filters
    getProducts: async (params?: { category?: string; bestSellers?: boolean; collection?: string }) => {
        await delay(800);

        let filteredProducts = [...homeData.products];

        if (params?.collection) {
            const slug = params.collection;

            if (slug === 'todas') {
                // Return all products
            } else if (slug === 'mais-vendidos') {
                filteredProducts = filteredProducts.filter(p => p.bestSeller);
            } else if (slug === 'promocoes') {
                filteredProducts = filteredProducts.filter(p => p.onSale);
            } else {
                filteredProducts = filteredProducts.filter(p => p.collection === slug);
            }

            return filteredProducts;
        }

        if (params?.bestSellers) {
            filteredProducts = filteredProducts.filter(p => p.bestSeller);
        }

        if (params?.category) {
            filteredProducts = filteredProducts.filter(p => p.collection === params.category);
        }

        return filteredProducts;
    }
};
