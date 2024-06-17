const baseUrl = "https://dummyjson.com/products/";
const requests = {
    getCategories:async (searchedCategory) => {
        const response = await fetch('https://dummyjson.com/products/category-list');
        const specificCategory = await fetch(`https://dummyjson.com/products/category/${searchedCategory}`)
        const specificData =  await specificCategory.json();
        const data = await response.json();
        return {data, specificData}
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
        const response = await fetch(baseUrl+categoryName);
        const data = await response.json();
        return {data}
    }
}