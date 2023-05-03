import Card from "./card.component";
import { FamilyLogo, HealthLogo, LightBulbLogo } from "./icons";

const cardContent = [
  {
    id: 1,
    heading: "Reliable knowledge",
    content:
      "In achieving our highest aspirations, we believe that reliable knowledge can help us overcome that challenges.",
    Icon: LightBulbLogo,
  },
  {
    id: 2,
    heading: "Health principle",
    content:
      "We believe that an effective and stable life is to live in harmony with health principles.",
    Icon: HealthLogo,
  },
  {
    id: 3,
    heading: "We are a family",
    content:
      "We are not just an organization, we are a family. We treat each other as members of a family.",
    Icon: FamilyLogo,
  },
];

const Pillars: React.FC = () => {
  return (
    <section id="our_pillars" className="max-w-full">
      <div className="max-w-[1366px] px-14 mx-auto text-center bg-[#dfdfdf] pt-9 font-normal">
        <h2 className="font-serif text-3xl md:text-[2.5rem] leading-10 ">
          Our pillars
        </h2>
        <div className="max-w-[1088px] mx-auto flex gap-12 gap-y-20 xl:gap-x-24 justify-around flex-wrap place-content-center py-20">
          {cardContent.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
