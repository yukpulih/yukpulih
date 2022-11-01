import { ComponentMeta, ComponentStory } from "@storybook/react";
import PrimaryButton, { PrimaryButtonProps } from "./primary-button.component";
import { MockPrimaryButtonProps } from "./primary-button.mocks";

export default {
  title: "buttons/PrimaryButton",
  component: PrimaryButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PrimaryButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...MockPrimaryButtonProps.base,
} as PrimaryButtonProps;
