import clsx from "clsx";
import React, { useState } from "react";
import Button, { ButtonProps } from "../Button";

export interface IButtonItem extends ButtonProps {
  label?: string;
  id: string;
  activeClassName: string;
  deselectedClassName: string;
  latinKey?: string;
}

export interface ButtonGroupProps {
  items: IButtonItem[];
  isSingleSelect: boolean;
  isMandatory: boolean;
  defaultIds?: string[];
  containerClass?: string;
  getDataOnClick: (id: string[]) => void;
  maximumSelectionLimit?: number;
}
const ButtonGroup = (props: ButtonGroupProps) => {
  const {
    isMandatory,
    isSingleSelect,
    items,
    defaultIds = [],
    containerClass,
    getDataOnClick,
    maximumSelectionLimit,
  } = props;
  const [selected, setSelected] = useState<string[]>([...defaultIds]);

  const selectItemSingleSelect = (
    id: string,
    notSelected: string[],
    isSelectedItem: boolean
  ) => {
    let selectedItems: string[] = [];
    if (isMandatory) {
      setSelected([id]);
      selectedItems = [id];
    } else {
      if (isSelectedItem) {
        setSelected(notSelected);
        selectedItems = notSelected;
      } else {
        selectedItems = [id];
        setSelected([id]);
      }
    }
    getDataOnClick(selectedItems);
  };
  const selectItemMultiSelect = (
    id: string,
    notSelected: string[],
    isSelectedItem: boolean
  ) => {
    let selectedItems: string[] = [];
    if (isMandatory) {
      if (!isSelectedItem) {
        selectedItems = [...selected, id];
        setSelected([...selected, id]);
      } else if (isSelectedItem && selected.length != 1) {
        selectedItems = notSelected;
        setSelected(notSelected);
      }
    } else {
      if (isSelectedItem) {
        selectedItems = notSelected;
        setSelected(notSelected);
      } else {
        if (
          (maximumSelectionLimit &&
            selected.length < maximumSelectionLimit) ||
          !Boolean(maximumSelectionLimit)
        ) {
          selectedItems = [...selected, id];
          setSelected([...selected, id]);
        }
      }
    }
    getDataOnClick(selectedItems);
  };

  return (
    <div className={clsx(containerClass)}>
      {items?.map((item) => {
        const isSelectedItem = selected.includes(item.id);
        const notSelected = selected.filter((itemId) => itemId !== item.id);

        return (
          <Button
            {...item}
            onClick={() => {
              if (isSingleSelect)
                selectItemSingleSelect(item.id, notSelected, isSelectedItem);
              else selectItemMultiSelect(item.id, notSelected, isSelectedItem);
            }}
            className={
              Boolean(isSelectedItem)
                ? item.activeClassName
                : item.deselectedClassName
            }
          >
            {item.children || item.label}
          </Button>
        );
      })}
    </div>
  );
};
export default ButtonGroup;
