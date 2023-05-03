import Image from "next/image";
import family from "public/images/icons/pillars/family.svg";
import health from "public/images/icons/pillars/health.svg";
import lightBulb from "public/images/icons/pillars/lightbulb.svg";

type SvgWrapperProps = {
  img: string;
  alt: string;
};

const SvgWrapper: React.FC<SvgWrapperProps> = ({
  img,
  alt,
}: SvgWrapperProps) => (
  <div className="w-16 md:w-20 inline-block pb-2 md:pb-4 text-[#505050]">
    <Image src={img} alt={alt} />
  </div>
);

export const LightBulbLogo = () => (
  <SvgWrapper img={lightBulb} alt="Light bulb logo" />
);

export const FamilyLogo = () => <SvgWrapper img={family} alt="Family logo" />;

export const HealthLogo = () => (
  <SvgWrapper img={health} alt="Heart in hand logo" />
);
