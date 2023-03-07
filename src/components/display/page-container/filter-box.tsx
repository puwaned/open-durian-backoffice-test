import { Button, Col, Form, FormItemProps, Input, Row, Select } from "antd";
import React, { FC } from "react";

type FilterBoxInputType = "INPUT" | "SELECT";
export interface IFilterBoxElement {
  name: string;
  label: string;
  input: {
    type: FilterBoxInputType;
    options?: any;
  };
  form?: FormItemProps;
}

export interface FilterBoxProps {
  elements: IFilterBoxElement[];
  onFinish: (v: any) => void;
  noStyle?: boolean;
  shadow?: boolean;
  colSpan?: number;
}

const FilterBox: FC<FilterBoxProps> = ({
  elements,
  onFinish,
  noStyle,
  colSpan = 6,
  shadow = true,
}) => {
  const [form] = Form.useForm();

  const getInput = (type: FilterBoxInputType) => {
    switch (type) {
      case "INPUT":
        return Input;
      case "SELECT":
        return Select;
    }
  };

  const getPlaceholder = (type: FilterBoxInputType, title: string) => {
    if (type === "INPUT" || type === "SELECT") {
      return { placeholder: title };
    }
    return {};
  };

  const getClassName = () => {
    if (noStyle) return "";
    if (!shadow) {
      return "!p-5 bg-white rounded";
    }
    return "!p-5 bg-white rounded shadow";
  };

  const className = getClassName();

  return (
    <Form
      form={form}
      className={className}
      layout="vertical"
      onFinish={onFinish}
    >
      <Row gutter={[12, 6]}>
        {elements.map((item) => {
          const input = getInput(item.input.type) as any;
          const placeholder = getPlaceholder(item.input.type, item.label);
          return (
            <Col span={colSpan} key={item.name}>
              <Form.Item
                {...item.form}
                className="!mb-0"
                name={item.name}
                label={item.label}
              >
                {React.createElement(input, {
                  ...placeholder,
                  ...item.input.options,
                })}
              </Form.Item>
            </Col>
          );
        })}
        <Col span={colSpan}>
          <Form.Item className="mb-0" label=" ">
            <Row gutter={6}>
              <Col span={10}>
                <Button className="w-full" htmlType="submit">
                  ค้นหา
                </Button>
              </Col>
              <Col span={10}>
                <Button
                  className="w-full"
                  onClick={() => {
                    form.resetFields();
                    form.submit();
                  }}
                >
                  ล้างข้อมูล
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterBox;
