//imports
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

//sanity
import { usePreviewSubscription, urlFor, PortableText } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

//components
import Footer from "../components/Footer";
import Nav from "../components/Nav";

//keen slider
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

//Get Sanity Data - using GROC
//header & footer data on each page, it is wet but next.js won't let you fetch on _app.js
const brandingDataQuery = `*[_type == "branding"]`;

const headerDataQuery = `*[_type == "header"]{
  headerText,
  }`;

const homeDataQuery = `*[_type == "home"]{
  title,
    meta, 
    heading, 
    text,
    sliderItem
  }`;

//the homepage function
export default function Home({ brandingData, homeData, headerData }) {
  //state
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 1,
    loop: true,

    breakpoints: {
      "(min-width: 500px)": {
        slidesPerView: 3,
      },
    },
  });

  //slide number generator
  let slideNumber = 0;

  return (
    <div className={styles.container}>
      <Head
      // Let's try and get this through sanity
      >
        <title>{homeData[0].title}</title>
        <meta name="description" content={homeData[0].meta} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav brandingData={brandingData} headerData={headerData} />

      <main className={styles.hero}>
        <h3>{homeData[0].heading}</h3>
        <button>Buy Tickets</button>
      </main>

      <section className={styles.promo}>
        <PortableText blocks={homeData[0].text} />
      </section>

      <section className={styles.slider}>
        <div ref={sliderRef} className={"keen-slider"}>
          {homeData[0].sliderItem.map((item) => (
            <div
              className={
                "keen-slider__slide" + " " + `number-slide${(slideNumber += 1)}`
              }
              id={styles.slider_slide}
              key={item._key}
            >
              {console.log(item.promo_image)}
              <h3>{item.prome_name}</h3>
              {item.promo_image.asset && (
                <Image
                  src={urlFor(item.promo_image).url()}
                  layout="fill"
                ></Image>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Get Sanity Data here: add to this function, no need to create a new one.
//leave Branding as you cannot make this accessible through sanity in _app.js

export async function getStaticProps() {
  const brandingData = await getClient().fetch(brandingDataQuery);
  const homeData = await getClient().fetch(homeDataQuery);
  const headerData = await getClient().fetch(headerDataQuery);

  return { props: { brandingData, homeData, headerData } };
}
