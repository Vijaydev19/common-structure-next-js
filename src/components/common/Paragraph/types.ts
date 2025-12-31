import { ReactNode } from "react";

export type ParagraphVariants = "small" | "medium" | "large";

export interface ParagraphProps {
  children?: ReactNode;
  className?: string;
  description?: string;
  variant?: ParagraphVariants;
}
