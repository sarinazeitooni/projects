import { useHeightObserver } from "@/src/utils/hooks/resize";
import React, { useRef, useState } from "react";
import { cssUnit } from "../types";
import styles from "./ShowMore.module.scss";

export interface ShowMoreProps {
  children: React.ReactNode | React.ReactNode[];
  height: number | string;
  show: boolean;
}

export const useShowMore = () => {
  const [show, setShow] = useState(false);
  return {
    show,
    handleShowMore() {
      setShow(!show);
    },
  };
};

const ShowMore = (props: ShowMoreProps) => {
  const { children, height, show } = props;
  const maxHeight = cssUnit(height);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentHeight = useHeightObserver(contentRef, [maxHeight]);
  return (
    <div className={styles["show-more"]}>
      <div
        ref={contentRef}
        className={styles["show-more__content"]}
        style={{ height: show ? contentHeight : maxHeight }}
      >
        {children}
      </div>
    </div>
  );
};

export default ShowMore;
