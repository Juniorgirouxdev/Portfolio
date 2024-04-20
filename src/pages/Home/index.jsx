import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  
  return (
    <section className={styles.home}>
      <div className={styles.apresentacao}>
        <h1 data-aos="fade-down" data-aos-delay="1000">
          Junior <span>Giroux</span>
        </h1>
        <div className={styles.div__sub__title}>
          <p>Desenvolvedor </p>
          <div className={styles.div__span}>
            <span>Front-end</span>
          </div>
        </div>
        <div className={styles.container__button}>
          <Link to="/contatos" className={styles.btn}>
            Entrar em contato →
          </Link>
        </div>
      </div>
    </section>
  );
}
