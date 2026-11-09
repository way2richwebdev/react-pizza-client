import { Settings } from './icons/icons';
import styles from './ProductCard.module.scss';

const ProductCard = () => {
  return (
    <li className={styles.productCard}>
        <div className={styles.productCardPreviewWrapper}>
            <a href='#' className={styles.settingIcon}>
                <Settings/>    
            </a>
            <img className='productCardPreview' src='img' alt="" width={211} height={212} loading='lazy'/>
        </div>
        <div className={styles.productCardInfo}>
            <h2 className={styles.productCardInfoTitle}>Сырный цыпленок</h2>
            <p className={styles.productCardInfoDescr}>Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок</p>
            <div className={styles.productCardInfoFooter}>
                <div className={styles.productCardInfoPrice}>395 ₽</div>
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