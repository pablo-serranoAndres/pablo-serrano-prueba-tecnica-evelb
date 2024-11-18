import styles from "./Button.module.css";
import ButtonProps from "./Button.types";

const Button = ({ type, value, href, onClick, children }: ButtonProps) => {
  return href ? (
    <a href="">{children}</a>
  ) : (
    <input
      className={styles.button}
      type="button"
      value={value}
      onClick={onClick}
    />
  );
};
export { Button };
