import ExportedImage from "next-image-export-optimizer"
import ImgMap from "@/images"
import * as React from "react"
import paper from "@/styles/paper.module.css"
import { Stack } from "./Stack"
import classes from "./skills.module.css"

type SkillsProps = {
  skills: readonly {
    name: string
    description: string
    img_url: keyof typeof ImgMap
    priority?: number
  }[]
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const sortedSkills = skills
    .slice()
    .sort(({ priority: a = 1000 }, { priority: b = 1000 }) => a - b)
  return (
    <Stack justify="stretch" align="start" direction="row">
      <Stack className={classes.skills} tag="ol" direction="row" gap={0.5}>
        {sortedSkills.map(s => (
          <li key={s.name} style={{ width: "40%" }}>
            <Stack tag="section" className={paper.paper}>
              <Stack tag="h4" direction="row" justify="space-between">
                {s.name}{" "}
                <ExportedImage
                  src={ImgMap[s.img_url]}
                  height="25"
                  width="25"
                  alt="typescript"
                  style={{ display: "inline-block" }}
                />
              </Stack>
              <p>{s.description}</p>
            </Stack>
          </li>
        ))}
      </Stack>
    </Stack>
  )
}
