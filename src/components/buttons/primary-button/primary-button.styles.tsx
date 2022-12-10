import tw, { styled } from "twin.macro";

type buttonProps = {
  size?: "sm" | "md" | "lg" | "xl" | undefined;
  bgColor?: "green" | "gray" | undefined;
}

// sizes: sm, md, lg, xl, auto
const sizes = {
  // Named class sets
  sm: tw`min-w-[98px] min-h-[42px]`,
  md: tw`min-w-[150px] min-h-[42px]`,
  lg: tw`min-w-[300px] min-h-[42px]`,
  xl: tw`min-w-[400px] min-h-[40px]`,
}

// colors: green, gray
const bgColors = {
  green: tw`bg-green-600 hover:bg-green-700 focus:bg-green-800`,
  gray: tw`bg-green-600 hover:bg-green-700 focus:bg-green-800`,
}

export const Button = styled.button<buttonProps>(({ size = "sm", bgColor = "green" }) => [
  () => sizes[size],
  () => bgColors[bgColor],
  tw`rounded-md`,
  tw`text-base font-bold text-gray-200`,
  tw`hover:ring-2 hover:ring-green-500 hover:ring-offset-2`,
  tw`focus:ring-2 focus:ring-green-500`,
  // tw`border-green-600 rounded`,
  // tw`focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`,
]);