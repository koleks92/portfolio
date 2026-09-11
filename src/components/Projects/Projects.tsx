import Project from "./Project";
import styles from "./Projects.module.css";
import { projectsData } from "../../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsRoot}>
      <h2>PROJECTS</h2>
      <div className={styles.projects}>
        {projectsData.map((projectData) => {
          return <Project projectData={projectData} />;
        })}
      </div>
    </section>
  );
}
