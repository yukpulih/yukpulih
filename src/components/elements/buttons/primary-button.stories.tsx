import { ComponentMeta, ComponentStory } from "@storybook/react";
import PrimaryBtn, { PrimaryBtnProps } from "./primary-button.component";
import { MockPrimaryBtnProps } from "./primary-button.mocks";

export default {
  title: "buttons/PrimaryButton",
  component: PrimaryBtn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PrimaryBtn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PrimaryBtn> = (args) => (
  <PrimaryBtn>{args.children}</PrimaryBtn>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...MockPrimaryBtnProps.base,
} as PrimaryBtnProps;
