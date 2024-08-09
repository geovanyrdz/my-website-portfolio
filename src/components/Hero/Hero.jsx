import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Geovany</h1>
        <p className={styles.description}>
        Result-driven professional with a strong focus on Data Science, Data Analysis, Online Marketing, and Business Optimization.
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:gio_rdz.27@hotmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a className={styles.contactBtn} href="/Resume-ER.pdf" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
