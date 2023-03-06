declare module "html2pdf.js" {
  type Html2PDF = {
    set: (opts: {
      margin?: number;
      filename?: string;
      image?: { type?: `jpeg` | `png` | `webp`; quality?: number };
      html2canvas?: { scale?: number; windowWidth?: number };
      jsPDF?: { format?: string };
    }) => Html2PDF;
    from: (element: HTMLElement) => Html2PDF;
    save: () => void | Promise<void>;
  };

  export default function html2pdf(): Html2PDF {}
}
