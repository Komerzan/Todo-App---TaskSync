import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <button className={props.isActive ? `${styles.button} ${styles.active}` :  styles.button} {...props}>{props.children}</button>
  )
}


export default Button;
