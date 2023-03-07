import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

const AppContent = () => {
  return (
    <Layout.Content className="p-5">
      <React.Suspense>
        <Outlet />
      </React.Suspense>
    </Layout.Content>
  );
};

export default AppContent;
