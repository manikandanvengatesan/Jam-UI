import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, IButtonProps } from '../Buttons/Button';

export default {
  title: 'Example/CustomButton',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: 'Button',
  size: 'small',
  onClick: () => {
    alert('Clicked!');
  },
};
