export type NavButtonProps = {
  sampleTextProp: string;
};

const NavButton: React.FC<NavButtonProps> = ({ sampleTextProp }) => {
  return (
    <button className="w-full bg-green-900 rounded-lg text-gray-300 px-6 py-1">
      Login
    </button>
  );
};

export default NavButton;
