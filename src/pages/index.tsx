import Head from "next/head";
import ExportedImage from "next-image-export-optimizer";
import styles from "@/styles/Home.module.css";
import data from "@/data.json";
import Link from "next/link";
import ImgMap from "@/images";
import * as React from "react";
import { Skills } from "@/components/Skills";
import { Stack } from "@/components/Stack";
import { WorkExperience } from "@/components/WorkExperience";
import { Text } from "@/components/Text";

export default function Home() {
  return (
    <>
      <Head>
        <title>Konstantin Simeonov</title>
        <meta name="description" content="Konstantin Simeonov resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={`${styles.stack}`}>
          <Text tag="h1">Konstantin Simeonov</Text>

          <div
            className={`${styles.cluster} ${styles.between} ${styles.padding}`}
            style={{ flexWrap: `nowrap` }}
          >
            <div className={styles.stack}>
              {data.personalInfo.contacts.map((c) => (
                <Link key={c.url} target="_blank" href={c.url}>
                  <Text>{c.text}</Text>
                </Link>
              ))}
            </div>
            <ExportedImage
              className={styles.photo}
              src={ImgMap.Photo}
              height="150"
              width="150"
              alt="pic of me"
            />
          </div>
        </header>
        <article>
          <Text tag="h2">Skills</Text>
          <Skills skills={data.skills} />
        </article>
        <article>
          <Text tag="h2">Work Experience</Text>
          <WorkExperience experience={data.workExperience} />
        </article>
        <article>
          <Text tag="h2">Projects</Text>
          <div className={`${styles.cluster} ${styles.start}`}>
            {data.projects.map((p) => (
              <Link
                key={p.title}
                target="_blank"
                className={styles.card}
                href={p.links[0].url}
              >
                <Text tag="h4">
                  {p.title} <span>-&gt;</span>
                </Text>
                <Text>{p.description}</Text>
              </Link>
            ))}
          </div>
        </article>
      </main>
      <footer className={`${styles.cluster} ${styles.evenly} ${styles.footer}`}>
        <a
          href="https://kscv.vercel.app"
          onClick={(e) => {
            e.preventDefault();
            import(`html2pdf.js`).then(({ default: html2pdf }) => {
              html2pdf()
                .set({
                  margin: 0.5,
                  filename: `Konstantin Simeonov Resume.pdf`,
                  image: { type: `png`, quality: 10 },
                  html2canvas: { scale: 2, windowWidth: 800 },
                  jsPDF: { format: `A4` },
                })
                .from(document.body)
                .save();
            });
          }}
        >
          Generate PDF
        </a>
        <a href="https://kscv.vercel.app">
          The website is way cooler than the PDF
        </a>
        <Link target="_blank" href="https://github.com/KonstantinSimeonov/cv2">
          Built by me xD
        </Link>
      </footer>
    </>
  );
}
