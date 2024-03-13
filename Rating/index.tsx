import React, { useState } from "react";
import { getColor, TColorWithWeights } from "@/src/scss";
import clsx from "clsx";
import styles from "./Rating.module.scss";
import Icon from "../Icon";

export interface RatingProps {
    count: number;
    value: number;
    size: number;
    starGap?: number;
    className?: string;
    primaryColor: TColorWithWeights;
    secondaryColor: TColorWithWeights;
    onClick?: (e?: any) => void;
}

const Rating = (props: RatingProps) => {
    //TODO
    const {
        className,
        primaryColor = "#ff6a00" as unknown as TColorWithWeights,
        secondaryColor = "#6C6C6C" as unknown as TColorWithWeights,
        count = 5,
        value = 0,
        size = 2,
        starGap = 5,
        onClick,
    } = props;
    const [rating, setRating] = useState(value);
    const [hover, setHover] = useState(value);

    const ratingStyle = {
        color: primaryColor.startsWith("#") ? primaryColor : getColor(primaryColor),
    }
    const hoverStyle = {
        color: primaryColor.startsWith("#") ? primaryColor : getColor(primaryColor),
        opacity: 0.6,
    }
    const defaultStyle = {
        color: secondaryColor.startsWith("#") ? secondaryColor : getColor(secondaryColor),
    }

    return (
        <div className={clsx(styles["rating"], className)} style={starGap ? { gap: starGap } : {}}>
            {[...Array(count)].map((_, index) => {

                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        onClick={() => { setRating(index); onClick && onClick(index); }}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(0)}
                        style={index <= rating ? ratingStyle : index <= hover ? hoverStyle : defaultStyle}
                    >

                        {index <= rating || index <= hover ? <Icon icon={" mi-rate-Filled"} size={size} /> : <Icon icon={"mi-rate-linear "} size={size} />}

                    </button>
                );


            })}
        </div >)
}


export default Rating;
