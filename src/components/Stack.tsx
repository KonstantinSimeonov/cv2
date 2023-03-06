import React from "react";
import styles from "./stack.module.css"

type StackProps = {
  direction?: React.CSSProperties[`flexDirection`];
  gap?: 0 | 0.5 | 1 | 2 | 3;
  justify?: React.CSSProperties[`justifyContent`];
  align?: React.CSSProperties[`alignItems`];
  tag?: keyof React.ReactHTML;
  className?: string
  sx?: Omit<React.CSSProperties, keyof StackProps | `display` | `flexDirection` | `justifyContent` | `alignItems`>
};

export const Stack: React.FC<React.PropsWithChildren<StackProps>> = ({
  children,
  tag: Tag = `div`,
  direction = `column`,
  gap = 1,
  justify = `flex-start`,
  align = `stretch`,
  sx = {},
  className
}) => (
  <Tag
    className={`${styles.stack} ${className}`}
    style={{
      flexWrap: `wrap`,
      ...sx,
      display: `flex`,
      flexDirection: direction,
      gap: `${gap * 1.1}rem`,
      justifyContent: justify,
      alignItems: align,
    }}
  >
    {children}
  </Tag>
);
