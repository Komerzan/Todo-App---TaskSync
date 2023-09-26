import PropTypes from "prop-types";
import styles from "./CardButtons.module.scss";
import Button from "../../../../UI/Button/Button";
import { useState } from "react";
const CardButtons = ({ showNewTask, setFilterCondition }) => {
  const [activeLink, setActiveLink] = useState("all");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={styles.card_buttons}>
      <Button onClick={showNewTask}>
        <svg width="12" height="12" viewBox="0 0 24 24">
          <path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" />
        </svg>
        New task
      </Button>

      <Button
        isActive={activeLink == "all" ? true : false}
        value="all"
        onClick={(e) => (setFilterCondition(), handleLinkClick(e.target.value))}
      >
        All
      </Button>

      <Button
        isActive={activeLink == "active" ? true : false}
        value="active"
        onClick={(e) => (
          setFilterCondition(false), handleLinkClick(e.target.value)
        )}
      >
        Active
      </Button>

      <Button
        isActive={activeLink == "completed" ? true : false}
        value="completed"
        onClick={(e) => (
          setFilterCondition(true), handleLinkClick(e.target.value)
        )}
      >
        Completed
      </Button>
    </div>
  );
};

export default CardButtons;
