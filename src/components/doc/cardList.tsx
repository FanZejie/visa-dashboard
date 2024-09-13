"use client";

import { Avatar, Card, Button } from "antd";

import docList from "./docList";
const { Meta } = Card;
const listdata = docList;

const CardList = () => {
  const listItems = listdata.map((item, idx) => (
    <Card
      className="m-2"
      key={idx}
      onClick={() => {
        window.open(`/dashboard/doc/${item.slug}`, "_self");
      }}
      hoverable
      style={{ width: 260 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }>
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title={item.title}
        description={item.description}
        className=" items-center"
      />
    </Card>
  ));
  return <div className="flex flex-row flex-wrap ml-2 justify-start gap-2">{listItems}</div>;
};

export default CardList;