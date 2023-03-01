import ExportedImage from "next-image-export-optimizer";
import ImgMap from "@/images";
import * as React from "react";
import styles from "@/styles/Home.module.css";

export const Skills: React.FC<{ skills: readonly { name: string; description: string; img_url: string }[] }> = ({ skills }) => {
  const [selected, setSelected] = React.useState(skills[0]);

  return (
    <div style={{ paddingLeft: `1.5rem`, display: `flex`, flexDirection: `column`, gap: `1rem` }}>
      <ol className={styles.cluster} >
        {skills.map((s) => (
          <li className={styles.skill} key={s.name} onClick={() => setSelected(s)} data-selected={selected.name === s.name}>
              <div className={styles.stack} style={{ alignItems: `center` }}>
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
              </div>
          </li>
        ))}
      </ol>
      <section className={styles.description} style={{ maxWidth: `60%`, display: `flex`, flexDirection: `column`, gap: `0.5rem`, height: `10rem` }}>
        <h4>{selected.name}</h4>
        <p>{selected.description}</p>
      </section>
    </div>
  );
};
