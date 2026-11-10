import { FilterValue, SortValue } from "./types"
import { useState } from "react";

type UseCatalog = [
    sortValue: SortValue,
    filterValue: FilterValue,
    setSortValue: React.Dispatch<React.SetStateAction<SortValue>>,
    setFilterValue: React.Dispatch<React.SetStateAction<FilterValue>>
];

const useCatalog = (): UseCatalog => {

    const [sortValue, setSortValue] = useState<SortValue>('default');
    const [filterValue, setFilterValue] = useState<FilterValue>('default');

  return [
    sortValue, filterValue, setSortValue, setFilterValue
  ];
}

export default useCatalog