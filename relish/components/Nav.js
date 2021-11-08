//imports
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Nav.module.scss";

//icons
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

//sanity
import { urlFor } from "../lib/sanity";

const Nav = ({ brandingData, headerData }) => {
  //state to detect screen width
  const [width, setWidth] = useState("");
  //set state for Nav to open and close
  const [openNav, setNavOpen] = useState(false);
  //use router to be able to highlight the active link, a little hacky but it seems to be the better fix (Next.js things)
  const router = useRouter();

  //function toggle the nav

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  // const navToggler = () => {
  //   // width < 700 ? setNavOpen(!openNav) : console.log("desktop");
  // };

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
          <ul>
            <div
              className={styles.close_toggle}
              onClick={() => {
                setNavOpen(!openNav);
                console.log("clicked");
              }}
            >
              <HighlightOffIcon
                className={styles.toggle}
                fontSize="large"
                onClick={() => {
                  setNavOpen(!openNav);
                }}
              />
            </div>

            <Link href="/">
              <a className={router.pathname == "/" ? "active" : ""}>
                <li>home</li>
              </a>
            </Link>
            <Link href="/program">
              <a className={router.pathname == "/program" ? "active" : ""}>
                <li>program</li>
              </a>
            </Link>
            <Link href="https://www.visitfrasercoast.com/">
              <a target="_blank">
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
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
