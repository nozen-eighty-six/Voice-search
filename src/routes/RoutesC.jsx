import { Outlet } from "react-router";
import Layout from "../components/Layout";

const RoutesC = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default RoutesC;
