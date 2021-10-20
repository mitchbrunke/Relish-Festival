//imports
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Nav.module.scss";

//icons
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//sanity
import { usePreviewSubscription, urlFor, PortableText } from "../lib/sanity";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ brandingData, headerData }) => {
  //set state for Nav to open and close
  const [openNav, setNavOpen] = useState(false);
  //use router to be able to highlight the active link, a little hacky but it seems to be the better fix (Next.js things)
  const router = useRouter();
  console.log(brandingData);

  return (
    <>
      <div id={styles.headerNotice}>
        <h6>{headerData[0].headerText}</h6>
      </div>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image
                src={urlFor(brandingData[0].logo).url()}
                height={150}
                width={200}
                layout="intrinsic"
              ></Image>
            </a>
          </Link>
        </div>

        <nav className={openNav ? styles.open_nav : styles.nav}>
          <ul
            onClick={() => {
              setNavOpen(!openNav);
              console.log("clicked");
            }}
          >
            <div
              className={styles.close_toggle}
              onClick={() => {
                setNavOpen(!openNav);
                console.log("clicked");
              }}
            >
              <p>Close</p>
            </div>

            <Link href="/">
              <a className={router.pathname == "/" ? "active" : ""}>
                <li>home</li>
              </a>
            </Link>
            <Link href="/about">
              <a className={router.pathname == "/about" ? "active" : ""}>
                <li>about</li>
              </a>
            </Link>
            <Link href="/plan">
              <a className={router.pathname == "/plan" ? "active" : ""}>
                <li>plan your visit</li>
              </a>
            </Link>
            <Link href="/contact">
              <a className={router.pathname == "/contact" ? "active" : ""}>
                <li>contact us</li>
              </a>
            </Link>
          </ul>
          <Link href={brandingData[0].tickets}>
            <a target="_blank">
              <button className={styles.navBtn}>Buy Tickets</button>
            </a>
          </Link>
        </nav>

        {/* Toggle to open and close the nav */}

        <div className={styles.toggle}>
          <MenuIcon
            className={styles.toggle}
            fontSize="large"
            onClick={() => {
              setNavOpen(!openNav);
              console.log("clicked");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
