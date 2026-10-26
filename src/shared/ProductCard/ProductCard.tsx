import styles from './ProductCard.module.scss';

const ProductCard = () => {
  return (
    <li className={styles.productCard}>
        <div className={styles.productCardPreviewWrapper}>
            <img className='productCardPreview' src='' alt="" width={211} height={212} loading='lazy'/>
        </div>
        <div className={styles.productCardInfo}>
            <h2 className={styles.productCardInfoTitle}>Сырный цыпленок</h2>
            <p className={styles.productCardInfoDescr}>Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок</p>
            <div className={styles.productCardInfoFooter}>
                <div className={styles.productCardInfoPrice}>395 ₽</div>
                <div className="productCardInfoActions">
                    <button className={styles.productCardInfoActionsFirstAddButton}>+ Добавить</button>
                </div>
            </div>
        </div>
    </li>
  )
}

export default ProductCard