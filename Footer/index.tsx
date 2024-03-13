import React from "react";
import clsx from "clsx";
import styles from "./footer.module.scss";
import { fixString } from "@monta/router-js";
import { TUtils } from "@monta/utils";
import { Telegram, Aparat, Instagram, LinkedIn } from "@monta/icons";

const Footer = ({ auth }: { auth: TUtils["auth"] }) => {
  const hideB2b = Boolean(auth.useAuth()?.id);

  return (
    <footer className={styles["footer"]}>
      <div className="container">
        <div className={styles["footer__links"]}>
          <div className={styles["footer__links__group"]}>
            <p>ارتباط با ما</p>
            <ul>
              <li>
                <a href={fixString("/about-us/", "Landing")}>درباره ما</a>
              </li>
              <li>
                <a href={fixString("/contact-us/", "Landing")}>تماس با ما</a>
              </li>
              <li>
                <a href={fixString("/career", "LegacyApplication")}>
                  فرصت‌های شغلی
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["footer__links__group"]}>
            <p> همراه با ما </p>
            <ul>
              <li>
                <a href="https://blog.monta.ir/"> بلاگ</a>
              </li>
              <li>
                <a href={fixString("/faq/", "Landing")}> سوالات متداول </a>
              </li>
            </ul>
          </div>
          <div className={styles["footer__links__social"]}>
            <p> ما را دنبال کنید </p>
            <ul>
              <li>
                <a rel="nofollow" href="https://www.instagram.com/montaonline/">
                  <Instagram color="neutral-25" />
                </a>
              </li>
              <li>
                <a rel="nofollow" href="https://t.me/montaonline">
                  <Telegram color="neutral-25" />
                </a>
              </li>
              <li>
                <a rel="nofollow" href="https://www.aparat.com/monta">
                  <Aparat color="neutral-25" />
                </a>
              </li>
              <li>
                <a rel="nofollow" href="https://www.instagram.com/montaonline/">
                  <LinkedIn color="neutral-25" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["footer__e-namad"]}>
          <a href="https://trustseal.enamad.ir/?id=9502&amp;Code=xT1jrhnLAlu8vz1SbqsU">
            <img
              src="https://Trustseal.eNamad.ir/logo.aspx?id=9502&amp;Code=xT1jrhnLAlu8vz1SbqsU"
              alt="enamad"
              id="xT1jrhnLAlu8vz1SbqsU"
            />
          </a>
        </div>
        <a
          href={fixString("/school/", "Landing")}
          className={clsx(styles["footer__b2b"], hideB2b && styles["footer--hidden"])}
        >
          مدرسه، دبیر یا مشاور هستید؟
        </a>
        <div className={styles["footer__support"]}>
          <span>تلفن پشتیبانی : </span>
          <a href="tel:+982158162000" dir="ltr">
            021-58162000
          </a>
        </div>
        <hr />
        <p className={styles["footer__copyrights"]}>
          تمامی حقوق محفوظ و متعلق به شرکت ایده پردازان عصر نو است.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
