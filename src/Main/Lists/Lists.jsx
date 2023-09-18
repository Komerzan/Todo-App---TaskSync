import { useEffect, useState } from 'react';
import styles from './Lists.module.scss';
import { useSelector } from 'react-redux';
import ListCard from './ListCard/ListCard';
import NewList from './NewList/NewList';


const Lists = () => {
  const allLists = useSelector(state => state.lists)
  const [lists , setLists] = useState([])
  useEffect(()=>{
    setLists(allLists)
  },[allLists])

  useSelector(state => state.lists)
  return (
    <div className={styles.lists}>
    <NewList/>
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
