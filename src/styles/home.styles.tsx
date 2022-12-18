import tw from "twin.macro";

export const Container = tw.div`h-screen`;

export const AboutUs = () => (
  <section tw="bg-white my-auto">
    <div tw="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
      <h1 tw="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl">
        Under Maintenance
      </h1>
      <p tw="font-light text-gray-500 md:text-lg xl:text-xl">
        Yuk Pulih is a community and non-profit organization that aims to raise
        awareness of porn&apos;s negative effects and help people to free
        themselves from porn addiction.
      </p>
    </div>
  </section>
);
