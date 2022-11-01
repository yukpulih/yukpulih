import * as Styles from "./base-template.styles";

export type BaseTemplateProps = {
  sampleTextProp: string;
};

const Base: React.FC<BaseTemplateProps> = ({ sampleTextProp }) => {
  return <Styles.Container>{sampleTextProp}</Styles.Container>;
};

export default Base;
