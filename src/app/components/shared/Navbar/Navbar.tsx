"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [visibleLinks, setVisibleLinks] = useState<string[]>([]);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    const links = ["about", "winter", "summer", "fall", "contact"];
    links.forEach((link, index) => {
      const timeout = setTimeout(() => {
        setVisibleLinks((prev) => [...prev, link]);
      }, index * 300);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  return (
    <>
      <nav className={`${styles.links} ${isSticky ? styles.sticky : ""}`}>
        {["about", "winter", "summer", "fall", "contact"].map((link, index) => (
          <Link
            key={link}
            className={`${styles.link} ${
              visibleLinks.includes(link) ? styles.visible : styles.hidden
            }`}
            href={`#${link}`}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </Link>
        ))}
      </nav>
    </>
  );
};

export { NavBar };
