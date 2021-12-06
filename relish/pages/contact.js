import Footer from "../components/Footer";
import InnerHeader from "../components/innerHeader";
import Nav from "../components/Nav";
import Link from "next/link";
//sanity
import { PortableText } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

//formspree
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

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

const Contact = ({ sponsorData, brandingData, headerData }) => {
  const [state, handleSubmit] = useForm("mbjqkeva");
  if (state.succeeded) {
    return (
      <p>
        Thanks for reaching out, we will be in touch shortly! Either refresh the
        page or head back to the homepage.{" "}
        <Link href="/contact">
          {" "}
          <a>here</a>
        </Link>
      </p>
    );
  }

  return (
    <div className="contact">
      <Nav brandingData={brandingData} headerData={headerData} />
      <InnerHeader pageName="Contact Us" />

      <form onSubmit={handleSubmit}>
        <div className="top">
          <label>Your Name</label>
          <input id="name" type="text" name="name" />

          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <label htmlFor="message">Your message</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>

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

export default Contact;
