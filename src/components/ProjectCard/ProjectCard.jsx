import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <img src={project.image} alt={project.title} />
      <div className={styles.cardBody}>
        <p className={styles.description}>{project.description}</p>
        <h3 className={styles.title__tech}>Tecnologias usadas:</h3>
        <ul className={styles.box__tech}>
          {project.technologies.map((tech, index) => (
            <li className={styles.content__tech} key={index}>
              {tech}
            </li>
          ))}
        </ul>
        <div className={styles.box__button}>
          <button type="button">Ver mais</button>
        </div>
      </div>
    </div>
  );
}
