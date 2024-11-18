import CardProps from "./Card.types";
import Image from "next/image";
import styles from "./Card.module.css";

const Card = ({ src, alt, title, subtitle, type }: CardProps) => {
  switch (type) {
    case "group":
      return (
        <div className={styles.card}>
          <Image
            className={styles.card__image}
            src={src}
            alt={alt}
            height={450}
            width={400}
          />
          <div className={styles.card__text}>
            <h2 className={styles.card__title}>
              <b>{`"${title}"`}</b>
            </h2>
            <span className={styles.card__subtitle}>{subtitle}</span>
          </div>
        </div>
      );

    case "paar":
      <div>
        <p>DOS</p>
      </div>;
      break;
    case "single":
      <div>
        <p>UNO</p>
      </div>;
      break;

    default:
      break;
  }
};

export { Card };
