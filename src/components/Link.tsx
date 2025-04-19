import * as React from "react";
import NextLink from "next/link";
import styles from "./projects.module.css";
import {Text} from "./Text";

export const ExternalLink: React.FC<React.PropsWithChildren<{
  href: string
  title?: string
}>> = (props) => (
  <NextLink title={props.title} href={props.href} className={styles.link}>
    <Text variant="inter" sx={{ fontWeight: "bold" }}>
    {props.children} <span>-&gt;</span>
</Text>
  </NextLink>
)
