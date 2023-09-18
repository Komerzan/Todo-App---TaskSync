import Filter from "./Filter/Filter";
import styles from "./Header.module.scss";
import Hidden from "./Hidden/Hidden";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
      <div className={styles.container}>
      <Logo />
        <div>
          <Search />
          <Filter />
          <Hidden />
      </div>

      </div>
      </div>
    </header>
  );
};

export default Header;
