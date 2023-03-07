import { Table, TableColumnsType, Typography } from "antd";
import PageContainer from "src/components/display/page-container";
import FilterBox, {
  IFilterBoxElement,
} from "src/components/display/page-container/filter-box";
import { IUser } from "src/services/user/interface";

const dataSource: IUser[] = [
  {
    id: 1,
    firstName: "Puwaned",
    lastName: "Yamwised",
    username: "puwaneda@gmail.com",
    isActive: true,
  },
  {
    id: 2,
    firstName: "Puwaned",
    lastName: "Yamwised",
    username: "puwaneda@gmail.com",
    isActive: true,
  },
  {
    id: 3,
    firstName: "Puwaned",
    lastName: "Yamwised",
    username: "puwaneda@gmail.com",
    isActive: false,
  },
  {
    id: 4,
    firstName: "Puwaned",
    lastName: "Yamwised",
    username: "puwaneda@gmail.com",
    isActive: false,
  },
];

const UserPage = () => {
  const elements: IFilterBoxElement[] = [
    {
      name: "A",
      label: "ชื่อผู้ใช้งาน",
      input: {
        type: "INPUT",
      },
    },
  ];

  const columns: TableColumnsType<IUser> = [
    {
      title: "ชื่อผู้ใช้งาน",
      dataIndex: "username",
    },
    {
      title: "ชื่อ",
      dataIndex: "firstName",
    },
    {
      title: "นามสกุล",
      dataIndex: "lastName",
    },
    {
      title: "สถานะ",
      render: (_, rc) => {
        if (rc.isActive) {
          return "พร้อมใช้งาน";
        }
        return "ไม่พร้อมใช้งาน";
      },
    },
  ];

  const onSearch = (values: any) => {
    //
  };

  return (
    <PageContainer className="p-5" title="ผู้ใช้งาน" subTitle="ผู้ใช้งาน">
      <FilterBox onFinish={onSearch} elements={elements} />
      <div className="mt-5 p-5 bg-white">
        <Typography.Title level={5} className="!mb-4 !text-primaryDark">
          รายการผู้ใช้งาน
        </Typography.Title>
        <Table
          pagination={{ size: "small" }}
          rowKey="id"
          columns={columns}
          dataSource={dataSource}
        />
      </div>
    </PageContainer>
  );
};

export default UserPage;
