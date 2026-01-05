import { Meta, StoryObj } from "@storybook/nextjs-vite";

import Container from ".";

const meta: Meta<typeof Container> = {
  title: "UI/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Container is a layout component used to constrain content width while optionally supporting full-width backgrounds. It also supports semantic HTML rendering using the `as` prop.",
      },
    },
  },
  argTypes: {
    as: {
      control: "select",
      options: ["section", "div", "header", "footer"],
      description: "Defines which semantic HTML element the container should render as.",
    },
    backgroundClassName: {
      control: "text",
      description: "Applies full-width background styles while keeping inner content constrained.",
    },
    className: {
      control: "text",
      description: "Additional utility classes applied to the inner constrained container.",
    },
  },
  args: {
    as: "section",
    className: "py-10",
    children: (
      <div className="rounded bg-gray-200 p-6 text-center">
        Container as section with max-width 1440px
      </div>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default container rendered as a section element with constrained max-width.",
      },
    },
  },
};

export const WithBackground: Story = {
  args: {
    backgroundClassName: "bg-red-500 py-16",
    children: (
      <div className="rounded bg-white p-6 text-center text-black">
        Container as section with max-width 1440px
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Container rendered as a section with a full-width background and constrained inner content.",
      },
    },
  },
};

export const AsHeader: Story = {
  args: {
    as: "header",
    className: "py-12",
    children: (
      <div className="rounded bg-gray-200 p-6 text-center">
        Container as header with max-width 1440px
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Container rendered as a semantic header element with constrained max-width.",
      },
    },
  },
};

export const AsFooter: Story = {
  args: {
    as: "footer",
    className: "py-12",
    children: (
      <div className="rounded bg-gray-200 p-6 text-center">
        Container as footer with max-width 1440px
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Container rendered as a semantic footer element with constrained max-width.",
      },
    },
  },
};
