import { StaticImageData } from "next/image";

interface CardProps {
  type: "group" | "paar" | "single";
  src: StaticImageData | string;
  alt: string;
  title: string;
  subtitle: string;
}

export default CardProps;
