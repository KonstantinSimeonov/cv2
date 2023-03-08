import ExportedImage from "next-image-export-optimizer"
import Link from "next/link"
import ImgMap from "@/images"
import * as React from "react"
import { Stack } from "@/components/Stack"
import { Text } from "@/components/Text"
import styles from "./personal-info.module.css"
import animation from "@/styles/animation.module.css"

export const PersonalInfo: React.FC<{
  contacts: readonly {
    url: string
    text: string
  }[]
}> = ({ contacts }) => (
  <Stack
    className={animation.fadeIn}
    direction="row"
    justify="space-between"
    sx={{ flexWrap: `nowrap` }}
  >
    <Stack align="flex-start" gap={0.5}>
      {contacts.map(({ url, text }) => (
        <Link className={styles.link} key={url} target="_blank" href={url}>
          <Text>{text}</Text>
        </Link>
      ))}
    </Stack>
    <Stack className={`${styles.photo}`}>
      <ExportedImage
        src={ImgMap.Photo}
        height="150"
        width="150"
        alt="pic of me"
      />
    </Stack>
  </Stack>
)
