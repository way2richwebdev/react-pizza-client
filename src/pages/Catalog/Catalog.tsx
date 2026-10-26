import CatalogList from "../../shared/CatalogList/CatalogList"
import PageTitle from "../../shared/PageTitle/PageTitle"

const Catalog = () => {
  return (
    <>
    <PageTitle title="Все пиццы"/>
    <div className="content">
      <CatalogList/>
    </div>
    </>
  )
}

export default Catalog