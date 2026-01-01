import { Meta, StoryObj } from "@storybook/nextjs-vite";

import { titleLevel } from "./types";

import Title from ".";

const meta: Meta<typeof Title> = {
  title: "UI/Title",
  component: Title,
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: [
        titleLevel.one,
        titleLevel.two,
        titleLevel.three,
        titleLevel.four,
        titleLevel.five,
        titleLevel.six,
      ],
    },
    title: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
  args: {
    level: titleLevel.one,
    title: "This is a heading",
    className: "",
  },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const H1: Story = {
  args: {
    level: titleLevel.one,
    title: "Heading Level 1",
    className: "text-center",
  },
};

export const H2: Story = {
  args: {
    level: titleLevel.two,
    title: "Heading Level 2",
    className: "text-center",
  },
};

export const H3: Story = {
  args: {
    level: titleLevel.three,
    title: "Heading Level 3",
    className: "text-center",
  },
};

export const H4: Story = {
  args: {
    level: titleLevel.four,
    title: "Heading Level 4",
    className: "text-center",
  },
};

export const H5: Story = {
  args: {
    level: titleLevel.five,
    title: "Heading Level 5",
    className: "text-center",
  },
};

export const H6: Story = {
  args: {
    level: titleLevel.six,
    title: "Heading Level 6",
    className: "text-center",
  },
};
