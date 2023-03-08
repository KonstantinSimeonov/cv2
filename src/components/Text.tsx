import * as React from "react";
import { Inter } from "@next/font/google";
import classes from "@/styles/Home.module.css"
import typewriteStyles from "./typewrite.module.css"

type TextProps = {
  tag?: keyof React.ReactHTML;
  variant?: `inter` | `description`
  typed?: boolean
  sx?: React.CSSProperties
};

const inter = Inter({ subsets: ["latin"] });

export const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  tag: Tag = `p`,
  typed = false,
  variant = `inter`,
  sx
}) => {
  const classNames = [
    typewriteStyles.text,
    variant === `inter` ? inter.className : classes.description,
    typed ? typewriteStyles.typed : ``
  ].filter(Boolean).join(` `)

  const styles: React.CSSProperties = {
    ...sx,
    ...(`h1 h2`.includes(Tag) ? { animationDuration: `2s`, animationTimingFunction: `steps(70, end)` } : {})
  }

  return (<Tag className={classNames} style={styles}>{children}</Tag>);
}

