import React from "react";
import styles from "../styles/ProjectCard.module.css";
import Image from "next/image";

const ProjectCard = ({ title, live_url, code_url, description, tech }) => {
  console.log(tech);
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
        {tech &&
          tech.map((tech, i) => (
            <a href={tech.url} key={i} rel="noopener" target="_blank">
              <Image
                src={`/${tech.name}.svg`}
                alt={`${tech.name} icon`}
                width="24"
                height="24"
              ></Image>
            </a>
          ))}
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
