import { Col, Image, Layout, Row, Typography } from "antd";
import { AppLogoImage } from "../assets/images";

const AppHeader = () => {
  return (
    <Layout.Header className="!bg-primary px-2" style={{ height: 50 }}>
      <Row className="h-full" align="middle" gutter={12}>
        <Col className="center">
          <Image preview={false} src={AppLogoImage} height={40} width="auto" />
        </Col>
        <Col>
          <Typography.Title className="!text-white" level={5}>Open Durian Backoffice</Typography.Title>
        </Col>
        <Col className="ml-auto">
          
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default AppHeader;
