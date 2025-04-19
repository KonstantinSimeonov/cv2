import * as React from "react";
import { FlexProps } from "./types";

export const Row: React.FC<FlexProps> = ({
  tag: Tag = `div`,
  direction = `row`,
  justify = `flex-start`,
  align = `center`,
  gap = 1,
  sx = {},
  ...rest
}) => (
  <Tag {...rest} style={{
    flexWrap: `wrap`,
      ...sx,
      display: `flex`,
      flexDirection: direction,
      gap: `${gap * 1.1}rem`,
      justifyContent: justify,
      alignItems: align
  }} />
)
