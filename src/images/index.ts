import type { StaticImageData } from "next/image"
import Algo from "./algo.png"
import Git from "./git.png"
import Haskell from "./haskell.png"
import Photo from "./konche-bonche.jpg"
import Mentor from "./mentoring.png"
import Node from "./node.png"
import Oop from "./oop.png"
import Linux from "./pemgvin.jpg"
import SQL from "./pgsql.png"
import React from "./react.png"
import TS from "./ts.png"
import Nextjs from "./nextjs.png"
import AWS from "./aws.png"

const ImgMap = {
  Algo,
  Git,
  Haskell,
  Photo,
  Mentor,
  Node,
  Oop,
  Linux,
  SQL,
  React,
  TS,
  Nextjs,
  AWS,
} satisfies Record<string, StaticImageData>

export default ImgMap
