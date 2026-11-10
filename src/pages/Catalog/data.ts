import { Product } from "../../types/Product";

export const catalog: Product[] = [
    {
        id: 1, 
        title: 'Сырный цыпленок', 
        descr: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
        price: 350,
        category: 'meat',
        rating: 5,
        preview: ''
    },
    {
        id: 123, 
        title: 'Мясная', 
        descr: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
        price: 550,
        category: 'meat',
        rating: 5,
        preview: ''
    },
    {
        id: 2, 
        title: 'Охотничья', 
        descr: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
        price: 450,
        category: 'spicy',
        rating: 4.6,
        preview: ''
    },
    {
        id: 3, 
        title: 'Вегетарианская', 
        descr: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
        price: 250,
        category: 'vegetarian',
        rating: 4.9,
        preview: ''
    },
];