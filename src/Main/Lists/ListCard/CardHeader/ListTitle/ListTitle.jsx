import React from 'react'
import styles from './ListTitle.module.scss'
import TextArea from '../../../../../UI/TextArea/TextArea'

export default function ListTitle({changedTitle , setChangedTitle ,hiddenTextArea , title}) {

  return (
    <div className={styles.list_title}>
    {hiddenTextArea ? (
      <p>{title}</p>
    ) : (
      <TextArea
        value={changedTitle}
        onChange={(e) =>
          setChangedTitle(e.target.value)
        }
      />
    )}
  </div>
  )
}
