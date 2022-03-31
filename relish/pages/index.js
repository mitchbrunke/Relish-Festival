//imports
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

//sanity
import { PortableText } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

//components
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import PromoSlider from "../components/Promoslider";

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

const sponsorDataQuery = `*[_type == "sponsor"] | order(order asc) {
    name, 
  sponsorLogo, 
  alt
    }`;

export default function Home({
  brandingData,
  homeData,
  headerData,
  sponsorData,
}) {
  //state

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

      <section className={styles.hero}>
        <h3>{homeData[0].heading}</h3>
      </section>

      <hr />

      <section className={styles.promo}>
        <PortableText blocks={homeData[0].text} />
      </section>

      <hr />

      <PromoSlider homeData={homeData} />

      <Footer sponsorData={sponsorData} brandingData={brandingData} />
    </div>
  );
}

// Get Sanity Data here: add to this function, no need to create a new one.
//leave Branding as you cannot make this accessible through sanity in _app.js

export async function getStaticProps() {
  const brandingData = await getClient().fetch(brandingDataQuery);
  const homeData = await getClient().fetch(homeDataQuery);
  const headerData = await getClient().fetch(headerDataQuery);
  const sponsorData = await getClient().fetch(sponsorDataQuery);

  return { props: { brandingData, homeData, headerData, sponsorData } };
}
