import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akarsh</h1>
        <p className={styles.description}>
          I'm a full-stack developer proficient in MERN Stack and currently looking for good opportunities in this field.
        </p>
        <a href="mailto:khandelwalakarsh8@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Akarsh.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
        style={{width:"25%",height:"30%"}}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
