type Gap = 0 | 0.5 | 1 | 2 | 4;

export type FlexProps = React.PropsWithChildren<{
  gap?: Gap
  tag?: keyof React.ReactHTML
  className?: string
  direction?: React.CSSProperties[`flexDirection`]
  justify?: React.CSSProperties[`justifyContent`]
  align?: React.CSSProperties[`alignItems`]
  sx?: Omit<
    React.CSSProperties,
    | keyof FlexProps
    | `display`
    | `flexDirection`
    | `justifyContent`
    | `alignItems`
  >
}>
