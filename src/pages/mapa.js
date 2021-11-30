import Layout from "../components/Layout";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("../components/MapView"), { ssr: false });


const mapa = () => {
  return (
    <div>
      <Layout></Layout>
      <div className="flex">
        <Sidebar />
        <div className="w-screen">
          <Header />
          <MapView />
        </div>
      </div>
    </div>
  );
};

export default mapa;
