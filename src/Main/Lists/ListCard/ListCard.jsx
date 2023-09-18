import PropTypes from "prop-types";
import styles from "./ListCard.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardButtons from "./CardButtons/CardButtons";
import CardUtils from "./CardUtils/CardUtils";
import { removeList } from "../../../../store/Features/ListsSlice";
import Task from "./Task/Task";
import NewTask from "./NewTask/NewTask";

const ListCard = ({ title, listID }) => {
  const allTasks = useSelector((state) => state.tasks);
  const [tasks, setTasks] = useState([]);
  const [hiddenNewTask , setHiddenNewTask] = useState(true)

  useEffect(() => {
    setTasks(allTasks.filter((t) => t.listID == listID));
  }, [allTasks]);

  const showNewTask = ( ) => {
    setHiddenNewTask(!hiddenNewTask)
  }

  return (
    <div className={styles.listCard}>
      <div className={styles.card_header}>
        <div className={styles.list_title}>
          {title}
        </div>
        <CardUtils listID={listID} />
      </div>
      <CardButtons  showNewTask={showNewTask} listID={listID} />
      <ul className={styles.card_tasks}>
      {hiddenNewTask ? true : <NewTask showNewTask={showNewTask}  listID={listID}/>}
        {tasks.map((task) => {
          return <Task isDone={task.isDone} listID={task.listID} key={task.id} content={task.content} id={task.id} />;
        })}
      </ul>
    </div>
  );
};

export default ListCard;
