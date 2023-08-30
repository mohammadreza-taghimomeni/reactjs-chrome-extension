import React from "react";
import { Button, Typography } from "antd";
import "./popup.css";
import { UilSearch } from "@iconscout/react-unicons";

const { Text, Title } = Typography;
const Popup = () => {
  return (
    <div>
      <Title level={4}>
        <UilSearch />
        <br />
        Where Are You?
      </Title>
      <Text type="secondary">
        Select the place of extraction of job seekers
      </Text>

      <h1 className="text-4xl text-green-500">Hello World</h1>

      <Button type="primary">Button</Button>
    </div>
  );
};

export default Popup;
