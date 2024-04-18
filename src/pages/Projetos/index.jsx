import styles from "./Projetos.module.css";
import projects from "../../data/projects/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projetos() {
  return (
    <section className={styles.projetos}>
      <h2>Projetos</h2>
      <section className={styles.projectList}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
}
