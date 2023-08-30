import React from "react";
import { Badge, Card, Col, Row, Typography } from "antd";
// @ts-ignore
import { UilFileCheck } from "@iconscout/react-unicons";
import clsx from "clsx";
import { Link } from "react-router-dom";

const { Text, Title } = Typography;

const Jobinja = () => {
  return (
    <Row gutter={[32, 32]}>
      <Col span={24}>
        <Title level={4}>
          <UilFileCheck />
          <br />
          You Are In &nbsp;
          <b className="color-primary">Jobinja</b>
        </Title>
        <Text type="secondary">
          We found 45 candidates, now select your job opportunity or talent pool
        </Text>
      </Col>
    </Row>
  );
};

export default Jobinja;
