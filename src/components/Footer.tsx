import styles from "@/styles/Home.module.css";
import { Stack } from "@/components/Stack";
import Link from "next/link";

export const Footer = () => (
  <Stack
    tag="footer"
    direction="row"
    justify="space-evenly"
    className={styles.footer}
  >
    <a
      href="https://konsimeonov.lol"
      onClick={(e) => {
        e.preventDefault();
        import(`html2pdf.js`).then(({ default: html2pdf }) => {
          html2pdf()
            .set({
              margin: 0.5,
              filename: `Konstantin Simeonov Resume.pdf`,
              image: { type: `png`, quality: 10 },
              html2canvas: { scale: 2, windowWidth: 800 },
              jsPDF: { format: `A4` },
            })
            .from(document.body)
            .save();
        });
      }}
    >
      Generate PDF
    </a>
    <a href="https://konsimeonov.lol">The website is way cooler than the PDF</a>
    <Link target="_blank" href="https://github.com/KonstantinSimeonov/cv2">
      Built by me xD
    </Link>
  </Stack>
);
