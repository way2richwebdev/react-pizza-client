import { FilterValue } from "../../types";

type FilterValueItem = {id: number, value: FilterValue, label: string};

export const filter: FilterValueItem[] = [
    {id: 1, value: 'default', label: 'Все'},
    {id: 2, value: 'meat', label: 'Мясные'},
    {id: 3, value: 'spicy', label: 'Острые'},
    {id: 4, value: 'chicken', label: 'С курицей'},
    {id: 5, value: 'vegetarian', label: 'Вегетарианские'},
];