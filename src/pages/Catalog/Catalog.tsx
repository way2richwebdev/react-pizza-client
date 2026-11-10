import CatalogList from "../../shared/CatalogList/CatalogList"
import PageTitle from "../../shared/PageTitle/PageTitle"
import CatalogFilter from "./components/CatalogFilter/CatalogFilter"
import CatalogSort from "./components/CatalogSort/CatalogSort"
import { catalog } from "./data"
import styles from './Catalog.module.scss';
import { getSortedCatalog } from "./utils"
import useCatalog from "./hooks"

const Catalog = () => {

  const [sortValue, filterValue, setSortValue, setFilterValue] = useCatalog();

  return (
    <>
    <PageTitle title="Все пиццы"/>
    <div className={styles.catalogActions}>
      <CatalogFilter filterValue={filterValue} setFilterValue={setFilterValue}/>
      <CatalogSort sortValue={sortValue} setSortValue={setSortValue}/>
    </div>
    <div className="content">
      <CatalogList products={getSortedCatalog(catalog, sortValue, filterValue)}/>
    </div>
    </>
  )
}

export default Catalog