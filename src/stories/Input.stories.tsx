import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/ui/input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter a number',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Enter text...',
    defaultValue: 'Hello World',
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="tw-w-80 tw-space-y-4">
      <div className="tw-space-y-2">
        <label className="tw-text-sm tw-font-medium">Full Name</label>
        <Input placeholder="Enter your full name" />
      </div>
      
      <div className="tw-space-y-2">
        <label className="tw-text-sm tw-font-medium">Email</label>
        <Input type="email" placeholder="Enter your email" />
      </div>
      
      <div className="tw-space-y-2">
        <label className="tw-text-sm tw-font-medium">Phone</label>
        <Input type="tel" placeholder="Enter your phone number" />
      </div>
      
      <div className="tw-space-y-2">
        <label className="tw-text-sm tw-font-medium">Age</label>
        <Input type="number" placeholder="Enter your age" />
      </div>
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div className="tw-w-80 tw-space-y-4">
      <div className="tw-space-y-2">
        <label className="tw-text-sm tw-font-medium">Text</label>
        <Input type="text" placeholder="Text input" />
      </div>
      
      <div className="tw-space-y-2">
        <label className="tw-text-sm tw-font-medium">Email</label>
        <Input type="email" placeholder="Email input" />
      </div>
      
      <div className="tw-space-y-2">
        <label className="tw-text-sm tw-font-medium">Password</label>
        <Input type="password" placeholder="Password input" />
      </div>
      
      <div className="tw-space-y-2">
        <label className="tw-text-sm tw-font-medium">Number</label>
        <Input type="number" placeholder="Number input" />
      </div>
      
      <div className="tw-space-y-2">
        <label className="tw-text-sm tw-font-medium">Tel</label>
        <Input type="tel" placeholder="Phone input" />
      </div>
      
      <div className="tw-space-y-2">
        <label className="tw-text-sm tw-font-medium">URL</label>
        <Input type="url" placeholder="URL input" />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="tw-w-80 tw-space-y-4">
      <div className="tw-space-y-2">
        <label className="tw-text-sm tw-font-medium">Normal</label>
        <Input placeholder="Normal state" />
      </div>
      
      <div className="tw-space-y-2">
        <label className="tw-text-sm tw-font-medium">Disabled</label>
        <Input placeholder="Disabled state" disabled />
      </div>
      
      <div className="tw-space-y-2">
        <label className="tw-text-sm tw-font-medium">With Value</label>
        <Input placeholder="With value" defaultValue="Some value" />
      </div>
    </div>
  ),
};
