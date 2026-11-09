import { useState } from "react";
import { SortValue } from "../../types";

type useCatalogSort = [
    sortListIsVisible: boolean,
    changeSortValue: (value: SortValue) => void,
    toggleSortListIsVisible: () => void
]

const useCatalogSort = (setSortValue :React.Dispatch<React.SetStateAction<SortValue>>): useCatalogSort => {
    const [sortListIsVisible, setSortListIsVisible] = useState(false);

    const toggleSortListIsVisible = () => {
     return setSortListIsVisible((prev) => !prev);   
    }

    const changeSortValue = (value: SortValue): void => {
      setSortListIsVisible((prev) => !prev);
      return setSortValue(value)
    };

  return [
    sortListIsVisible, changeSortValue, toggleSortListIsVisible
  ]
}

export default useCatalogSort