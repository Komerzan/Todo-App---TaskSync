import React, { useState } from "react";
import TaskUtils from "../TaskUtils/TaskUtils";
import styles from "./Task.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewTask,
  changeContent,
  changeStatus,
  removeTask,
} from "../../../../../store/Features/TasksSlice";
import { v1 } from "uuid";
import TextArea from "../../../../UI/TextArea/TextArea";

export default function Task({ task, index, listID, content, id, isDone }) {
  const [hiddenTextArea, setHiddenTextArea] = useState(true);
  const [changedContent, setChangedContent] = useState(
    content.replace(/\s+/g, " ").trim()
  );
  const dispatch = useDispatch();

  const updateContent = () => {
    if (hiddenTextArea === true) {
      setHiddenTextArea(false);
    } else {
      dispatch(
        changeContent({
          id: id,
          content: changedContent,
        })
      );
      setHiddenTextArea(true);
    }
  };

  return (
    <li className={styles.task}>
      <div className={styles.task_left}>
        <div
          className={styles.check}
          onClick={() => dispatch(changeStatus(id))}
        >
          <svg
            className={isDone ? styles.isDone : ""}
            xmlnsXlink="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="15"
            height="15"
          >
            <path d="M12,24c-1.626,0-3.16-.714-4.208-1.959-1.54,.176-3.127-.405-4.277-1.555-1.149-1.15-1.729-2.74-1.59-4.362-1.211-.964-1.925-2.498-1.925-4.124s.714-3.16,1.96-4.208c-.175-1.537,.405-3.127,1.555-4.277,1.15-1.15,2.737-1.733,4.361-1.59,.964-1.21,2.498-1.925,4.124-1.925s3.16,.714,4.208,1.959c1.542-.173,3.127,.405,4.277,1.555,1.149,1.15,1.729,2.74,1.59,4.362,1.211,.964,1.925,2.498,1.925,4.124s-.714,3.16-1.96,4.208c.175,1.537-.405,3.127-1.555,4.277-1.151,1.15-2.741,1.726-4.361,1.59-.964,1.21-2.498,1.925-4.124,1.925Zm-4.127-3.924c.561,0,1.081,.241,1.448,.676,.668,.793,1.644,1.248,2.679,1.248s2.011-.455,2.679-1.248c.403-.479,.99-.721,1.616-.67,1.034,.087,2.044-.28,2.776-1.012,.731-.731,1.1-1.743,1.012-2.776-.054-.624,.19-1.213,.67-1.617,.792-.667,1.247-1.644,1.247-2.678s-.455-2.011-1.247-2.678c-.479-.403-.724-.993-.67-1.617,.088-1.033-.28-2.045-1.012-2.776s-1.748-1.094-2.775-1.012c-.626,.056-1.214-.191-1.617-.669-.668-.793-1.644-1.248-2.679-1.248s-2.011,.455-2.679,1.248c-.404,.479-.993,.719-1.616,.67-1.039-.09-2.044,.28-2.776,1.012-.731,.731-1.1,1.743-1.012,2.776,.054,.624-.19,1.213-.67,1.617-.792,.667-1.247,1.644-1.247,2.678s.455,2.011,1.247,2.678c.479,.403,.724,.993,.67,1.617-.088,1.033,.28,2.045,1.012,2.776,.732,.731,1.753,1.095,2.775,1.012,.057-.005,.113-.007,.169-.007Zm4.928-4.941l4.739-4.568c.397-.383,.409-1.017,.025-1.414-.383-.397-1.016-.409-1.414-.026l-4.752,4.581c-.391,.391-1.022,.391-1.44-.025l-2.278-2.117c-.402-.375-1.036-.353-1.413,.052-.376,.404-.353,1.037,.052,1.413l2.252,2.092c.586,.586,1.357,.879,2.126,.879,.765,0,1.526-.289,2.104-.866Z" />
          </svg>
        </div>
        <div className={styles.task_content}>
          {hiddenTextArea ? (
            <pre>{content}</pre>
          ) : (
            <TextArea
              value={changedContent}
              onChange={(e) => setChangedContent(e.target.value)}
            />
          )}
        </div>
      </div>
      <TaskUtils updateContent={updateContent} id={id} />
    </li>
  );
}
