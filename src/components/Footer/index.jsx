import styles from "./Footer.module.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.social}>
        <a href="#" target="_blank">
          <FaWhatsapp />
        </a>
        <a href="#" target="_blank">
          <FaInstagram />
        </a>
        <a href="#" target="_blank">
          <FaGithub />
        </a>
      </nav>
    </footer>
  );
}
