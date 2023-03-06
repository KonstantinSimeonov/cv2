import Head from "next/head";
import styles from "@/styles/Home.module.css";
import data from "@/data";
import { Skills } from "@/components/Skills";
import { Stack } from "@/components/Stack";
import { WorkExperience } from "@/components/WorkExperience";
import { Text } from "@/components/Text";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { PersonalInfo } from "@/components/PersonalInfo";
import ImgMap from "@/images";
import {PrintInvis} from "@/components/PrintInvis";

export default function Home() {
  return (
    <>
      <Head>
        <title>Konstantin Simeonov - Software Developer</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="A React/Nodejs full-stack developer with 8 years of experience." />
        <meta name="viewport" content="width=device-width, initial-scale=0.85" />

        <meta name="og:url" content="https://konsimeonov.lol" />
        <meta name="og:type" content="website" />
        <meta name="og:description" content="A React/Nodejs full-stack developer with 8 years of experience." />
        <meta name="og:image" content={`https://konsimeonov.lol${ImgMap.Photo.src}`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Konstantin Simeonov - Software Developer" />
        <meta property="twitter:description" content="A React/Nodejs full-stack developer with 8 years of experience." />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/ >
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

          <PrintInvis>
        <Stack tag="article" gap={1}>
          <Text tag="h2">Projects</Text>
          <Projects projects={data.projects} />
        </Stack>
</PrintInvis>
      </Stack>
      <PrintInvis link={false}>
      <Footer />
</PrintInvis>
    </>
  );
}
