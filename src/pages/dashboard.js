import Layout from '../components/Layout'
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import Container from "../components/Containers";

const dashboard = () => {
  return (
    <div>
      <Layout></Layout>
      <div className="flex">
        <Sidebar />
        <div className="w-screen">
          <Header />
          <Container />
        </div>
      </div>
      <div>
        <p>prueba</p>
      </div>
    </div>
  );
};

export default dashboard

