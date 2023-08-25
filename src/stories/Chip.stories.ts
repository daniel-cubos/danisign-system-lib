import type { Meta, StoryObj } from '@storybook/react';

import Chip from '../components/Chip/Chip';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {  
    color: {
      defaultValue: "#fa7436",
    },
    textColor: {
      defaultValue: "white",
    },
    title: {
      defaultValue: "My Chip",
      description: "Define the title of the chip"
    },
    type: {defaultValue: 'filled'},
    width: {
      defaultValue: 200
    },
   },
};

export default meta;
type Story = StoryObj<typeof Chip>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    color: "#45c",
    textColor: "white",
    title: "My Chip",
    type: "filled",
    width: 200
  },
};