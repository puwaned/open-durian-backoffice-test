import { Typography } from "antd";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface PageContainerProps {
  className?: string;
  children: ReactNode;
  title: string;
  subTitle?: string;
}

const PageContainer: FC<PageContainerProps> = ({
  children,
  className,
  title,
  subTitle,
}) => {
  return (
    <div>
      <Header title={title} subTitle={subTitle} />
      <div className={className}>{children}</div>
    </div>
  );
};

const HeaderContainer = styled.div`
  ${tw`p-4`};
  background-color: white;
`;

const Header: FC<{ title: string; subTitle?: string }> = ({
  title,
  subTitle,
}) => {
  return (
    <HeaderContainer>
      <Typography.Title level={4} className='!text-primaryDark'>{title}</Typography.Title>
      <Typography.Title style={{ fontSize: 12 }} level={5} className='!text-primaryLight'>
        {subTitle}
      </Typography.Title>
    </HeaderContainer>
  );
};

export default PageContainer;
