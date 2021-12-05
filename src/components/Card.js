import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Style="text-gray-200"

const arrayIcon = [
  <DeviceThermostatIcon className={Style} />,
  <SensorsOutlinedIcon className={Style} />,
  <HealthAndSafetyOutlinedIcon className={Style} />,
  <LocationOnIcon className={Style}/>,
];

const Color = [
  "from-red-700 to-red-500",
  "from-blue-700 to-blue-500",
  "from-green-700 to-green-500",
  "from-yellow-700 to-yellow-500"
];

const Card = (props) => {
  var temperatura = props.temperatura;
  temperatura = temperatura * 2.5;
  var cantidad_devices = props.cantidad_devices;
  var gas = props.gas
  var estado = props.estado


  return (
    <div
      className={`transform hover:scale-110 cursor-pointer transition delay-50 w-3/12 p-3 shadow-xl border rounded-xl bg-gradient-to-r ${
        Color[props.icon]
      }`}
    >
      <div className="flex justify-between">
        <div></div>
        <div className="w-8 h-8 md:w-11 md:h-6 flex items-center justify-center bg-gray-300 rounded-xl m-4 bg-opacity-30">
          {arrayIcon[props.icon]}
        </div>
      </div>
      <p className="text-gray-200 text-lg font-semibold">{props.title}</p>
      <p className="text-gray-50 text-2xl font-semibold">{props.temperatura}</p>
      <p className="text-gray-50 text-2xl font-semibold">
        {props.cantidad_devices}
      </p>
      <p className="text-gray-50 text-2xl font-semibold">{props.gas}</p>

      <p className="text-gray-50 text-2xl font-semibold">{props.estado}</p>
    </div>
  );
};

export default Card;
