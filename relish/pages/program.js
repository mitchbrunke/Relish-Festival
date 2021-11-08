//components
import Footer from "../components/Footer";
import Nav from "../components/Nav";

//react/next tings
import Image from "next/image";
import styles from "../styles/Innerpages.module.scss";

//sanity
import { PortableText, urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
import InnerHeader from "../components/innerHeader";

//Get Sanity Data - using GROC
//header & footer data on each page, it is wet but next.js won't let you fetch on _app.js
const brandingDataQuery = `*[_type == "branding"]`;

const headerDataQuery = `*[_type == "header"]{
  headerText,
  }`;

const programDataQuery = `*[_type == "program"] | order(order asc) {
    name,
    progItem, 
    info
  }`;

const sponsorDataQuery = `*[_type == "sponsor"] | order(order asc) {
    name, 
  sponsorLogo, 
  alt
    }`;

const About = ({ sponsorData, brandingData, programData, headerData }) => {
  console.log(programData);
  return (
    <div className="about">
      <Nav brandingData={brandingData} headerData={headerData} />

      <InnerHeader pageName="Program" />

      {programData.map((item) => (
        <div className={styles.progItem} key={item.name}>
          <div className={styles.text}>
            <h3>{item.name}</h3>
            <p>
              <PortableText blocks={item.info} />
            </p>
          </div>
          <div className="image">
            <Image
              src={urlFor(item.progItem).url()}
              width={300}
              height={300}
              layout="intrinsic"
            ></Image>
          </div>
        </div>
      ))}

      <hr />

      <Footer sponsorData={sponsorData} brandingData={brandingData} />
    </div>
  );
};

// Get Sanity Data here: add to this function, no need to create a new one.
//leave Branding as you cannot make this accessible through sanity in _app.js

export async function getStaticProps() {
  const brandingData = await getClient().fetch(brandingDataQuery);
  const headerData = await getClient().fetch(headerDataQuery);
  const programData = await getClient().fetch(programDataQuery);
  const sponsorData = await getClient().fetch(sponsorDataQuery);

  return { props: { brandingData, headerData, programData, sponsorData } };
}

export default About;
