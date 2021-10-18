//imports
import "../styles/globals.scss";

//site layout function, add anything you want to appear on every page
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
