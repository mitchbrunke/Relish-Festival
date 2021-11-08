import styles from "../styles/Innerpages.module.scss";

const InnerHeader = ({ pageName }) => {
  return (
    <div className={styles.header}>
      <h3>{pageName}</h3>
    </div>
  );
};

export default InnerHeader;
