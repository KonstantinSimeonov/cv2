import React from "react"
import classes from "./stack.module.css"
import {FlexProps} from "./types"

export const Stack: React.FC<FlexProps> = ({
  children,
  tag: Tag = `div`,
  direction = `column`,
  gap = 1,
  justify = `flex-start`,
  align = `stretch`,
  sx = {},
  className,
  ...rest
}) => (
  <Tag
    {...rest}
    className={`${classes.stack} ${className}`}
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
)
