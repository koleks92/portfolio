import styles from "./Project.module.css";
import type { ProjectType } from "../../types/project";
import ArrowUpRight from "../UI/ArrowUpRight";

export default function Project(props: { projectData: ProjectType }) {
  return (
    <a className={styles.project} href={props.projectData.url}>
      <div className={styles.imageContainer}>
        <img src={props.projectData.img} alt={props.projectData.title} />
      </div>
      <div className={styles.descriptionContainer}>
        <h3 className={styles.title}>
          <span className={styles.titleText}>{props.projectData.title}</span>
          <ArrowUpRight />
        </h3>
        <p className={styles.description}>{props.projectData.description}</p>
        <div className={styles.tags}>
          {props.projectData.tags.map((tag: string) => {
            return <div className={styles.tag}>{tag}</div>;
          })}
        </div>
      </div>
    </a>
  );
}
