import Link from "next/link"
import { Stack } from "@/components/Stack"
import { Text } from "@/components/Text"
import * as React from "react"
import animation from "@/styles/animation.module.css"
import styles from "./projects.module.css"

export const Projects: React.FC<{
  projects: readonly {
    title: string
    description: string
    links: readonly { url: string }[]
  }[]
}> = ({ projects }) => (
  <Stack direction="row" align="flex-start" className={animation.fadeIn}>
    {projects.map(project => (
      <Link
        key={project.title}
        target="_blank"
        className={styles.card}
        href={project.links[0].url}
      >
        <Text tag="h4">
          {project.title} <span>-&gt;</span>
        </Text>
        <Text>{project.description}</Text>
      </Link>
    ))}
  </Stack>
)
