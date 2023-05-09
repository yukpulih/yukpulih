type CardProps = {
  heading: string;
  content: string;
  Icon: React.ElementType;
};

const Card: React.FC<CardProps> = ({ heading, content, Icon }) => {
  return (
    <div className="w-[296px]">
      <Icon />
      <h3 className="font-serif font-semibold text-xl md:text-2xl leading-6 sm:leading-10 text-[#333]">
        {heading}
      </h3>
      <p className="text-base leading-6 text-[#505050] w-[97%] mx-auto pt-1">
        {content}
      </p>
    </div>
  );
};

export default Card;
