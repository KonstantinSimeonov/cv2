import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import data from "@/data.json";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const int = { className: inter.className } as const;

export default function Home() {
  return (
    <>
      <Head>
        <title>Konstantin Simeonov</title>
        <meta name="description" content="Konstantin Simeonov resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={`${styles.stack}`}>
          <h1 {...int}>Konstantin Simeonov</h1>
          <div
            className={`${styles.cluster} ${styles.between} ${styles.padding}`}
          >
            {data.personalInfo.contacts.map((c) => (
              <Link
                key={c.url}
                className={`${styles.card} ${int.className}`}
                href={c.url}
              >
                <strong>{c.text} <span>-&gt;</span></strong>
              </Link>
            ))}
            <Image
              className={styles.photo}
              src="/konche-bonche.jpg"
              height="150"
              width="150"
              alt="pic of me"
            />
          </div>
        </header>
        <article>
          <h2 {...int}>Skills</h2>
          <ol className={styles.cluster}>
            {data.skills.map((s) => (
              <li
                key={s.name}
                className={`${styles.description} ${styles.stack}`}
                style={{ width: `10rem` }}
              >
                <div>
                  {s.img_url ? (
                    <Image
                      src={s.img_url}
                      height="45"
                      width="40"
                      alt="typescript"
                    />
                  ) : null}
                </div>
                <p>{s.name}</p>
              </li>
            ))}
          </ol>
        </article>
        <article>
          <h2 {...int}>Work Experience</h2>
          <div className={styles.split}>
            {(() => {
              const leakySod = (
                <div
                  style={{
                    minHeight: `3rem`,
                    flex: 1,
                    alignSelf: `center`,
                    justifySelf: `flex-end`,
                    width: `2px`,
                    background: `#ffb86c`,
                    height: `3rem`,
                  }}
                />
              );
              const we = data.workExperience.map((w, i) => (
                <div
                  key={w.location}
                  className={`${styles.work} ${styles.stack}`}
                >
                  {i % 2 === 1 ? leakySod : null}
                  <div>
                    <h4 {...int}>
                      {w.location} ({w.jobTitle})
                    </h4>
                    <time {...int}>
                      {w.from} - {w.to}
                    </time>{" "}
                  </div>
                  <ul className={`${styles.description} ${styles.stack}`}>
                    {w.descriptions.map((d) => (
                      <p key={d}>{d}</p>
                    ))}
                  </ul>
                  {i % 2 === 0 ? leakySod : null}
                </div>
              ));

              const [top, bottom] = we.reduce<React.ReactNode[][]>(
                (rl, x, i) => {
                  rl[i % 2].push(x);
                  return rl;
                },
                [[], []]
              );

              const cn = `${styles.cluster} ${styles.evenly} ${styles.start}`;

              return (
                <>
                  <div className={cn}>{top}</div>
                  <div className={`${styles.stack} ${styles.splitter}`}>
                    <time {...int}>2015</time>
                    <hr />
                    <time {...int} style={{ alignSelf: `flex-end` }}>
                      {new Date().getFullYear()}
                    </time>
                  </div>
                  <div className={cn}>{bottom}</div>
                </>
              );
            })()}
          </div>
        </article>
        <article>
          <h2 {...int}>Projects</h2>
          <div className={styles.grid}>
            {data.projects.map((p) => (
              <Link
                key={p.title}
                target="_blank"
                className={styles.card}
                href={p.links[0].url}
              >
                <h4 {...int}>
                  {p.title} <span>-&gt;</span>
                </h4>
                <p {...int}>{p.description}</p>
              </Link>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
