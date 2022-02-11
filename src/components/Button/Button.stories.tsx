// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Primary'};

export const Secondary = Template.bind({});
Secondary.args = { label: 'Secondary', primary: false };

export const Small = Template.bind({});
Small.args = { label: 'Small', size: 'small' };

export const Medium = Template.bind({});
Medium.args = { label: 'Medium', size: 'medium' };

export const Large = Template.bind({});
Large.args = { label: 'Large', size: 'large' };