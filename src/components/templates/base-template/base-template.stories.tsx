import { ComponentMeta, ComponentStory } from "@storybook/react";
import BaseTemplate, { BaseTemplateProps } from "./base-template.component";
import { MockBaseTemplateProps } from "./base-template.mocks";

export default {
  title: "templates/BaseTemplate",
  component: BaseTemplate,
  parameters: {
    // layout options: "padded", "centered", and "fullscreen"
    layout: "padded",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BaseTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...MockBaseTemplateProps.base,
} as BaseTemplateProps;
