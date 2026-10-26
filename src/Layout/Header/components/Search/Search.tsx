import styles from './Search.module.scss'

const Search = () => {
  return (
    <div className="search">
        <input type="text" name='search' placeholder='Поиск пиццы...' className={styles.searchInput} />
    </div>
  )
}

export default Search