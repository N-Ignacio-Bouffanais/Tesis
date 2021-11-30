import { MapContainer, TileLayer, Marker} from "react-leaflet";
import { IconLocation } from "./iconLocation";
import "leaflet/dist/leaflet.css";

const position = [-33.6167, -70.5667];

const Map = () => {
  return (
  <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={IconLocation}>
    </Marker>
  </MapContainer>
  );
};

export default Map;
