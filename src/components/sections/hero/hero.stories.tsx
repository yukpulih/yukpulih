import { ComponentMeta, ComponentStory } from "@storybook/react";
import Hero from "./hero.component";

export default {
  title: "sections/Hero",
  component: Hero,
  parameters: {
    // layout options: "padded", "centered", and "fullscreen"
    layout: "padded",
  },
  argTypes: {},
} as ComponentMeta<typeof Hero>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hero> = () => <Hero />;

export const Base = Template.bind({});
