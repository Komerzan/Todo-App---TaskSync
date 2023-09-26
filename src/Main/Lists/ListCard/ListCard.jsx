import styles from "./ListCard.module.scss";
import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import CardButtons from "./CardButtons/CardButtons";
import Task from "./Task/Task";
import NewTask from "./NewTask/NewTask";
import CardHeader from "./CardHeader/CardHeader";

const ListCard = ({ title, listID , date }) => {
  const allTasks = useSelector((state) => state.tasks);
  const [tasks, setTasks] = useState([]);
  const [hiddenNewTask, setHiddenNewTask] = useState(true);
  const [filterCondition, setFilterCondition] = useState();

  useEffect(() => {
    setTasks(allTasks.filter((t) => t.listID == listID).filter((t) => {
      if (filterCondition == true) {
        return t.isDone == true;
      }else if(filterCondition == false){
        return t.isDone == false;
      }else{
        return t.isDone == t.isDone
      }
    }));
  }, [allTasks , filterCondition]);

  const showNewTask = () => {
    setHiddenNewTask(!hiddenNewTask);
  };
  return (
    <div className={styles.listCard}>
      <CardHeader title={title} listID={listID}/>
      <CardButtons setFilterCondition={setFilterCondition} showNewTask={showNewTask} listID={listID} />
      <ul className={styles.card_tasks}>
        {hiddenNewTask ? (
          true
        ) : (
          <NewTask showNewTask={showNewTask} listID={listID} />
        )}
        {/*         tasks && */}
        {tasks.length >= 1 ? (
          tasks.map((task, index) => {
              return (
                <Task
                  task={task}
                  index={index}
                  isDone={task.isDone}
                  listID={task.listID}
                  key={task.id}
                  content={task.content}
                  id={task.id}
                />)})) : (
          <div className={styles.noItems}>
            <img src="/list.png" />
            <span>No tasks</span>
          </div>
        )}
      </ul>
      <div className={styles.date}>
        {date.slice(0 ,10)}
      </div>
    </div>
  );
};

export default ListCard;
