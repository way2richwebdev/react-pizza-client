const sortValues = {
    'default': 'По умолчанию',
    'priceHigher': 'Сначала дорогие',
    'priceLower': 'Сначала дешевые',
    'rating': 'По рейтингу'
} as const;

const sortValuesButtons = [
    {id: 1, value: 'default', label: 'По умолчанию'},
    {id: 2, value: 'priceHigher', label: 'Сначала дорогие'},
    {id: 3, value: 'priceLower', label: 'Сначала дешевые'},
    {id: 4, value: 'rating', label: 'По рейтингу'},
];

export {
    sortValues, sortValuesButtons
}