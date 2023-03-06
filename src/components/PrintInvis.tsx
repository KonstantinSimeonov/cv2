import Link from "next/link";
import React from "react";
import styles from "./print-invis.module.css";

export const PrintInvis: React.FC<
  React.PropsWithChildren<{ link?: boolean }>
> = ({ children, link = true }) => (
  <>
    {React.Children.map(children, (c) =>
      React.isValidElement(c)
        ? {
            ...c,
            props: {
              ...c.props,
              className: `${c.props.className} ${styles.invisPrint}`,
            },
          }
        : c
    )}
    {link ? (
      <Link className={styles.visitSiteLink} href="https://konsimeonov.lol">
        If you are interested in hiring me, please visit my website
        https://konsimeonov.lol - it contains a lot more detailed information on
        my skills, experience and projects!
      </Link>
    ) : null}
  </>
);
