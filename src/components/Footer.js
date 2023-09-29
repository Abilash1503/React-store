import styles from "styles/Footer.module.scss";
import GetIcon from "components/GetIcon";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <GetIcon icon="BsFillHeartFill" size={22} color="#da0037" /> <a href="https://github.com/Abilash1503">Abilash</a>
      </p>
    </footer>
  );
};

export default Footer;
