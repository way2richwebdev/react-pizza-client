type ProductCategory = 'meat' | 'spicy' | 'chicken' | 'vegetarian';

type Product = {
    id: number, 
    title: string, 
    descr: string,
    price: number,
    category: ProductCategory,
    rating: number,
    preview: string
}

export {
    ProductCategory, Product
}