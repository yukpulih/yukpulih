export type PrimaryBtnProps = {
  children: string;
};

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ children }) => {
  return (
    <button className="max-w-full bg-[#5DA172] rounded-lg text-[#F5F5F5] font-button font-semibold text-sm px-8 py-2 hover:outline hover:outline-2 hover:outline-offset-1 hover:outline-[#5DA172] focus:bg-green-700 focus:outline-green-700">
      {children}
    </button>
  );
};

export default PrimaryBtn;
