import React from "react";
import LinearProgress, { LinearProgressProps } from ".";
import { Meta, Story } from "@storybook/react";

export default {
  component: LinearProgress,
  tags: ['autodocs'],
} as Meta<typeof LinearProgress>;

export const Primary: Story = (args) => <LinearProgress {...args} />;
Primary.args = {
  color: "secondary",
  width: "100%",
  thickness: 7,
  max: 100,
  value: undefined,
} as LinearProgressProps;
