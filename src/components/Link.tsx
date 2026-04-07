import * as React from "react"
import NextLink from "next/link"
import styles from "./projects.module.css"
import { Text } from "./Text"

export const ExternalLink: React.FC<
  React.PropsWithChildren<{
    href: string
    title?: string
  }>
> = props => (
  <NextLink target="_blank" href={props.href} className={styles.link}>
    <Text title={props.title} variant="inter" sx={{ fontWeight: "bold", textDecoration: "underline" }}>
      {props.children}
    </Text>
  </NextLink>
)
