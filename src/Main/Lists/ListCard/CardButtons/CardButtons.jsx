import PropTypes from "prop-types";
import styles from "./CardButtons.module.scss";
import Button from "../../../../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask } from "../../../../../store/Features/TasksSlice";
import {v1} from "uuid"
import Task from "../Task/Task";
import { useState } from "react";
import NewTask from "../NewTask/NewTask";

const CardButtons = ({showNewTask}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.card_buttons}>
      <Button onClick={showNewTask}>
        <svg
          id="Layer_1"
          height="12"
          viewBox="0 0 24 24"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" />
        </svg>{" "}
        New task
      </Button>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </div>
    </div>
  );
};

export default CardButtons;
