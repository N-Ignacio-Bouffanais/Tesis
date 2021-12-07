import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpacityIcon from "@mui/icons-material/Opacity";

const Style="text-gray-200"

const arrayIcon = [
  <SensorsOutlinedIcon className={Style} />,
  <DeviceThermostatIcon className={Style} />,
  <OpacityIcon className={Style} />,
  <HealthAndSafetyOutlinedIcon className={Style} />,
  <HealthAndSafetyOutlinedIcon className={Style} />,
  <LocationOnIcon className={Style} />,
];

const Color = [
  "from-green-700 to-green-500",
  "from-red-700 to-red-500",
  "from-blue-700 to-blue-500",
  "from-pink-700 to-pink-500",
  "from-indigo-700 to-indigo-500",
  "from-yellow-700 to-yellow-500"
];

const Card = (props) => {
  var temperatura = props.temperatura;
  temperatura = temperatura * 2.5;
  var dispositivos = props.dispositivos;
  var estado = props.estado


  return (
    <div
      className={`transform hover:scale-110 cursor-pointer transition delay-50 w-2/12 mt-1  shadow-xl border rounded-xl bg-gradient-to-r ${
        Color[props.icon]
      }`}
    >
      <div className="flex justify-between">
        <div></div>
        <div className="w-8 h-8 md:w-11 md:h-6 flex items-center justify-center bg-gray-300 rounded-xl m-4 bg-opacity-30">
          {arrayIcon[props.icon]}
        </div>
      </div>
      <p className="text-gray-200 text-lg font-semibold ml-3">{props.title}</p>
      <p className="text-gray-50 text-2xl font-semibold ml-3">
        {props.temperatura}
      </p>
      <p className="text-gray-50 text-2xl font-semibold ml-3">
        {props.humedad}
      </p>
      <p className="text-gray-50 text-2xl font-semibold ml-3">
        {props.dispositivos}{" "}
      </p>
      <p className="text-gray-50 text-2xl font-semibold ml-3">{props.C02}</p>
      <p className="text-gray-50 text-2xl font-semibold ml-3">{props.butano}</p>
      <p className="text-gray-50 text-2xl font-semibold ml-3">{props.estado}</p>
    </div>
  );
};

export default Card;
