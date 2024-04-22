import {
  YMaps,
  Map as MapComponent,
  Polygon,
  Placemark,
} from "@pbe/react-yandex-maps";

import { useState } from "react";
import { Modal } from "../Modal/Modal";

import styles from "./Map.module.scss";

export const Map = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.root}>
      <YMaps>
        <MapComponent
          width={"100%"}
          height={"auto"}
          className={styles.map}
          defaultState={{
            center: [55.60828, 37.409761],
            zoom: 18,
          }}
          defaultOptions={{
            restrictMapArea: true,
          }}
        >
          <Polygon
            geometry={[
              [
                [55.60838, 37.407975],
                [55.608592, 37.408302],
                [55.608396, 37.408714],
                [55.60818, 37.408388],
              ],
            ]}
          />
          <Placemark
            geometry={[55.608378, 37.408336]}
            properties={{
              iconContent: "10",
            }}
            options={{
              preset: "islands#circleIcon",
              //iconImageSize: [48, 48],
            }}
            onClick={() => setVisible(true)}
          />
        </MapComponent>
      </YMaps>
      {visible && (
        <Modal onClose={() => setVisible(false)}>Привет, тут мой контент</Modal>
      )}
    </div>
  );
};

export default Map;
