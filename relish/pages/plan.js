import Footer from "../components/Footer";
import Nav from "../components/Nav";

//sanity
import { PortableText } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

//Get Sanity Data - using GROC
//header & footer data on each page, it is wet but next.js won't let you fetch on _app.js
const brandingDataQuery = `*[_type == "branding"]`;

const headerDataQuery = `*[_type == "header"]{
  headerText,
  }`;

const sponsorDataQuery = `*[_type == "sponsor"] | order(order asc) {
    name, 
  sponsorLogo, 
  alt
    }`;

const Plan = ({ sponsorData, brandingData, headerData }) => {
  return (
    <div className="plan">
      <Nav brandingData={brandingData} headerData={headerData} />
      <h3>Content here</h3>
      <Footer sponsorData={sponsorData} brandingData={brandingData} />
    </div>
  );
};

// Get Sanity Data here: add to this function, no need to create a new one.
//leave Branding as you cannot make this accessible through sanity in _app.js

export async function getStaticProps() {
  const brandingData = await getClient().fetch(brandingDataQuery);
  const headerData = await getClient().fetch(headerDataQuery);
  const sponsorData = await getClient().fetch(sponsorDataQuery);

  return { props: { brandingData, headerData, sponsorData } };
}

export default Plan;
