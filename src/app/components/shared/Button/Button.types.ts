import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  type: "outline" | "filled";
  href?: string;
  value: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLInputElement>;
}

export default ButtonProps;
