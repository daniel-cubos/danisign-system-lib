import type { Meta, StoryObj } from '@storybook/react';

import NotificationDialog from '../components/NotificationDialog/NotificationDialog';

const meta: Meta<typeof NotificationDialog> = {
  title: 'Components/NotificationDialog',
  component: NotificationDialog,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    type: {
      defaultValue: 'success',
    },
    title: {
      defaultValue: 'Postagem criada com sucesso',
    },
    description: {
      defaultValue: 'A postagem foi criada com sucesso',
    },
    actionText: {
      defaultValue: 'Ver postagem',
    },
    handleClose: () => {},
    handleNextLocation: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof NotificationDialog>;

export const Default: Story = {
  args: {
    type: 'success',
    title: 'Postagem criada com sucesso',
    description: 'A postagem foi criada com sucesso',
    actionText: 'Ver postagem',
    handleClose: () => {},
    handleNextLocation: () => {},
  },
};
