import Link from "next/link"
import { Stack } from "@/components/Stack"
import { Text } from "@/components/Text"
import * as React from "react"
import styles from "./projects.module.css"

export const Projects: React.FC<{
  projects: readonly {
    title: string
    description: string
    url: string
  }[]
}> = ({ projects }) => (
  <Stack direction="row" align="flex-start">
    {projects.map(project => (
      <Link
        key={project.title}
        target="_blank"
        className={styles.card}
        href={project.url}
      >
        <Text tag="h4">
          {project.title} <span>-&gt;</span>
        </Text>
        <Text>{project.description}</Text>
      </Link>
    ))}
  </Stack>
)
