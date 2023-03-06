import ExportedImage from "next-image-export-optimizer";
import ImgMap from "@/images";
import * as React from "react";
import styles from "@/styles/Home.module.css";
import { Stack } from "./Stack";
import { PrintInvis } from "./PrintInvis";

type SkillsProps = {
  skills: readonly {
    name: string;
    description: string;
    img_url: keyof typeof ImgMap;
    priority?: number;
  }[];
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const sortedSkills = skills
    .slice()
    .sort(({ priority: a = 1000 }, { priority: b = 1000 }) => a - b);
  const [selected, setSelected] = React.useState(sortedSkills[0]);

  return (
    <Stack
      justify="stretch"
      align="start"
      direction="row"
      sx={{ flexWrap: `nowrap` }}
    >
      <Stack className={styles.skills} tag="ol" direction="row" gap={0.5}>
        {sortedSkills.map((s) => (
          <li
            className={styles.skill}
            key={s.name}
            onClick={() => setSelected(s)}
            data-selected={selected.name === s.name}
          >
            <Stack className={styles.description} align="center">
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
      <PrintInvis link={false}>
        <Stack
          tag="section"
          sx={{ width: `55%` }}
          className={styles.description}
        >
          <h4>{selected.name}</h4>
          <p style={{ overflowWrap: `anywhere` }}>{selected.description}</p>
        </Stack>
      </PrintInvis>
    </Stack>
  );
};
