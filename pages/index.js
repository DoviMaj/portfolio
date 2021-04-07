import Head from "next/head";
import styles from "../styles/Home.module.css";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Fakebook",
    live_url: "https://fakebook-client.vercel.app/",
    code_url: "https://github.com/DoviMaj/fakebook-client",
    description:
      "A Facebook clone, made with React, Express, MongoDB and Socket.io.",
  },
  {
    title: "Blog Project",
    live_url: "https://blog-client-dovimaj.vercel.app/",
    code_url: "https://github.com/DoviMaj/blog-client",
    description:
      "A blog website, API and CMS, made with Next.js, Express and MongoDB.",
  },
  {
    title: "Current Weather",
    live_url: "https://dovimaj.github.io/weather-app/",
    code_url: "https://github.com/DoviMaj/weather-app",
    description:
      "Check the current weather. Made with React, openweather and Geolocation API.",
  },
  {
    title: "Battleship Game",
    live_url: "https://dovimaj.github.io/battleship/",
    code_url: "https://github.com/DoviMaj/battleship",
    description:
      "Project designed to practice TDD principles. Made with Jest and VanillaJS.",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DoviMaj's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi 👋, im <a href="https://github.com/DoviMaj">David Majowka!</a>
        </h1>
        <p className={styles.description}>
          A passionate self-taught Full-stack web developer, <br></br>I love
          learning new technologies fixing bugs and improving UI's.
        </p>{" "}
        <code className={styles.code}>Here are some of my projects:</code>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.live_url}
              live_url={project.live_url}
              code_url={project.code_url}
              description={project.description}
              title={project.title}
            />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
