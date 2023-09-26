import React, { useState } from 'react'
import styles from './CardHeader.module.scss'
import ListTitle from './ListTitle/ListTitle'
import { useDispatch } from 'react-redux';
import { changeTitle } from '../../../../../store/Features/ListsSlice';
import CardUtils from './CardUtils/CardUtils';

export default function ({title , listID}) {
    const dispatch = useDispatch()
    const [hiddenTextArea, setHiddenTextArea] = useState(true);
    const [changedTitle, setChangedTitle] = useState(
      title.replace(/\s+/g, " ").trim()
    );
    const newTitle = () => {
        setHiddenTextArea(!hiddenTextArea);
        if (changedTitle.length <= 0) {
          setChangedTitle(title)
          setHiddenTextArea(!hiddenTextArea);
        } else {
          dispatch(changeTitle({ id: listID, title: changedTitle }));
        }
      };
  return (
    <div className={styles.card_header}>
    <ListTitle title={title} hiddenTextArea={hiddenTextArea} changedTitle={changedTitle} setChangedTitle={setChangedTitle} />
    <CardUtils newTitle={newTitle} listID={listID} />
  </div>
  )
}
