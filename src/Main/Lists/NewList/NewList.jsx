import PropTypes from "prop-types";
import styles from "./NewList.module.scss";
import { useDispatch } from "react-redux";
import { addNewList } from "../../../../store/Features/ListsSlice";
import {v1} from 'uuid'

const NewList = () => {
  const dispatch = useDispatch();

  const addList = () => (
    dispatch(addNewList({id: v1(), listTitle: "Second list"}))
  )

  return (
    <div className={styles.newList} onClick={() => addList()}>
      <p>Add new list</p>
      <svg
        id="Layer_1"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
      >
        <path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" />
      </svg>
    </div>
  );
};

export default NewList;
