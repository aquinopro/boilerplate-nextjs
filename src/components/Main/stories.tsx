import { Story, Meta } from '@storybook/react/types-6-0';
import Main from '.';

export const Basic: Story = (args) => <Main {...args} />;

export const Advanced: Story = (args) => <Main {...args} />;

export default {
    title: 'Main',
    component: Main,
    args: { title: 'Texto padrão', background: '#5b00eb' },
    argTypes: { background: { control: 'color' } },
} as Meta;

Basic.args = {
    title: 'Oi!',
};
