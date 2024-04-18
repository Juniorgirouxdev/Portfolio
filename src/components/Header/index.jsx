import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [close, setclose] = useState(false);

  return (
    <header className={styles.header}>
      <nav>
        <Link className={styles.navBar} to="/">
          Home
        </Link>
        <Link className={styles.navBar} to="/sobre">
          Sobre
        </Link>
        <Link to="/">
          <img
            src="https://cdn-icons-png.freepik.com/512/10169/10169718.png?ga=GA1.1.1664898219.1713207659"
            alt="logo"
          />
        </Link>
        <Link className={styles.navBar} to="/projetos">
          Projetos
        </Link>
        <Link className={styles.navBar} to="/contatos">
          Contatos
        </Link>
        <div>
          <button
            className={styles.menu__resposive}
            onClick={() => setMenu(!menu)}
          >
            {menu ? "X" : "☰"}
          </button>
        </div>
      </nav>
      {menu && (
        <div className={styles.toggle__navBar}>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/sobre">
              <li>Sobre</li>
            </Link>
            <Link to="/projetos">
              <li>Projetos</li>
            </Link>
            <Link to="/contatos">
              <li>Contatos</li>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
