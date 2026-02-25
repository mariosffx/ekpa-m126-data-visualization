import type { PartialProps } from "@/types/partials";

const navbar: PartialProps = {
  brand: "M126 Data Visualization - Marios Toparopoulos",
  items: [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Visualization Images",
      href: "/visualization-images"
    },
    {
      text: "Animated Shapes",
      href: "/animated-shapes"
    },
    {
      text: "Credits",
      href: "/credits"
    }
  ]
};

export { navbar };
