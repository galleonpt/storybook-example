import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        // backgroundColor: { control: "color" },
        size: { options: ["small", "medium", "large"] },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Button",
        size: "medium",
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: "Disabled",
    },
};

export const Loading: Story = {
    args: {
        loading: true,
        children: "Loading",
    },
};

export const Small: Story = {
    args: {
        size: "small",
        children: "Small",
    },
};

export const Large: Story = {
    args: {
        size: "large",
        children: "Large",
    },
};

// export const Secondary: Story = {
//     args: {
//         children: "Button",
//     },
// };

// export const Warning: Story = {
//     args: {
//         // primary: true,
//         children: "Delete now",
//         // backgroundColor: "red",
//     },
// };
