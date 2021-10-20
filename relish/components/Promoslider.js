import styles from "../styles/PSlider.module.scss";
import Image from "next/image";
import Link from "next/link";
//sanity
import { urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
//keen slider
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
//font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PromoSlider = ({ homeData }) => {
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 1,
    loop: true,

    breakpoints: {
      "(min-width: 700px)": {
        slidesPerView: 2,
      },
      "(min-width: 1000px)": {
        slidesPerView: 2.5,
      },
    },
  });

  //slide number generator
  let slideNumber = 0;

  return (
    <section className={styles.slider}>
      <h3>Program</h3>
      <div ref={sliderRef} className={"keen-slider"}>
        {homeData[0].sliderItem.map((item) => (
          <div
            className={
              "keen-slider__slide" + " " + `number-slide${(slideNumber += 1)}`
            }
            id={styles.slider_slide}
            key={item._key}
          >
            <Link href={item.promo_link}>
              <a>
                <h3>{item.prome_name}</h3>
              </a>
            </Link>

            {item.promo_image.asset && (
              <Image src={urlFor(item.promo_image).url()} layout="fill"></Image>
            )}
          </div>
        ))}
      </div>
      <p>
        Swipe
        <FontAwesomeIcon id={styles.arrow} icon={faArrowRight} />
      </p>
    </section>
  );
};

export default PromoSlider;
