import { Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Temperatura",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(67,56,202)",
      borderColor: "rgba(67,56,202)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(67,56,202)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: "rgba(67,56,202)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 20,
      data: [7, 8, 9, 10, 11, 12, 80],
    },
  ],
};

const Middle = (props) => {
  return (
    <div className="bg-white  shadow-sm w-6/12 mr-3 h-80 border rounded-xl border-gray-100">
      <div className="border p-2 border-gray-100 text-center">
        <p className="font-semibold font-xl">{props.title}</p>
      </div>
      <div className="p-2">
        <Line
          data={data}
          width={90}
          height={250}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
};

export default Middle;
