import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavButton, { NavButtonProps } from "./nav-button.component";
import { MockNavButtonProps } from "./nav-button.mocks";

export default {
  title: "buttons/NavButton",
  component: NavButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NavButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavButton> = (args) => (
  <NavButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...MockNavButtonProps.base,
} as NavButtonProps;
