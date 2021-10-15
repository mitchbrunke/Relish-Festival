//imports
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";

//site layout function, add anything you want to appear on every page
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
