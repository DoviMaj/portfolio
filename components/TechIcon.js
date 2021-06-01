import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/TechIcon.module.css";

const TechIcon = ({ tech }) => {
  const [displayTooltip, setDisplayTooltip] = useState(false);

  const toggleTooltip = () => setDisplayTooltip(!displayTooltip);

  return (
    <div
      className={styles.icon}
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
    >
      <a href={tech.url} rel="noopener" target="_blank">
        <Image
          src={`/${tech.name}.svg`}
          alt={`${tech.name} icon`}
          width="24"
          height="24"
        ></Image>
      </a>
      <span
        style={{ display: `${displayTooltip ? "initial" : "none"}` }}
        className={styles.tooltip}
      >
        {tech.tooltip}
      </span>
    </div>
  );
};

export default TechIcon;
