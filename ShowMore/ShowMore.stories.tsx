import { Meta, Story } from "@storybook/react";
import React from "react";
import ShowMore, { ShowMoreProps, useShowMore } from ".";
import Button from "../Button";
import Card from "../Card";

export default { component: ShowMore, tags: ['autodocs'],} as Meta<typeof ShowMore>;

export const Primary: Story = (args) => {
  const { handleShowMore, show } = useShowMore();
  return (
    <Card
      width={300}
      color="neutral-300"
      style={{ padding: 20, margin: "auto" }}
    >
      <ShowMore {...(args as ShowMoreProps)} show={show} />
      <Button onClick={handleShowMore}>show {show ? "less" : "more"}</Button>
    </Card>
  );
};

Primary.args = {
  children:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores expedita ullam quod nam alias et tempore fuga. Id soluta, molestiae veritatis, deserunt illo non accusamus enim, cum alias doloribus magnam?" +
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores expedita ullam quod nam alias et tempore fuga. Id soluta, molestiae veritatis, deserunt illo non accusamus enim, cum alias doloribus magnam?" +
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores expedita ullam quod nam alias et tempore fuga. Id soluta, molestiae veritatis, deserunt illo non accusamus enim, cum alias doloribus magnam?" +
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores expedita ullam quod nam alias et tempore fuga. Id soluta, molestiae veritatis, deserunt illo non accusamus enim, cum alias doloribus magnam?" +
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores expedita ullam quod nam alias et tempore fuga. Id soluta, molestiae veritatis, deserunt illo non accusamus enim, cum alias doloribus magnam?",
} as ShowMoreProps;
