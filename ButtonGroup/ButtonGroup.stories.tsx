import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import ButtonGroup from ".";
import { ButtonGroupProps } from ".";
import styles from "./buttonGroup.module.scss";

export default { component: ButtonGroup, tags: ['autodocs'],} as Meta<typeof ButtonGroup>;

export const MandatoryButtonGroup: Story = (args) => {
  const [id, setId] = useState<string[]>();

  return (
    <ButtonGroup
      {...(args as ButtonGroupProps)}
      maximumSelectionLimit={3}
      getDataOnClick={(id) => {
        setId(id);
      }}
    />
  );
};

MandatoryButtonGroup.args = {
  items: [
    {
      activeClassName: styles["selected"],
      deselectedClassName: "deselected",
      id: "1",
      label: "test1",
      color: "red",
      bgColor: "success-500",
      borderColor: "error-800",
      borderRadius: "1",
      borderThickness: "1",
    },
    {
      activeClassName: styles["selected"],
      deselectedClassName: "deselected",
      id: "2",
      label: "test2",
      color: "red",
      bgColor: "success-500",
      borderColor: "error-800",
      borderRadius: "1",
      borderThickness: "1",
    },
    {
      activeClassName: styles["selected"],
      deselectedClassName: "deselected",
      id: "3",
      label: "test3",
      color: "red",
      bgColor: "success-500",
      borderColor: "error-800",
      borderRadius: "1",
      borderThickness: "1",
    },
    {
      activeClassName: styles["selected"],
      deselectedClassName: "deselected",
      id: "4",
      label: "test4",
      color: "red",
      bgColor: "success-500",
      borderColor: "error-800",
      borderRadius: "1",
      borderThickness: "1",
    },
  ],
  isSingleSelect: true,
  isMandatory: false,
  containerClass: styles["grid-container"],
} as ButtonGroupProps;
