import { Map, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Markers from "./Markers";

const MapView = () => {
  return (
    <Map center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers />
    </Map>
  );
};

export default MapView;
