import * as React from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css"

type TextProps = {
  tag?: keyof React.ReactHTML;
  variant?: `inter` | `description`
  sx?: React.CSSProperties
};

const inter = Inter({ subsets: ["latin"] });

export const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  tag: Tag = `p`,
  variant = `inter`,
  sx
}) => <Tag className={variant === `inter` ? inter.className : styles.description} style={sx}>{children}</Tag>;
