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
            <h4 className={styles.card__title}>{`"${title}"`}</h4>
            <p className={styles.card__subtitle}>{subtitle}</p>
          </div>
        </div>
      );
    case "paar":
      return (
        <div className={styles.card}>
          <Image
            className={styles.card__image__paar}
            src={src}
            alt={alt}
            height={500}
            width={650}
          />
          <div className={styles.card__text}>
            <h4 className={styles.card__title}>{`"${title}"`}</h4>
            <p className={styles.card__subtitle}>{subtitle}</p>
          </div>
        </div>
      );
    case "single":
      return (
        <div className={styles.card}>
          <Image
            className={styles.card__image__single}
            src={src}
            alt={alt}
            height={600}
            width={1250}
          />{" "}
          <div className={styles.card__text}>
            <h4 className={styles.card__title}>{`"${title}"`}</h4>
            <p className={styles.card__subtitle}>{subtitle}</p>
          </div>
        </div>
      );
    default:
      break;
  }
};

export { Card };
