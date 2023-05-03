import Image from "next/image";
import heroImg from "public/images/hero-logo-img.png";
import PrimaryBtn from "../../elements/buttons/primary-button.component";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="max-w-full">
      <div className="flex flex-col-reverse md:flex-row gap-8 max-w-screen-xl px-14 mx-auto items-center justify-center text-center md:text-left py-12 md:py-24">
        <div className="md:max-w-[50%] lg:pr-8">
          <h1 className="text-xl sm:text-2xl md:text-[1.75rem] md:leading-10 font-serif pb-6">
            We are a non-profit organization with mission to raise awareness of
            porn’s negative effects and help addicts to free themselves from
            porn addiction.
          </h1>
          <div className="flex gap-4 flex-col justify-items-center lg:flex-row sm:max-w-[75%] md:max-w-full mx-auto">
            <PrimaryBtn>I&apos;m an addict</PrimaryBtn>
            <PrimaryBtn>I want to be a volunteer</PrimaryBtn>
          </div>
        </div>
        <div className="md:max-w-[50%]">
          <Image src={heroImg} alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
