import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Footer from "./index";

const story: Meta = {
  component: Footer,
};

export default story;

export const primary: StoryFn = (args) => <Footer {...args} />;
