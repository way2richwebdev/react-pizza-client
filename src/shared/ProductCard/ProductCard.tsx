import { Product } from '../../types/Product';
import { Settings } from './icons/icons';
import styles from './ProductCard.module.scss';

const ProductCard = (props: Product) => {
  return (
    <li className={styles.productCard}>
        <div className={styles.productCardPreviewWrapper}>
            <a href='#' className={styles.settingIcon}>
                <Settings/>    
            </a>
            <img className='productCardPreview' src={props.preview} alt={props.title} width={211} height={212} loading='lazy'/>
        </div>
        <div className={styles.productCardInfo}>
            <h2 className={styles.productCardInfoTitle}>{props.title}</h2>
            {/* <div>{props.rating}</div> */}
            <p className={styles.productCardInfoDescr}>{props.descr}</p>
            <div className={styles.productCardInfoFooter}>
                <div className={styles.productCardInfoPrice}>{props.price} ₽</div>
                <div className="productCardInfoActions">
                    {/* <button className={styles.productCardInfoActionsFirstAddButton}>+ Добавить</button> */}
                    <div className={styles.productCardInfoActionsCounter}>
                        <button className={styles.counterButton}>-</button>
                        <div className={styles.counterValue}>1</div>
                        <button className={styles.counterButton}>+</button>
                    </div>
                </div>
            </div>
        </div>
    </li>
  )
}

export default ProductCard