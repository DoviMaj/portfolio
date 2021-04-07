import React from "react";
import styles from "../styles/Home.module.css";

const ProjectCard = ({ title, live_url, code_url, description }) => {
  return (
    <p className={styles.card}>
      <h3>
        <a target="_blank" href={live_url}>
          {title}{" "}
        </a>
        &rarr;
      </h3>
      <p>{description} </p>
      <div className={styles.card_footer}>
        <a target="_blank" className={styles.link_button} href={code_url}>
          Code
        </a>
        <a target="_blank" className={styles.link_button} href={live_url}>
          Live
        </a>
      </div>
    </p>
  );
};

export default ProjectCard;
