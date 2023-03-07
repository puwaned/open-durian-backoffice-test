import { MenuOutlined } from "@ant-design/icons";
import { Col, Dropdown, Image, Layout, MenuProps, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { AppLogoImage } from "../assets/images";

const AppHeader = () => {
  return (
    <Layout.Header className="!bg-primary px-2" style={{ height: 60 }}>
      <Row className="h-full" align="middle" gutter={12}>
        <Col className="center">
          <Image preview={false} src={AppLogoImage} height={40} width="auto" />
        </Col>
        <Col>
          <Typography.Title className="!text-white" level={5}>
            Open Durian Backoffice
          </Typography.Title>
        </Col>
        <Col className="ml-auto center">
          <AppDropdownMenu />
        </Col>
      </Row>
    </Layout.Header>
  );
};

const AppDropdownMenu = () => {
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "ออกจากระบบ",
      onClick: () => {
        navigate("/login", { replace: true });
      },
    },
  ];

  return (
    <Dropdown menu={{ items: items }} overlayStyle={{ width: 200 }}>
      <MenuOutlined
        style={{ fontSize: 20, color: "white", cursor: "pointer" }}
      />
    </Dropdown>
  );
};

export default AppHeader;
