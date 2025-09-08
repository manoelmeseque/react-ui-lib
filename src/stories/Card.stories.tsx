import type { Meta, StoryObj } from '@storybook/react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="tw-w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Card description goes here
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="tw-text-sm tw-text-muted-foreground">
          This is the card content area where you can put any content.
        </p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="tw-w-80">
      <CardHeader>
        <CardTitle>Product Card</CardTitle>
        <CardDescription>
          A beautiful product card
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="tw-text-sm tw-text-muted-foreground">
          This is a product description that explains what the product does.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="tw-w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <Card className="tw-w-80">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="tw-space-y-4">
        <div className="tw-space-y-2">
          <label className="tw-text-sm tw-font-medium">Email</label>
          <Input type="email" placeholder="Enter your email" />
        </div>
        <div className="tw-space-y-2">
          <label className="tw-text-sm tw-font-medium">Password</label>
          <Input type="password" placeholder="Enter your password" />
        </div>
      </CardContent>
      <CardFooter className="tw-flex tw-flex-col tw-space-y-2">
        <Button className="tw-w-full">Sign In</Button>
        <Button variant="link" className="tw-text-sm">
          Forgot password?
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const StatsCard: Story = {
  render: () => (
    <Card className="tw-w-64">
      <CardHeader className="tw-flex tw-flex-row tw-items-center tw-justify-between tw-space-y-0 tw-pb-2">
        <CardTitle className="tw-text-sm tw-font-medium">
          Total Revenue
        </CardTitle>
        <span className="tw-text-2xl">💰</span>
      </CardHeader>
      <CardContent>
        <div className="tw-text-2xl tw-font-bold">$45,231.89</div>
        <p className="tw-text-xs tw-text-muted-foreground">
          +20.1% from last month
        </p>
      </CardContent>
    </Card>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Card 1</CardTitle>
          <CardDescription>First card</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="tw-text-sm">Content of the first card</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Card 2</CardTitle>
          <CardDescription>Second card</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="tw-text-sm">Content of the second card</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Card 3</CardTitle>
          <CardDescription>Third card</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="tw-text-sm">Content of the third card</p>
        </CardContent>
      </Card>
    </div>
  ),
};
