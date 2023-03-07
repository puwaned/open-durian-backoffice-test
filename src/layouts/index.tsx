import { Layout } from "antd";
import AppContent from "./content";
import AppHeader from "./header";
import AppSider from "./sider";

const AppLayout = () => {
  return (
    <Layout className="h-screen">
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
