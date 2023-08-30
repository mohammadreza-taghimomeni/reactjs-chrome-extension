import React, { useState } from "react";
import { Badge, Card, Col, Row, Typography } from "antd";
const { Text, Title } = Typography;
// @ts-ignore
import { UilSearch } from "@iconscout/react-unicons";
import clsx from "clsx";

const sources = [
  { id: 1, name: "jobibja" },
  { id: 2, name: "linkedIn" },
  { id: 3, name: "ایران استخدام", disabled: true },
  { id: 4, name: "جاب ویژن", disabled: true },
  { id: 5, name: "کاربانک", disabled: true },
  { id: 6, name: "کاربوم", disabled: true },
];

const Home = () => {
  const [sourceId, setSourceId] = useState<number>();
  return (
    <Row gutter={[32, 32]}>
      <Col span={24}>
        <Title level={4}>
          <UilSearch />
          <br />
          Where Are You?
        </Title>
        <Text type="secondary">
          Select the place of extraction of job seekers
        </Text>
      </Col>

      {sources.map((source, index) => (
        <Col
          span={12}
          key={index}
          className={clsx("sources-card", {
            disabled: source.disabled,
            enable: !source.disabled,
            active: sourceId === source.id,
          })}
        >
          {source.disabled ? (
            <Badge.Ribbon text="coming soon" color="cyan">
              <Card>{source?.name}</Card>
            </Badge.Ribbon>
          ) : (
            <Card
              onClick={() => {
                setSourceId(source.id);
              }}
            >
              {source?.name}
            </Card>
          )}
        </Col>
      ))}
    </Row>
  );
};

export default Home;
