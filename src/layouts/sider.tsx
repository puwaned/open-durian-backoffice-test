import {
  ClusterOutlined,
  DashboardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Layout, Row, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

interface ISiderItem {
  key: string;
  label: string;
  to: string;
  icon: React.ForwardRefExoticComponent<any>;
}

const AppSiderMenuItem: ISiderItem[] = [
  {
    key: "DASHBOARD",
    label: "ภาพรวม",
    to: "/dashboard",
    icon: DashboardOutlined,
  },
  {
    key: "COURSE",
    label: "คอร์สเรียน",
    to: "/course",
    icon: ClusterOutlined,
  },
  {
    key: "USER",
    label: "ผู้ใช้งาน",
    to: "/users",
    icon: UserOutlined,
  },
];

const AppSider = () => {
  return (
    <Layout.Sider width={280} className="!bg-primaryLight relative">
      {AppSiderMenuItem.map((item) => {
        return <SiderItem {...item} />;
      })}
    </Layout.Sider>
  );
};

const SiderItemContainer = styled.div<{ $isActive: boolean }>`
  ${tw`px-4 relative`};
  height: 60px;
  transition: all 0.3s ease-out;
  cursor: pointer;

  ${({ $isActive }) => ($isActive ? tw`bg-primaryDark` : "")}
  svg * {
    ${({ $isActive }) => ($isActive ? tw`fill-colors-yellow` : "")};
  }
  .ant-typography {
    ${({ $isActive }) => ($isActive ? tw`!text-yellow` : tw`!text-white`)};
  }

  &:hover {
    ${tw`bg-primaryDark`};
    svg * {
      ${tw`fill-colors-yellow`};
    }
    .ant-typography {
      ${tw`!text-yellow`};
    }
    &:before {
      content: " ";
      ${tw`border-l-4 border-yellow`}
      position: absolute;
      left: 0px;
      top: 0px;
      height: 60px;
    }
  }
  &:before {
    content: " ";
    ${({ $isActive }) => ($isActive ? tw`border-l-4 border-yellow` : "")}
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0px;
  }
`;

const SiderItem: React.FC<ISiderItem> = ({ label, to, icon }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const Icon = icon;

  return (
    <SiderItemContainer
      $isActive={pathname === to}
      onClick={() => {
        navigate(to, { replace: true });
      }}
    >
      <Row className="h-full" align="middle" gutter={12}>
        <Col>
          <Icon style={{ fontSize: 24, color: "white" }} />
        </Col>
        <Col>
          <Typography.Text className="!text-white">{label}</Typography.Text>
        </Col>
      </Row>
    </SiderItemContainer>
  );
};
//
export default AppSider;
