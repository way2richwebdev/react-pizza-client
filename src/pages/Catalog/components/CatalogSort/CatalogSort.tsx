import { sortValues, sortValuesButtons } from './data';
import useCatalogSort from './hooks';
import styles from './CatalogSort.module.scss'
import { SortValue } from '../../types';

type CatalogSort = {
  sortValue: SortValue,
  setSortValue: React.Dispatch<React.SetStateAction<SortValue>>
}

const CatalogSort = ({sortValue, setSortValue}: CatalogSort) => {
  const [sortListIsVisible, changeSortValue, toggleSortListIsVisible] = useCatalogSort(setSortValue);

  return (
    <div className={styles.catalogSort}>
      <div className={sortListIsVisible ? styles.catalogSortValueActive : styles.catalogSortValue} onClick={toggleSortListIsVisible}>
        Сортировка:<span>{sortValues[sortValue as SortValue]}</span>
      </div>
      <div className={sortListIsVisible ? styles.catalogSortListActive : styles.catalogSortList}>
        {sortValuesButtons.filter((el) => el.value !== sortValue).map((el) => (
           <button key={el.id} className={styles.catalogSortListButton} onClick={() => changeSortValue(el.value as SortValue)}>{el.label}</button>
        ))}
      </div>
    </div>
  )
}

export default CatalogSort