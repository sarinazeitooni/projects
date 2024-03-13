import React from "react";
import { getColor, TColorWithWeights } from "@/src/scss";

import clsx from "clsx";
import { CSSProperties } from "react";
import { cssUnit, getSizes, IColorable } from "../../types";
import LinearStyles from "./Linear.module.scss";
export interface LinearProgressProps extends Omit<IColorable, "bgColor"> {
  width?: number | string;
  thickness?: number | string;
  className?: string;
  style?: CSSProperties;
  value?: number;
  max?: number;
}

const LinearPropgress = (props: LinearProgressProps) => {
  const {
    className,
    color = "secondary",
    value,
    max = 100,
    style,
    width = "100%",
    thickness = 4,
  } = props;
  const progress = value && (value / max) * 100;
  const getBackgroundBg = (color = "secondary") => {
    return color.includes("-")
      ? color.substring(0, color.length - 4).concat("-100")
      : color.concat("-100");
  };
  const styles = {
    backgroundColor: getColor(getBackgroundBg(color) as TColorWithWeights),
    width: cssUnit(width),
    height: cssUnit(thickness),
    ...getSizes(props),
    ...style,
  };
  return (
    <div className={clsx(className, LinearStyles["progress"])} style={styles}>
      <div
        className={clsx(
          LinearStyles["progress__bar"],
          value === undefined && LinearStyles["progress__bar--indeterminate"]
        )}
        style={
          {
            width: `${progress}%`,
            "--color": getColor(color),
          } as CSSProperties
        }
      ></div>
    </div>
  );
};

export default LinearPropgress;
