import { Stack } from "@/components/Stack"
import Link from "next/link"
import classes from "./footer.module.css"
import {data} from "@/data"

export const Footer: React.FC = () => (
  <Stack
    tag="footer"
    direction="row"
    justify="space-evenly"
    className={classes.footer}
  >
    <a
      href="#"
      className={classes.printLink}
      onClick={e => {
        e.preventDefault()
        window.print()
      }}
    >
      Generate PDF
    </a>
    <Link target="_blank" href="https://github.com/KonstantinSimeonov/cv2">
      Built with NextJS/AWS/Pulumi
    </Link>
    <Link className={classes.siteLink} target="_blank" href={data.site}>
      Hosted at konsimeonov.com
    </Link>
  </Stack>
)
