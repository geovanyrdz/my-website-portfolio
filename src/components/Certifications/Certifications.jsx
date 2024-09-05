import React from "react";

import styles from "./Certifications.module.css";
import { getImageUrl } from "../../utils";

export const Certifications = () => {
  return (
    <section className={styles.container} id="Certifications">
      <h2 className={styles.title}>Relevant Courses/Certifications</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/Meta.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Meta Data Analyst Professional Certificate - Meta</h3>
              <p>
              Data Analytics, SQL, Python, Statistics, Data
              Management.
              </p>
            </div>
            <div className={styles.buttonContainer}>
                <a href="https://www.coursera.org/account/accomplishments/professional-cert/T4I8YFIPM96I" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
                View
                </a>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/UCDAVIS.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>SQL for Data Science - University of California, Davis</h3>
              <p>
                Data Extraction, Filtering, Aggregation, Grouping, Subqueries, Window Functions.
              </p>
            </div>
            <div className={styles.buttonContainer}>
                <a href="https://www.coursera.org/account/accomplishments/verify/LLPGKM3ZZNG8" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
                View
                </a>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/MQU.jpg")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Excel Skills for Data Analytics and Visualization - Macquarie University</h3>
              <p>
              Data Analysis, Data Visualization, Power Query, Power Pivot, Power Bi.
              </p>
            </div>
            <div className={styles.buttonContainer}>
                <a href="https://www.coursera.org/account/accomplishments/specialization/EA3GRC4UZRM7" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
                View
                </a>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/Imperial.jpg")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Mathematics for Machine Learning - Imperial College London</h3>
              <p>
              Linear Algebra, Multivariate Calculus, PCA.
              </p>
            </div>
            <div className={styles.buttonContainer}>
                <a href="https://www.coursera.org/account/accomplishments/specialization/4NRNZL8YVTX3" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
                View
                </a>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/Toastmasters.jpg")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Dynamic Leadership - Toastmasters International</h3>
              <p>
              Public Speaking, Story Telling, Leadership.
              </p>
            </div>
            <div className={styles.buttonContainer}>
                <a href="https://drive.google.com/file/d/1YB8NORBDfCk_XIJilbUBWU2eOiI6yLlX/view" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
                View
                </a>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/PMI.jpg")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Certified Associate in Project Management CAPM - Project Management Institute </h3>
              <p>
              Time Management, Stakeholder Management, Risk Management, Problem-solving.
              </p>
            </div>
            <div className={styles.buttonContainer}>
                <a href="https://drive.google.com/file/d/1HxNE2INsQa7CYGEyoqatoMeMPMdEtq-Y/view" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
                View
                </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
