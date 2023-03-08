import styles from "./footer.module.css"
import { Stack } from "@/components/Stack";
import Link from "next/link";
import tss from "./typewrite.module.css"

export const Footer: React.FC<{ className?: string }> = ({ className }) => (
  <Stack
    tag="footer"
    direction="row"
    justify="space-evenly"
    className={`${styles.footer} ${className} ${tss.fadeIn}`}
  >
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.print();
      }}
    >
      Generate PDF
    </a>
    <Link target="_blank" href="https://github.com/KonstantinSimeonov/cv2">
      Built with NextJS
    </Link>
  </Stack>
);
