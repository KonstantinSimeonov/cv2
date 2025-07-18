import ExportedImage from "next-image-export-optimizer"
import ImgMap from "@/images"
import * as React from "react"
import paper from "@/styles/paper.module.css"
import { Stack } from "./Stack"
import { PrintInvis } from "./PrintInvis"
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
  const [selected, setSelected] = React.useState(sortedSkills[0])

  return (
    <Stack
      justify="stretch"
      align="start"
      direction="row"
      sx={{ flexWrap: `nowrap` }}
    >
      <Stack className={classes.skills} tag="ol" direction="row" gap={0.5}>
        {sortedSkills.map(s => (
          <li key={s.name} onClick={() => setSelected(s)}>
            <Stack
              data-selected={selected.name === s.name}
              className={`${paper.paper} ${classes.card}`}
              align="center"
            >
              <ExportedImage
                src={ImgMap[s.img_url]}
                height="45"
                width="40"
                alt="typescript"
              />
              <span>{s.name}</span>
            </Stack>
          </li>
        ))}
      </Stack>
      <PrintInvis>
        <Stack tag="section" sx={{ width: `55%` }} className={paper.paper}>
          <h4>{selected.name}</h4>
          <p style={{ overflowWrap: `anywhere` }}>{selected.description}</p>
        </Stack>
      </PrintInvis>
    </Stack>
  )
}
