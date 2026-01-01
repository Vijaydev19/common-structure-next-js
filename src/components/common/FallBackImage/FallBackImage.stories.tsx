import { Meta, StoryObj } from "@storybook/nextjs-vite";

import FallBackImage from ".";

const meta: Meta<typeof FallBackImage> = {
  title: "UI/FallBackImage",
  component: FallBackImage,
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
    },
    fallbackSrc: {
      control: "text",
    },
    alt: {
      control: "text",
    },
    width: {
      control: "number",
    },
    height: {
      control: "number",
    },
  },
  args: {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    alt: "Sample image",
    width: 400,
    height: 260,
  },
};

export default meta;

type Story = StoryObj<typeof FallBackImage>;

export const Default: Story = {};

export const BrokenImageWithFallback: Story = {
  args: {
    src: "/broken-image.jpg",
    fallbackSrc: "/fall-back-image.avif",
    alt: "Broken image with fallback",
  },
};
