import styles from "./NewTask.module.scss";
import { addNewTask } from "../../../../../store/Features/TasksSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { v1 } from "uuid";
import TextArea from "../../../../UI/TextArea/TextArea";

const NewTask = ({showNewTask , listID}) => {
  const [newContent , setNewContent] = useState('')
  const dispatch = useDispatch();
  const createTask = () =>{
    if(newContent.trim() === ''){
      showNewTask()
    }else{
      dispatch(
        addNewTask({ id: v1(), content: newContent, isDone: false, listID: listID })
      )
      setNewContent('')
    }
    showNewTask()
  }
    
  return (
    <>
      <li className={styles.task}>
        <div className={styles.task_left}>
        <TextArea value={newContent} onChange={e => setNewContent(e.target.value)}/>
        </div>
        <button onClick={createTask}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="20"
            height="19"
          >
            <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z" />
          </svg>
        </button>
      </li>
    </>
  );
};

export default NewTask;
