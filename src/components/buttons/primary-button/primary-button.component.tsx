import * as Styles from "./primary-button.styles";

export type PrimaryButtonProps = {
  buttonText: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ buttonText }) => {
  return <Styles.Container>{buttonText}</Styles.Container>;
};

export default PrimaryButton;
