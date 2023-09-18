import PropTypes from "prop-types";
import styles from "./TaskUtils.module.scss";
import { useDispatch } from "react-redux";
import { removeTask } from "../../../../../store/Features/TasksSlice";

const TaskUtils = ({ id , setChangeContent }) => {
  const dispatch = useDispatch()
  return (
    <div className={styles.task_utils}>
      <button className={styles.task_change} onClick={setChangeContent}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="12"
          height="12"
        >
          <path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z" />
        </svg>
      </button>
      <button onClick={() => dispatch(removeTask(id))}  className={styles.task_delete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="12"
          height="12"
        >
          <path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z" />
        </svg>
      </button>
    </div>
  );
};

export default TaskUtils;
