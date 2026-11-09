import styles from './CatalogFilter.module.scss'

const CatalogFilter = () => {
  return (
    <div className={styles.catalogFilter}>
        <button className={styles.catalogFilterButtonActive}>Все</button>
        <button className={styles.catalogFilterButton}>Мясные</button>
        <button className={styles.catalogFilterButton}>Острые</button>
        <button className={styles.catalogFilterButton}>Сладкие</button>
        <button className={styles.catalogFilterButton}>С курицей</button>
        <button className={styles.catalogFilterButton}>Вегетарианские</button>
    </div>
  )
}

export default CatalogFilter