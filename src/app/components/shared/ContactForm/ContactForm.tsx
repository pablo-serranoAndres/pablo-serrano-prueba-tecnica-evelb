import { Button } from "..";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <h3>Cuéntame lo que quieres hacer!</h3>
      <form className={styles.contactForm__form}>
        <span className={styles.contactForm__label}>¿Cómo te llamas?</span>
        <input
          className={styles.contactForm__text}
          type="text"
          placeholder="Introduce tu nombre "
          id="name"
          name="name"
          required
        />
        <span className={styles.contactForm__label}>¿Cómo es tu correo?</span>
        <input
          className={styles.contactForm__text}
          type="email"
          placeholder="Introduce tu email"
          id="name"
          name="name"
          required
        />
        <span className={styles.contactForm__label}>
          Comentame mas en profundidad
        </span>
        <textarea
          className={styles.contactFrom__textarea}
          id="message"
          name="message"
          required
        ></textarea>

        <Button
          type={"outline"}
          value={"Enviar formulario"}
          onClick={() =>
            alert("Gracias por su interés, me pondré en contacto enseguida")
          }
        />
      </form>
    </div>
  );
};
export { ContactForm };
