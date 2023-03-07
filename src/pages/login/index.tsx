import { Button, Col, Form, Image, Input, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { AppLogoImage } from "src/assets/images";

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    navigate("/", { replace: true });
  };

  return (
    <Form className="h-screen bg-primary" onFinish={onFinish} layout="vertical">
      <Row className="h-full">
        <Col span={8}></Col>
        <Col span={8} className="center flex-col">
          <Image preview={false} src={AppLogoImage} />
          <Typography.Title className="!mt-3" level={2}>
            ยินดีต้อนรับ
          </Typography.Title>
          <Typography.Title level={4}>
            กรุณาเข้าสู่ระบบเพื่อเริ่มใช้งาน
          </Typography.Title>
          <Form.Item label="ชื่อผู้ใช้งาน" className="w-full">
            <Input placeholder="ชื่อผู้ใช้งาน" />
          </Form.Item>
          <Form.Item label="รหัสผ่าน" className="w-full">
            <Input placeholder="รหัสผ่าน" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="dashed">
              เข้าสู่ระบบ
            </Button>
          </Form.Item>
        </Col>
        <Col span={8}></Col>
      </Row>
    </Form>
  );
};

export default LoginPage;
