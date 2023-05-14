import { ComponentMeta, ComponentStory } from "@storybook/react";
import Pillars from "./pillars.component";

export default {
  title: "sections/Pillars",
  component: Pillars,
  parameters: {
    // layout options: "padded", "centered", and "fullscreen"
    layout: "fullscreen",
  },
  argTypes: {},
} as ComponentMeta<typeof Pillars>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pillars> = () => <Pillars />;

export const Base = Template.bind({});
