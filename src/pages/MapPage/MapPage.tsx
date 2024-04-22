import { Map } from "../../components/Map";
import styles from "./MapPage.module.scss";

export const MapPage = () => {
  return (
    <div className={styles.root}>
      <Map />
    </div>
  );
};
