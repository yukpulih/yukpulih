export type ButtonProps = {};

const Button: React.FC<ButtonProps> = () => {
  return (
    <button className="md:max-w-[100px] w-full bg-green-900 rounded-lg text-gray-300 px-6 py-1 hover:outline hover:outline-2  hover:outline-offset-2 hover:outline-green-900 focus:bg-white">
      Login
    </button>
  );
};

export default Button;
