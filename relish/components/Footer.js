import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/footer.module.scss";
//sanity
import { urlFor } from "../lib/sanity";
import { PortableText } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
import { style } from "@mui/system";

const Footer = ({ sponsorData, brandingData }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.sponsors}>
        <h3 className={styles.footerHead}>Our Sponsors</h3>
        {sponsorData.map((sponsor) => (
          <div className={styles.sponsor} key={sponsor.name}>
            <Image
              className={styles.s_image}
              src={urlFor(sponsor.sponsorLogo).format("webp").fit("clip").url()}
              layout="intrinsic"
              width={400}
              height={150}
            ></Image>
          </div>
        ))}
      </div>
      <hr />

      <div className={styles.btm}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image
                src={urlFor(brandingData[0].logo).format("webp").url()}
                height={150}
                width={200}
                layout="intrinsic"
              ></Image>
            </a>
          </Link>
        </div>

        <p>&copy; Fraser Coast Tourism & Events</p>
        <PortableText blocks={brandingData[0].Butchella} />
      </div>
    </div>
  );
};

export default Footer;
