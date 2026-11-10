import { Product } from '../../types/Product'
import ProductCard from '../ProductCard/ProductCard'
import styles from './CatalogList.module.scss'

type CatalogList = {
  products: Product[];
}

const CatalogList = ({products}: CatalogList) => {
  return (
    <ul className={styles.catalogList}>
      {products.map((el) => (
        <ProductCard key={el.id} {...el}/>  
      ))}
    </ul>
  )
}

export default CatalogList