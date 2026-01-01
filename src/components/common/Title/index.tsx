import { JSX } from "react";

import { TitleProps, TitleLevel, titleLevel } from "./types";

const variantStyles: Record<TitleLevel, string> = {
  [titleLevel.one]: "text-4xl md:text-5xl lg:text-[56px] xl:text-[63px] text-dark",
  [titleLevel.two]: "text-[28px] md:text-4xl lg:text-[44px] xl:text-[49px]",
  [titleLevel.three]: "text-2xl md:text-[28px] lg:text-3xl xl:text-[31px]",
  [titleLevel.four]: "text-lg md:text-xl lg:text-2xl xl:text-2xl",
  [titleLevel.five]: "text-base md:text-lg lg:text-xl xl:text-xl",
  [titleLevel.six]: "text-sm md:text-base lg:text-lg xl:text-base",
};

const Title = ({ level = titleLevel.two, title, className = "" }: TitleProps): JSX.Element => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`font-adonis-web leading-[130%] ${variantStyles[`${level}`]} ${className}`}>
      {title}
    </Tag>
  );
};

export default Title;
