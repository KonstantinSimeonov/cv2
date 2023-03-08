import * as React from "react"
import { Inter } from "@next/font/google"
import classes from "@/styles/Home.module.css"
import animation from "@/styles/animation.module.css"

type TextProps = {
  tag?: keyof React.ReactHTML
  variant?: `inter` | `description`
  typed?:
    | boolean
    | Partial<
        Pick<
          React.CSSProperties,
          `animationDuration` | `animationTimingFunction`
        >
      >
  sx?: React.CSSProperties
}

const inter = Inter({ subsets: ["latin"] })

export const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  tag: Tag = `p`,
  typed = false,
  variant = `inter`,
  sx,
}) => {
  const classNames = [
    `text`,
    variant === `inter` ? inter.className : classes.description,
    typed ? animation.typed : ``,
  ]
    .filter(Boolean)
    .join(` `)

  const styles: React.CSSProperties = {
    ...sx,
    ...(`h1h2`.includes(Tag)
      ? { "--typing-duration": `2s`, "--typing-step": `100` }
      : {}),
  }

  return (
    <Tag className={classNames} style={styles}>
      {children}
    </Tag>
  )
}
