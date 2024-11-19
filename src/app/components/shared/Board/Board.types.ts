import CardProps from "../../shared/Card/Card.types";

interface BoardProps {
  title: string;
  theme: "warm" | "cold";
  cards: CardProps[];
}

export default BoardProps;
