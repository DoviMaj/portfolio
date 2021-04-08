import Head from "next/head";
import styles from "../styles/Home.module.css";
import ProjectCard from "../components/ProjectCard";
import projects from "../projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>David Majowka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi 👋, I'm{" "}
          <a rel="noopener" target="_blank" href="https://github.com/DoviMaj">
            David Majowka!
          </a>
        </h1>
        <p className={styles.description}>
          A passionate self-taught full-stack web developer, <br></br>I love
          learning new technologies, building and improving UI's.<br></br>{" "}
          Regular contributor to{" "}
          <a
            rel="noopener"
            href="https://github.com/TheOdinProject/"
            target="_blank"
          >
            TheOdinProject
          </a>
          .
        </p>
        <div className={styles.social}>
          <a rel="noopener" href="https://github.com/dovimaj/" target="_blank">
            <Image src="/github.svg" alt="me" width="34" height="34"></Image>
          </a>
          <a
            rel="noopener"
            href="https://linkedin.com/in/dovid-majowka-8472a0126"
            target="_blank"
          >
            <Image src="/linkedin.svg" alt="me" width="34" height="34"></Image>
          </a>
        </div>
        <code className={styles.code}>Here are some of my projects:</code>
        <div className={styles.grid}>
          {projects.map(
            ({ live_url, code_url, description, title, tech }, index) => (
              <ProjectCard
                key={index}
                live_url={live_url}
                code_url={code_url}
                description={description}
                title={title}
                tech={tech}
              />
            )
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          rel="noopener"
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
