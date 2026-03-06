import * as homeData from '../data/homeData';

// Simulating API latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const apiService = {
    // Fetch products with optional filters
    getProducts: async (params?: { category?: string; bestSellers?: boolean }) => {
        await delay(800);

        let filteredProducts = [...homeData.products];

        if (params?.bestSellers) {
            // Simulate best sellers by taking first 4
            filteredProducts = filteredProducts.slice(0, 4);
        }

        if (params?.category) {
            // In a real API, this would be a server-side filter
            // For now, we simulate it
            console.log(`Filtering by category: ${params.category}`);
        }

        return filteredProducts;
    }
};
