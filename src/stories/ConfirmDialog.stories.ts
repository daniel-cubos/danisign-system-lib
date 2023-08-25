import type { Meta, StoryObj } from '@storybook/react';

import ConfirmDialog from '../components/ConfirmDialog/ConfirmDialog';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ConfirmDialog> = {
  title: 'Components/ConfirmDialog',
  component: ConfirmDialog,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    open: {
      defaultValue: false,
    },
    handleCancel: {
      defaultValue: () => {},
    },
    handleConfirm: {
      defaultValue: () => {},
    },
    title: {
      defaultValue: 'Confirma a exclusão',
    },
    description: {
      defaultValue: 'Deseja realmente excluir o registro?',
    },
    btnConfirmText: {
      defaultValue: 'Sim',
    },
    btnCancelText: {
      defaultValue: 'Não',
    },
    type: {
      defaultValue: 'caution',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmDialog>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    btnCancelText: 'Cancelar',
    btnConfirmText: 'Confirmar',
    description: 'Deseja realmente excluir essa postagem',
    handleCancel: () => {},
    handleConfirm: () => {},
    open: true,
    title: 'Excluir postagem',
    type: 'caution',
  },
};
