import { JSX } from "react";

import { ParagraphProps } from "./types";

const Paragraph = ({
  variant = "large",
  className = "",
  description,
  children,
}: ParagraphProps): JSX.Element => {
  const paragraphStyles = {
    small: "text-base leading-6",
    medium: "text-lg leading-7",
    large: "text-xl leading-[160%]",
  };

  return (
    <p className={`${paragraphStyles[`${variant}`]} ${className}`}>{description ?? children}</p>
  );
};

export default Paragraph;
