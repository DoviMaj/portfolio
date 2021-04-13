import React from "react";
import styles from "../styles/ProjectCard.module.css";
import TechIcon from "./TechIcon";

const ProjectCard = ({ title, live_url, code_url, description, tech }) => {
  return (
    <div className={styles.card}>
      <h3>
        <a rel="noopener" target="_blank" href={live_url}>
          {title}{" "}
        </a>
        &rarr;
      </h3>
      <p>{description} </p>
      <div className={styles.tech_wrapper}>
        {tech && tech.map((tech, i) => <TechIcon key={i} tech={tech} />)}
      </div>

      <div className={styles.card_footer}>
        <a
          rel="noopener"
          target="_blank"
          className={styles.link_button}
          href={code_url}
        >
          Code
        </a>
        <a
          rel="noopener"
          target="_blank"
          className={styles.link_button}
          href={live_url}
        >
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
