import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/UTTEXAS2.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>M.S. In Data Science - The University of Texas at Austin - Ongoing</h3>
              <p>
                Computer Science Top-Ranked U.S. University.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ITESM2.jpg")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>B.S. Industrial and Systems Engineering - Tecnológico de Monterrey - 2018</h3>
              <p>
                Exchange program in Business Administration at Montreal, Canada.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/translate.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Languages</h3>
              <p>
                English - Professional Proficiency
              </p>
              <p>
                Spanish - Native
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
