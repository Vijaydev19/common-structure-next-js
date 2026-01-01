import { Meta, StoryObj } from "@storybook/nextjs-vite";

import Paragraph from ".";

const meta: Meta<typeof Paragraph> = {
  title: "UI/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    description: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
  args: {
    variant: "large",
    description:
      "This is a paragraph component used for body text. It supports multiple size variants.",
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Large: Story = {
  args: {
    variant: "large",
    className: "text-center",
    description: "Large paragraph variant. Used for prominent body content or introductions.",
  },
};

export const Medium: Story = {
  args: {
    variant: "medium",
    className: "text-center",
    description: "Medium paragraph variant. Ideal for standard content sections.",
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    className: "text-center",
    description: "Small paragraph variant. Used for captions, labels, or secondary text.",
  },
};

export const WithChildren: Story = {
  args: {
    variant: "medium",
    description: undefined,
    className: "text-center",
    children: (
      <>
        This paragraph is rendered using <strong>children</strong> instead of the description prop.
      </>
    ),
  },
};

export const CustomClass: Story = {
  args: {
    variant: "large",
    className: "text-gray-500 text-center",
    description: "This paragraph uses a custom className for color override.",
  },
};

export const LongContent: Story = {
  args: {
    variant: "medium",
    className: "text-center",
    description:
      "This is an example of a longer paragraph to demonstrate line height, readability, and wrapping behavior across multiple lines. It helps verify spacing consistency and visual rhythm in real content scenarios.",
  },
};
