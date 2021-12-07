import Layout from "../components/Layout";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import Card from "components/Card";
import { Line } from "react-chartjs-2";
import React, { useState, Fragment } from "react";

const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.setMaxListeners(200);

var mqtt = require("mqtt");
var options = {
  protocol: "ws",
  clientId: "b0908853",
};
var client = mqtt.connect("ws://192.168.18.33:9001", options);

// is the MQTT topic
client.subscribe("humedad");
client.subscribe("temperatura");
client.subscribe("butano");
client.subscribe("C02");

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

const dashboard = () => {
  // Sets default React state
  const [mesg, setMesg] = useState(
    <Fragment>
      <em>sin datos</em>
    </Fragment>
  );
  const [mesg2, setMesg2] = useState(
    <Fragment>
      <em>sin datos</em>
    </Fragment>
  );
  const [mesg3, setMesg3] = useState(
    <Fragment>
      <em>sin datos</em>
    </Fragment>
  );
  const [mesg4, setMesg4] = useState(
    <Fragment>
      <em>sin datos</em>
    </Fragment>
  );
  var res;
  var num;
  var res2;
  var num2;
  var res3;
  var num3;
  var res4;
  var num4;

  client.on("message", function (topic, message) {
    if (topic === "temperatura") {
      res = message.toString();
      num = parseFloat(res);
      console.log(num);
      setMesg(res);
    }
    if (topic === "humedad") {
      res2 = message.toString();
      num2 = parseFloat(res2);
      console.log(num2);
      setMesg2(res2);
    }
    if (topic === "butano") {
      res3 = message.toString();
      num3 = parseFloat(res3);
      console.log(num3);
      setMesg3(res3);
    }
    if (topic === "C02") {
      res4 = message.toString();
      num4 = parseFloat(res4);
      console.log(num4);
      setMesg4(res4);
    }
    //client.end();
  });

  return (
    <div>
      <Layout></Layout>
      <div className="flex">
        <Sidebar />
        <div className="w-screen">
          <Header />
          <div className="bg-gray-200 h-full ">
            <div className="flex p-2 space-x-3 ">
              <Card
                title="Cantidad de dispositivos"
                dispositivos={5}
                icon={0}
              />
              <Card title="Sensor de Temperarura" temperatura={mesg} icon={1} />
              <Card title="Sensor de Humedad" humedad={mesg2} icon={2} />
              <Card title="Sensor de Gas C02" C02={mesg3} icon={3} />
              <Card title="Sensor de Gas Butano" butano={mesg4} icon={4} />
              <Card title="Estado del GPS" estado={"Activo"} icon={5} />
            </div>
            <div className="flex ml-2 mt-2 space-x-1 mr-2">
              <div className="bg-white  shadow-sm w-6/12 mr-3 h-80 border rounded-xl border-gray-100">
                <div className="border p-2 border-gray-100 text-center">
                  <p className="font-semibold font-xl">Sensor de temperatura</p>
                </div>
                <div className="p-2">
                  <Line
                    data={data}
                    width={90}
                    height={250}
                    options={{ maintainAspectRatio: false }}
                  />
                </div>
                <p>dato:{mesg}</p>
              </div>
              <div className="bg-white  shadow-sm w-6/12 mr-3 h-80 border rounded-xl border-gray-100">
                <div className="border p-2 border-gray-100 text-center">
                  <p className="font-semibold font-xl">Sensor de humedad</p>
                </div>
                <div className="p-2">
                  <Line
                    data={data}
                    width={90}
                    height={250}
                    options={{ maintainAspectRatio: false }}
                  />
                </div>
                <p>dato:{mesg2}</p>
              </div>
            </div>
            <div className="flex ml-2 mt-4 space-x-1 mr-2">
              <div className="bg-white  shadow-sm w-6/12 mr-3 h-80 border rounded-xl border-gray-100">
                <div className="border p-2 border-gray-100 text-center">
                  <p className="font-semibold font-xl">Sensor de Gas Butano</p>
                </div>
                <div className="p-2">
                  <Line
                    data={data}
                    width={90}
                    height={250}
                    options={{ maintainAspectRatio: false }}
                  />
                </div>
                <p>dato:{mesg3}</p>
              </div>
              <div className="bg-white  shadow-sm w-6/12 mr-3 h-80 border rounded-xl border-gray-100">
                <div className="border p-2 border-gray-100 text-center">
                  <p className="font-semibold font-xl">Sensor de Gas C02</p>
                </div>
                <div className="p-2">
                  <Line
                    data={data}
                    width={90}
                    height={250}
                    options={{ maintainAspectRatio: false }}
                  />
                </div>
                <p>dato:{mesg4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
