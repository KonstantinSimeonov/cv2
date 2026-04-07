import * as React from "react"
import Head from "next/head"
import { Skills } from "@/components/Skills"
import { Stack } from "@/components/Stack"
import { WorkExperience } from "@/components/WorkExperience"
import { Text } from "@/components/Text"
import { Footer } from "@/components/Footer"
import { Projects } from "@/components/Projects"
import { PersonalInfo } from "@/components/PersonalInfo"
import ImgMap from "@/images"
import { PrintInvis } from "@/components/PrintInvis"
import classes from "@/styles/home.module.css"
import { data } from "@/data"

const Metas = () => {
  const description = "A senior full-stack developer with 10 years of experience with focus on backend/infra/automation."
  return (
      <Head>
        <title>Konstantin Simeonov - Software Developer</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content={description}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.85"
        />

        <meta name="og:url" content={data.site} />
        <meta name="og:type" content="website" />
        <meta
          name="og:description"
          content={description}
        />
        <meta
          name="og:image"
          content={`${data.site}${ImgMap.Photo.src}`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={data.site} />
        <meta
          property="twitter:title"
          content="Konstantin Simeonov - Senior Software Dev"
        />
        <meta
          property="twitter:description"
          content={description}
        />
        <meta
          property="twitter:image"
          content={`${data.site}${ImgMap.Photo.src}`}
        />
      </Head>
  )
}

export default function Home() {
  return (
    <>
      <Metas />

      <Stack tag="main" gap={2} className={classes.main}>
        <Stack tag="header" gap={1}>
          <Stack gap={0} align="start">
            <Text typed tag="h1">
              Konstantin Simeonov
            </Text>
            <Stack direction="row" gap={1} align="center" sx={{ flexWrap: `wrap` }}>
              <Text typed variant="inter">
                <a style={{ color: `var(--primary-color)` }} href="mailto:kon.simeonov@protonmail.com">
                  kon.simeonov@protonmail.com
                </a>
              </Text>
              {data.personalInfo.contacts.map(({ url, text }) => (
                <Text key={url} typed variant="inter">
                  <a style={{ color: `var(--primary-color)` }} href={url} target="_blank">
                    {text}
                  </a>
                </Text>
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Stack tag="article" gap={1} align="start">
          <Text typed tag="h2">
            Skills
          </Text>
          <Skills skills={data.skills} />
        </Stack>
        <Stack tag="article" gap={1} align="start">
          <Text typed tag="h2">
            Work Experience
          </Text>
          <WorkExperience experience={data.workExperience} />
        </Stack>

        <PrintInvis link>
          <Stack tag="article" gap={1} align="start">
            <Text typed tag="h2">
              Projects
            </Text>
            <Projects projects={data.projects} />
          </Stack>
        </PrintInvis>
      </Stack>
      <PrintInvis>
        <Footer />
      </PrintInvis>
    </>
  )
}
