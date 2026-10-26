import { PageTitle } from './types.ts';
import styles from './PageTitle.module.scss';

const PageTitle = ({ title }: PageTitle) => {
  return (
    <h3 className={styles.pageTitle}>{title}</h3>
  )
}

export default PageTitle