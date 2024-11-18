import Image from "next/image";
import styles from "./page.module.css";
import girlMaria from "./assets/images/girl_maria.jpg";
import coldHappiness from "./assets/images/cold_happiness.jpg";
import coldNight from "./assets/images/cold_night.jpg";
import whiteLoneliness from "./assets/images/white_loneliness.jpg";

import { Card, Button } from "./components/shared";

export default function Home() {
  return (
    <>
      <main>
        <section className={styles.top__main}>
          <div className={styles.top__main__content}>
            <div className={styles.top__main__content__name}>
              <h1>Marta Pérez</h1>
            </div>
            <div className={styles.top__main__content_navbar}>
              <ul className={styles.top__main__content_navbar_items}>
                <li className={styles.top__main__content_navbar_item}>
                  <a href="" className={styles.top__main__content_navbar_link}>
                    {" "}
                    Sobre mi
                  </a>
                </li>
                <li className={styles.top__main__content_navbar_item}>
                  <a href="" className={styles.top__main__content_navbar_link}>
                    {" "}
                    Exposición de invierno
                  </a>
                </li>
                <li className={styles.top__main__content_navbar_item}>
                  <a href="" className={styles.top__main__content_navbar_link}>
                    {" "}
                    Exposición de verano
                  </a>
                </li>
                <li className={styles.top__main__content_navbar_item}>
                  <a href="" className={styles.top__main__content_navbar_link}>
                    {" "}
                    Exposición de otoño
                  </a>
                </li>
                <li className={styles.top__main__content_navbar_item}>
                  <a href="" className={styles.top__main__content_navbar_link}>
                    {" "}
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.top__main__content__profession}>
              <div className={styles.top__main__content__profession__content}>
                {" "}
                <span className={styles.top__main__content__profession__title}>
                  Freelance photography
                </span>
                <Button
                  type={"outline"}
                  value={"Cuéntame tu proyecto"}
                ></Button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.presentation__card}>
          <div className={styles.presentation__card__text}>
            <h3 className={styles.presentation__card__text__title}>
              Hola, soy Maria
            </h3>
            <p>
              Soy una fotografa de paisajes y viajes, especializada en capturar
              los matices de las distintas estaciones del año
            </p>
            <p>
              He viajado mucho fotografiando las vistas mas impresionantes del
              mundo
            </p>
          </div>
          <div className={styles.presentation__card__image}>
            <Image src={girlMaria} alt="Maria Pérez" width={700} height={500} />
          </div>
        </section>
        <section className={styles.exposition__board}>
          <div className={styles.exposition__board__content}>
            <h3 className={styles.exposition__board__content__title}>
              La exposición de invierno
            </h3>
            <div className={styles.summer__exposition__cards}>
              <Card
                src={coldHappiness}
                alt={""}
                title={"Felicidad helada"}
                subtitle={"Una escena invernal captada a mediodía"}
                type={"group"}
              ></Card>
              <Card
                src={coldNight}
                alt={""}
                title={"Felicidad helada"}
                subtitle={"Una escena invernal captada a mediodía"}
                type={"group"}
              ></Card>
              <Card
                src={whiteLoneliness}
                alt={""}
                title={"Felicidad helada"}
                subtitle={"Una escena invernal captada a mediodía"}
                type={"group"}
              ></Card>
            </div>
          </div>
        </section>
        <section className={styles.exposition__board}>
          <div className={styles.exposition__board__content}>
            <h3 className={styles.exposition__board__content__title}>
              La exposición de verano
            </h3>
            <div className={styles.summer__exposition__cards}>
              <Card
                src={coldHappiness}
                alt={""}
                title={"Felicidad helada"}
                subtitle={"Una escena invernal captada a mediodía"}
                type={"group"}
              ></Card>
              <Card
                src={coldNight}
                alt={""}
                title={"Felicidad helada"}
                subtitle={"Una escena invernal captada a mediodía"}
                type={"group"}
              ></Card>
              <Card
                src={whiteLoneliness}
                alt={""}
                title={"Felicidad helada"}
                subtitle={"Una escena invernal captada a mediodía"}
                type={"group"}
              ></Card>
            </div>
          </div>
        </section>
        <section className={styles.exposition__board}>
          <div className={styles.exposition__board__content}>
            <div className={styles.summer__exposition__cards}>
              <Card
                src={coldHappiness}
                alt={""}
                title={"Felicidad helada"}
                subtitle={"Una escena invernal captada a mediodía"}
                type={"group"}
              ></Card>
              <Card
                src={coldNight}
                alt={""}
                title={"Felicidad helada"}
                subtitle={"Una escena invernal captada a mediodía"}
                type={"group"}
              ></Card>
              <Card
                src={whiteLoneliness}
                alt={""}
                title={"Felicidad helada"}
                subtitle={"Una escena invernal captada a mediodía"}
                type={"group"}
              ></Card>
            </div>
          </div>
        </section>{" "}
        <section className={styles.exposition__board}>
          <div className={styles.exposition__board__content}>
            <h3 className={styles.exposition__board__content__title}>
              La exposición de otoño
            </h3>
            <div className={styles.summer__exposition__cards}>
              <Card
                src={coldHappiness}
                alt={""}
                title={"Felicidad helada"}
                subtitle={"Una escena invernal captada a mediodía"}
                type={"group"}
              ></Card>
              <Card
                src={coldNight}
                alt={""}
                title={"Felicidad helada"}
                subtitle={"Una escena invernal captada a mediodía"}
                type={"group"}
              ></Card>
              <Card
                src={whiteLoneliness}
                alt={""}
                title={"Felicidad helada"}
                subtitle={"Una escena invernal captada a mediodía"}
                type={"group"}
              ></Card>
            </div>
          </div>
        </section>
      </main>
      <footer>hola soy el foottter</footer>
    </>
  );
}
