import * as React from "react";
import { Inter } from "@next/font/google";

type TextProps = {
  tag?: keyof React.ReactHTML;
};

const inter = Inter({ subsets: ["latin"] });

export const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  tag: Tag = `p`,
}) => <Tag className={inter.className}>{children}</Tag>;
