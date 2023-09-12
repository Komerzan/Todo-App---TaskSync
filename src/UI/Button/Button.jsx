import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <button className={styles.button} {...props}></button>
  )
}


export default Button;
