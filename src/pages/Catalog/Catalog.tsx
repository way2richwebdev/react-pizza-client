import { useState } from "react"
import { SortValue } from "./types"
import CatalogList from "../../shared/CatalogList/CatalogList"
import PageTitle from "../../shared/PageTitle/PageTitle"
import CatalogFilter from "./components/CatalogFilter/CatalogFilter"
import CatalogSort from "./components/CatalogSort/CatalogSort"
import styles from './Catalog.module.scss';

const Catalog = () => {

  const [sortValue, setSortValue] = useState<SortValue>('default');

  return (
    <>
    <PageTitle title="Все пиццы"/>
    <div className={styles.catalogActions}>
      <CatalogFilter/>
      <CatalogSort sortValue={sortValue} setSortValue={setSortValue}/>
    </div>
    <div className="content">
      <CatalogList/>
    </div>
    </>
  )
}

export default Catalog