import React from "react";
import styles from "../styles/ProjectCard.module.css";
import Image from "next/image";

const ProjectCard = ({ title, live_url, code_url, description, tech }) => {
  return (
    <div className={styles.card}>
      <h3>
        <a target="_blank" href={live_url}>
          {title}{" "}
        </a>
        &rarr;
      </h3>
      <p>{description} </p>
      <div className={styles.tech_wrapper}>
        {tech &&
          tech.map((tech, i) => (
            <Image
              key={i}
              src={`/${tech}.svg`}
              alt="me"
              width="24"
              height="24"
            ></Image>
          ))}
      </div>

      <div className={styles.card_footer}>
        <a target="_blank" className={styles.link_button} href={code_url}>
          Code
        </a>
        <a target="_blank" className={styles.link_button} href={live_url}>
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
