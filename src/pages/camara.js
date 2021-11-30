import Layout from "../components/Layout";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";

const camara = () => {
  return (
    <div>
      <Layout></Layout>
      <div className="flex">
        <Sidebar />
        <div className="w-screen">
          <Header />
          <iframe src="http://192.168.18.33:8081/" height="600px" width="1050px" ></iframe>
        </div>
      </div>
    </div>
  );
};

export default camara;
