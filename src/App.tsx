import { YMaps, Map, Placemark, Polygon } from "react-yandex-maps";
import "./App.css";

export type MapType = "yandex#map" | "yandex#satellite" | "yandex#hybrid";

const mapState = {
  center: [55.608213, 37.409982],
  zoom: 1,
  type: "yandex#map" as MapType,
  //controls: ["zoomControl"],
  //controls: ["smallMapDefaultSet"],
};

function App() {
  return (
    <YMaps query={{ lang: "en_RU" }}>
      <Map
        state={mapState}
        width={"500px"}
        height={"500px"}
        options={{
          restrictMapArea: [
            [55.609351, 37.407907],
            [55.606438, 37.413007],
          ] as any,
          yandexMapDisablePoiInteractivity: false,
        }}
        //key={"70a532b0-1da2-4e80-9606-f240707235c4"}
      >
        <Polygon
          geometry={[
            [
              [55.608394, 37.408716],
              [55.608176, 37.408388],
              [55.608381, 37.40797],
              [55.608593, 37.408302],
            ],
          ]}
          properties={{
            hintContent: "Меня перетаскивать нельзя!",
            balloonContent: "Прямоугольник 1",
          }}
          options={{
            fillColor: "#7df9ff33",
            fillOpacity: 0.5,
            strokeColor: "#0000FF",
            strokeOpacity: 0.5,
            strokeWidth: 2,
            borderRadius: 6,
          }}
        />
        <Placemark
          geometry={[55.608338, 37.408283]}
          onClick={() => console.log(11111)}
          properties={{
            hintContent: "Это хинт",
            balloonContent: "Это балун",
          }}
          modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
        />
      </Map>
    </YMaps>
  );
}

export default App;
