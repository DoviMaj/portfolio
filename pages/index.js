import Head from "next/head";
import styles from "../styles/Home.module.css";
import ProjectCard from "../components/ProjectCard";
import projects from "../projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>David Majowka | Portfolio</title>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@DMajowka"></meta>
        <meta name="twitter:creator" content="@DMajowka"></meta>
        <meta name="twitter:title" content="David Majowka | Portfolio"></meta>
        <meta
          name="twitter:description"
          content="Full-stack Web Developer"
        ></meta>
        <meta
          name="twitter:image"
          content="https://fakebook-29149.s3.us-east-2.amazonaws.com/images/1618574420444.png"
        ></meta>
        <meta property="og:title" content="David Majowka | Portfolio"></meta>
        <meta
          property="og:description"
          name="description"
          content="Full-stack Web Developer."
        ></meta>
        <meta
          property="og:url"
          content="http://portfolio-dovimaj.vercel.app/"
        ></meta>
        <meta
          property="og:image"
          content="https://fakebook-29149.s3.us-east-2.amazonaws.com/images/1618574420444.png"
        ></meta>
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
        {" "}
        <div className={styles.social}>
          <a rel="noopener" href="https://github.com/dovimaj/" target="_blank">
            <Image
              src="/github.svg"
              alt="github icon"
              width="34"
              height="34"
            ></Image>
          </a>
          <a
            rel="noopener"
            href="https://linkedin.com/in/dovid-majowka"
            target="_blank"
          >
            <Image
              src="/linkedin.svg"
              alt="linkedin icon"
              width="34"
              height="34"
            ></Image>
          </a>
          <a
            rel="noopener"
            href="mailto:dovimajowka@gmail.com?subject=I want to hire you!&body=Hi, I saw your portfolio and..."
            target="_blank"
          >
            <Image
              src="/gmail.svg"
              alt="email icon"
              width="34"
              height="34"
            ></Image>
          </a>
        </div>
      </footer>
    </div>
  );
}
