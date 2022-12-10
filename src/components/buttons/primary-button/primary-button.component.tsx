import * as S from "./primary-button.styles";

export type PrimaryButtonProps = {
  buttonText: string;
  size: "sm" | "md" | "lg" | "xl";
  bgColor: "green" | "gray";
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ buttonText, size, bgColor }) => {
  return <S.Button size={size} bgColor={bgColor}>{buttonText}</S.Button>;
};

export default PrimaryButton;
