import { useEffect, useState } from 'react';
import styles from './Lists.module.scss';
import { useSelector } from 'react-redux';
import ListCard from './ListCard/ListCard';


const Lists = () => {
  const allLists = useSelector(state => state.lists)
  const [lists , setLists] = useState([])
  useEffect(()=>{
    setLists(allLists)
  },[allLists])
  useSelector(state => state.lists)

  console.log(allLists);
  return (
    <div className={styles.lists}>
      {lists.map(item => {
        return <ListCard
          key={item.id}
          listID={item.id}
          title={item.listTitle}
          date={item.date}
        />
      })}
    </div>
  )
}


export default Lists;
