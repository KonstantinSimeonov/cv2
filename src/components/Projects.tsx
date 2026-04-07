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
  <Stack direction="row" align="flex-start" gap={1}>
    {projects.map(project => (
      <Link
        key={project.title}
        target="_blank"
        className={styles.card}
        href={project.url}
      >
        <Text tag="h4" sx={{ textDecoration: "underline" }}>
          {project.title}
        </Text>
        <Text>{project.description}</Text>
      </Link>
    ))}
  </Stack>
)
