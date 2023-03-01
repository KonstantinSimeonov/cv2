import React from "react";

type StackProps = {
  direction?: React.CSSProperties[`flexDirection`];
  gap?: 0.5 | 1 | 2 | 3;
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
  align = `center`,
  sx = {},
  className
}) => (
  <Tag
    className={className}
    style={{
      ...sx,
      display: `flex`,
      flexWrap: `wrap`,
      flexDirection: direction,
      gap: `${gap}rem`,
      justifyContent: justify,
      alignItems: align,
    }}
  >
    {children}
  </Tag>
);
