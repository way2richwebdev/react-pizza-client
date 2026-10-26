import ProductCard from '../ProductCard/ProductCard'
import styles from './CatalogList.module.scss'

const CatalogList = () => {
  return (
    <ul className={styles.catalogList}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </ul>
  )
}

export default CatalogList