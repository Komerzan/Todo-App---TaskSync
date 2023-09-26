import PropTypes from "prop-types";
import styles from "./NewList.module.scss";
import { useDispatch } from "react-redux";
import { addNewList } from "../../../../store/Features/ListsSlice";
import { v1 } from "uuid";
import { useState } from "react";
import Button from "../../../UI/Button/Button";

const NewList = () => {
  const dispatch = useDispatch();
  const [isHidden, setHidden] = useState(true);
  const [heading, setHeading] = useState();

  const addList = () =>{
  if(heading.replace(/\s+/g, " ").trim().length <= 0){
    setHidden(!isHidden)
  }else{
    dispatch(addNewList({ id: v1(), listTitle: heading.trim()  , date : new Date().toISOString()}))
    setHeading('')
  }
  setHidden(true)
  }

  return (
    <>
      <div className={styles.newList} onClick={() => setHidden(!isHidden)}>
        <p>New list</p>
        <svg
          id="Layer_1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" />
        </svg>
      </div>
      <div className={isHidden ? `${styles.modal}` : `${styles.modal} ${styles.active}`}>
        <div className={styles.modal_wrapper}>
          <div className={styles.modal_heading}>
            <h2 className={styles.heading} onClick={() => setHidden(!isHidden)}>
              Add heading
            </h2>
          </div>
          <div className={styles.modal_content}>
            <input
              placeholder="New list..."
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
            <Button onClick={() =>{addList() ,setHidden(!isHidden)}}>
            <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" />
        </svg>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewList;
