import { Card } from "../../shared";
import CardProps from "../../shared/Card/Card.types";
import BoardProps from "./Board.types";
import styles from "./Board.module.css";
const Board = ({ title, cards, theme }: BoardProps) => {
  let type: CardProps["type"];

  cards.length;

  if (cards.length === 1) type = "single";
  if (cards.length === 2) type = "paar";
  if (cards.length > 2) type = "group";

  type;
  cards[0].title;

  return (
    <section className={styles[`exposition__board__${theme}`]}>
      <div className={styles.exposition__board__content}>
        {title && (
          <h3 className={styles.exposition__board__content__title}>{title}</h3>
        )}
        <div className={styles.exposition__cards}>
          {cards.map((card) => (
            <Card
              key={card.title}
              type={type}
              src={card.src}
              alt={card.alt}
              title={card.title}
              subtitle={card.subtitle}
            ></Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Board };
