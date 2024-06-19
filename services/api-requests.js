const baseUrl = "https://dummyjson.com/products/";
export const requests = {
    getCategories:async () => {
        const response = await fetch(baseUrl+'category-list');
        const data = await response.json();
        console.log(data)
        return {data}
    },
    getAllProducts: async () => {
        const response = await fetch(baseUrl + 'products');
        const data = await response.json();
        return {data}
    },
    getProductById: async (id) => {
        const response = await fetch(baseUrl + id);
        const data = await response.json();
        return {data}
    },
    getSpecificCategory: async (categoryName) => {
        const response = await fetch(baseUrl+ "category/" + categoryName);
        const data = await response.json();
        return {data}
    }
}