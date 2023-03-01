import ExportedImage from "next-image-export-optimizer";
import ImgMap from "@/images";
import * as React from "react";
import styles from "@/styles/Home.module.css";
import { Stack } from "./Stack";

type SkillsProps = {
  skills: readonly { name: string; description: string; img_url: string }[];
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [selected, setSelected] = React.useState(skills[0]);

  return (
    <Stack sx={{ paddingLeft: `1.5rem` }} align="flex-start">
      <ol className={styles.cluster}>
        {skills.map((s) => (
          <li
            className={styles.skill}
            key={s.name}
            onClick={() => setSelected(s)}
            data-selected={selected.name === s.name}
          >
            <Stack>
              <div className={styles.description}>
                <p
                  style={{
                    width: `12ch`,
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    gap: `0.5rem`,
                  }}
                >
                  <ExportedImage
                    src={ImgMap[s.img_url]}
                    height="45"
                    width="40"
                    alt="typescript"
                  />
                  <span>{s.name}</span>
                </p>
              </div>
            </Stack>
          </li>
        ))}
      </ol>
      <Stack tag="section" className={styles.description}>
        <h4>{selected.name}</h4>
        <p>{selected.description}</p>
      </Stack>
    </Stack>
  );
};
