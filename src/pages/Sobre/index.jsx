import styles from "./Sobre.module.css";
import { Link } from "react-router-dom";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";

export default function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <div className={styles.textos__sobre}>
          <h2>Sobre</h2>
          <p>
            Olá! Eu me chamo <strong>Junior Giroux</strong>. Ajudo pequenos
            negócios a se tornarem mais profissionais com sites modernos.
            Compreendo os desafios dos meus clientes e por isso dedico minhas
            habilidades na criação de uma identidade online. Acredito que um
            site não é apenas uma vitrine digital, mas sim uma ferramenta
            poderosa para expandir sua presença online e alcançar seus objetivos
            de negócios. Estou aqui para ouvir suas necessidades, entender sua
            visão e transformá-la em realidade digital. Juntos, podemos
            construir mais do que um site. Podemos construir uma parceria
            baseada na confiança, no compromisso e no desejo mútuo de sucesso.
            Estou aqui para ser seu guia na jornada para o sucesso online. Entre
            em contato comigo hoje mesmo e vamos começar a trabalhar juntos para
            alcançar seus objetivos na web.
          </p>
        </div>
      </div>
      <div className={styles.hardskills}>
        <h3>Hardskills</h3>
        <div className={styles.icones}>
          <Link to="#"><FaHtml5 className={styles.icon} /></Link>
          <Link to="#"><FaCss3 className={styles.icon} /></Link>
          <Link to="#"><FaJs className={styles.icon} /></Link>
          <Link to="#"><FaReact className={styles.icon} /></Link>
          <Link to="#"><TbBrandVite className={styles.icon} /></Link>
          <Link to="#"><FiGithub className={styles.icon} /></Link>
        </div>
      </div>
    </section>
  );
}
