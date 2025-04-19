import { Stack } from "@/components/Stack"
import Link from "next/link"
import classes from "./footer.module.css"

export const Footer: React.FC<{ className?: string }> = ({ className }) => (
  <Stack
    tag="footer"
    direction="row"
    justify="space-evenly"
    className={`${classes.footer} ${className}`}
  >
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        window.print()
      }}
    >
      Generate PDF
    </a>
    <Link target="_blank" href="https://github.com/KonstantinSimeonov/cv2">
      Built with NextJS
    </Link>
  </Stack>
)
