import PropTypes from "prop-types";
import styles from "./ListCard.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardButtons from "./CardButtons/CardButtons";
import TaskUtils from "./TaskUtils/TaskUtils";
import CardUtils from "./CardUtils/CardUtils";

const ListCard = ({ title, listID, date }) => {
  const allTasks = useSelector((state) => state.tasks);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(allTasks.filter(t => t.listID == listID));
  }, [allTasks]);

  console.log(tasks ,allTasks);
  return (
    <div className={styles.listCard}>
      <div className={styles.card_header}>
        <div className={styles.date}>{date.toUTCString().slice(0, -3)}</div>
        <div className={styles.deleteList}>
          <svg
            xmlnsXlink="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="12"
            height="12"
          >
            <path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z" />
          </svg>
        </div>
      </div>
      <div className={styles.list_title}>
        {title}
        <CardUtils />
      </div>
      <CardButtons listID={listID} />
      <ul className={styles.card_tasks}>
        {tasks.map((task) => {
          return (
            <li className={styles.task} key={task.id}>
              <div className={styles.task_left}>
                <div className={styles.check}>
                  <svg
                    xmlnsXlink="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path d="M12,24c-1.626,0-3.16-.714-4.208-1.959-1.54,.176-3.127-.405-4.277-1.555-1.149-1.15-1.729-2.74-1.59-4.362-1.211-.964-1.925-2.498-1.925-4.124s.714-3.16,1.96-4.208c-.175-1.537,.405-3.127,1.555-4.277,1.15-1.15,2.737-1.733,4.361-1.59,.964-1.21,2.498-1.925,4.124-1.925s3.16,.714,4.208,1.959c1.542-.173,3.127,.405,4.277,1.555,1.149,1.15,1.729,2.74,1.59,4.362,1.211,.964,1.925,2.498,1.925,4.124s-.714,3.16-1.96,4.208c.175,1.537-.405,3.127-1.555,4.277-1.151,1.15-2.741,1.726-4.361,1.59-.964,1.21-2.498,1.925-4.124,1.925Zm-4.127-3.924c.561,0,1.081,.241,1.448,.676,.668,.793,1.644,1.248,2.679,1.248s2.011-.455,2.679-1.248c.403-.479,.99-.721,1.616-.67,1.034,.087,2.044-.28,2.776-1.012,.731-.731,1.1-1.743,1.012-2.776-.054-.624,.19-1.213,.67-1.617,.792-.667,1.247-1.644,1.247-2.678s-.455-2.011-1.247-2.678c-.479-.403-.724-.993-.67-1.617,.088-1.033-.28-2.045-1.012-2.776s-1.748-1.094-2.775-1.012c-.626,.056-1.214-.191-1.617-.669-.668-.793-1.644-1.248-2.679-1.248s-2.011,.455-2.679,1.248c-.404,.479-.993,.719-1.616,.67-1.039-.09-2.044,.28-2.776,1.012-.731,.731-1.1,1.743-1.012,2.776,.054,.624-.19,1.213-.67,1.617-.792,.667-1.247,1.644-1.247,2.678s.455,2.011,1.247,2.678c.479,.403,.724,.993,.67,1.617-.088,1.033,.28,2.045,1.012,2.776,.732,.731,1.753,1.095,2.775,1.012,.057-.005,.113-.007,.169-.007Zm4.928-4.941l4.739-4.568c.397-.383,.409-1.017,.025-1.414-.383-.397-1.016-.409-1.414-.026l-4.752,4.581c-.391,.391-1.022,.391-1.44-.025l-2.278-2.117c-.402-.375-1.036-.353-1.413,.052-.376,.404-.353,1.037,.052,1.413l2.252,2.092c.586,.586,1.357,.879,2.126,.879,.765,0,1.526-.289,2.104-.866Z" />
                  </svg>
                </div>{" "}
                {task.content}
              </div>
              <TaskUtils />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListCard;
