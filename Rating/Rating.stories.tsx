import { Meta, Story } from "@storybook/react";
import React from "react";
import Rating, { RatingProps } from "."

export default { component: Rating, tags: ['autodocs'],} as Meta<typeof Rating>;
export const PrimaryRating: Story = (args) => <Rating  {...(args as RatingProps)} />;

PrimaryRating.args = {
  primaryColor: "warning-600",
  secondaryColor: "neutral-400",
  count: 5,
  value: 0,
  size: 5
} as RatingProps;
