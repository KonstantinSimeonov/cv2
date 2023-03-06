import Head from "next/head";
import styles from "@/styles/Home.module.css";
import data from "@/data.json";
import { Skills } from "@/components/Skills";
import { Stack } from "@/components/Stack";
import { WorkExperience } from "@/components/WorkExperience";
import { Text } from "@/components/Text";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { PersonalInfo } from "@/components/PersonalInfo";
import ImgMap from "@/images";

export default function Home() {
  return (
    <>
      <Head>
        <title>Konstantin Simeonov</title>
        <meta name="description" content="Konstantin Simeonov resume" />
        <meta name="viewport" content="width=device-width, initial-scale=0.85" />
        <meta name="og:url" content="https://konsimeonov.lol" />
        <meta name="og:type" content="profile" />
        <meta name="og:description" content="Konstantin Simeonov - Software Developer, skills and work experience" />
        <meta name="og:image" content={ImgMap.Photo.src} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack tag="main" gap={2} className={styles.main}>
        <Stack tag="header" gap={1}>
          <Stack gap={0}>
          <Text tag="h1">Konstantin Simeonov</Text>
            <Text sx={{ color: `#ffb86c` }}>Sofia, Bulgaria</Text>
          </Stack>
          <PersonalInfo contacts={data.personalInfo.contacts} />
        </Stack>
        <Stack tag="article" gap={1}>
          <Text tag="h2">Skills</Text>
          <Skills skills={data.skills} />
        </Stack>
        <Stack tag="article" gap={1}>
          <Text tag="h2">Work Experience</Text>
          <WorkExperience experience={data.workExperience} />
        </Stack>
        <Stack tag="article" gap={1}>
          <Text tag="h2">Projects</Text>
          <Projects projects={data.projects} />
        </Stack>
      </Stack>
      <Footer />
    </>
  );
}
