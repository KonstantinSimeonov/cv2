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
import { Footer } from "@/components/Footer";
import {Projects} from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Konstantin Simeonov</title>
        <meta name="description" content="Konstantin Simeonov resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack tag="main" gap={2} className={styles.main}>
        <Stack tag="header" gap={1}>
          <Text tag="h1">Konstantin Simeonov</Text>

          <Stack
            direction="row"
            justify="space-between"
            sx={{ flexWrap: `nowrap` }}
          >
            <Stack align="flex-start" gap={0.5}>
              {data.personalInfo.contacts.map((c) => (
                <Link key={c.url} target="_blank" href={c.url}>
                  <Text>{c.text}</Text>
                </Link>
              ))}
            </Stack>
            <ExportedImage
              className={styles.photo}
              src={ImgMap.Photo}
              height="150"
              width="150"
              alt="pic of me"
            />
          </Stack>
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
