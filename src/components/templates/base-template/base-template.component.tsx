export type BaseTemplateProps = {
  sampleTextProp: string;
};

const BaseTemplate: React.FC<BaseTemplateProps> = ({ sampleTextProp }) => {
  return <div>{sampleTextProp}</div>;
};

export default BaseTemplate;
