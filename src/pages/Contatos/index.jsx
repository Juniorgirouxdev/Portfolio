import styles from "./Contatos.module.css";
import { GoMail } from "react-icons/go";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Contatos() {
  return (
    <>
      <section className={styles.contatos}>
        <div className={styles.titles}>
          <h2>Contatos</h2>
          <h3>Entre em contato</h3>
          <p>Para que possamos conversar mais sobre.</p>
        </div>
        <div className={styles.icones}>
          <a
            href="mailto:Juniorgirouxdev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMail className={styles.icone} />
          </a>
          <a
            href="https://instagram.com/juniorgirouxoficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className={styles.icone} />
          </a>
          <a
            href="https://github.com/juniorgirouxdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className={styles.icone} />
          </a>
          <a
            href="https://linkedin.com/juniorgirouxoficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className={styles.icone} />
          </a>
        </div>
      </section>
    </>
  );
}
