export const titleLevel = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
} as const;

export type TitleLevel = (typeof titleLevel)[keyof typeof titleLevel];

export interface TitleProps {
  level: TitleLevel;
  title: string;
  className?: string;
}
