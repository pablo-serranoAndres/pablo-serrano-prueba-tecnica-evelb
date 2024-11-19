"use client";

import Image from "next/image";
import {
  Board,
  Button,
  NavBar,
  Drawer,
  ContactForm,
} from "./components/shared";
import girlMaria from "./assets/images/girl_maria.jpg";
import {
  ColdHappiness,
  WhiteLoneliness,
  ColdNight,
  IndianWaters,
  BrightestBlue,
  SummerPic,
  InfiniteOrange,
  Multicolor,
  PicturesqueHills,
} from "./assets/images/cards";
import {
  FaArrowRight,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <main>
        <section className={styles.top__main}>
          <div className={styles.top__main__content}>
            <div className={styles.top__main__content__name}>
              <h1>Marta Pérez</h1>
              <Drawer
                children={<ContactForm />}
                isOpen={open}
                onClose={() => setOpen(!open)}
              ></Drawer>
            </div>
            <NavBar />
            <div className={styles.top__main__content__profession}>
              <div className={styles.top__main__content__profession__content}>
                {" "}
                <span className={styles.top__main__content__profession__title}>
                  Freelance photography
                </span>
                <Button
                  type={"outline"}
                  value={"Cuéntame tu proyecto"}
                  onClick={() => setOpen(!open)}
                ></Button>
              </div>
            </div>
          </div>
        </section>
        <div id="about"></div>
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
          <div>
            <Image
              className={styles.presentation__card__image}
              src={girlMaria}
              alt="Maria Pérez"
              width={700}
              height={500}
            />
          </div>
        </section>
        <div id="winter"></div>
        <Board
          theme="cold"
          title={"Exposición de invierno"}
          cards={[ColdHappiness, WhiteLoneliness, ColdNight]}
        />
        <div id="summer"></div>
        <Board
          theme="warm"
          title={"Exposición de verano"}
          cards={[IndianWaters, BrightestBlue]}
        />
        <Board theme="warm" title={""} cards={[SummerPic]} />
        <div id="fall"></div>
        <Board
          theme="cold"
          title={"Exposición de otoño"}
          cards={[InfiniteOrange, Multicolor, PicturesqueHills]}
        />
      </main>
      <div id="contact"></div>
      <section className={styles.contact}>
        <div className={styles.contact__content}>
          <div className={styles.contact__cta}>
            <div
              className={styles.contact__cta__title}
              onClick={() => setOpen(!open)}
            >
              {"Contrataciones  "} <FaArrowRight />
            </div>

            <Button
              type={"outline"}
              value={"Contáctame"}
              onClick={() => setOpen(!open)}
            ></Button>
          </div>
          <div className={styles.contact__info}>
            <div className={styles.contact__info__icons}>
              <Link className={styles.contact__info__icon} href={""}>
                <FaLinkedin />
              </Link>
              <Link className={styles.contact__info__icon} href={""}>
                <FaInstagram />
              </Link>
              <Link className={styles.contact__info__icon} href={""}>
                <FaFacebookF />
              </Link>
              <Link className={styles.contact__info__icon} href={""}>
                <FaTwitter />
              </Link>
            </div>
            <span className={styles.contact__data}>hola@unsitiogenial.es</span>
            <span className={styles.contact__data}>123 456 789</span>
          </div>
        </div>
      </section>
      <section className={styles.main__footer}>
        <span className={styles.footer__text}>
          Copyright &copy; | Todos los derechos reservados. Creado por{" "}
          <a
            className={styles.footer__text__link}
            href="https://www.linkedin.com/in/pablo-serrano-andres-79716187/"
            target="_blank"
          >
            Pablo Serrano
          </a>
        </span>
      </section>
    </>
  );
}
