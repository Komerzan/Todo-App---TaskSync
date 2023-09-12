import Lists from './Lists/Lists';
import styles from './Main.module.scss';
import Pagination from './Pagination/Pagination';

const Main = () => {
 
    return (
    <main className={styles.main}>
    <div className={styles.container}>
    <Lists/>
    <Pagination/>
    </div>
    </main>
  )
}


export default Main;
