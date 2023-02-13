import styles from "@/styles/Tooltip.module.css"
import s2 from "@/styles/Home.module.css"
import React from "react"

export const Tooltip: React.FC<React.PropsWithChildren<{ content: string }>> = ({ content, children }) => (
  <div className={styles["item-hints"]}>
    <div className={styles.hint} data-position="4">
      <div style={{ zIndex: -1 }}>
      {children}
      </div>
      <div className={styles["hint-content"] + ` ` + styles["do--split-children"] + ` ` + s2.description}>
        <p className={s2.opaque}>{content}</p>
      </div>
    </div>
  </div>
)
