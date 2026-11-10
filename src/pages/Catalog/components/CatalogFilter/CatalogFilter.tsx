import { filter } from './data'
import styles from './CatalogFilter.module.scss'
import { FilterValue } from '../../types'

type CatalogFilter = {
  filterValue: FilterValue,
  setFilterValue: React.Dispatch<React.SetStateAction<FilterValue>>
}

const CatalogFilter = ({filterValue, setFilterValue}: CatalogFilter) => {
  return (
    <div className={styles.catalogFilter}>
        {filter.map((el) => (
          <button onClick={() => setFilterValue(el.value)} className={el.value === filterValue ? styles.catalogFilterButtonActive : styles.catalogFilterButton} key={el.id}>{el.label}</button>  
        ))}
    </div>
  )
}

export default CatalogFilter