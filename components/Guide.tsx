import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/trail-gray.svg" alt="camp" width={30} height={30} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          plan your journey
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[500px]">
            We're Making Adventure Easy
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Create and customize your routes for hiking, camping, and climbing
            with detailed maps and guides to ensure your trip is perfectly
            tailored to your needs. Stay informed and safe with real-time alerts
            and never forget an essential item again with Trailblazer’s AI
            assistant, which helps you create custom packing checklists for your
            specific trip. We make adventure planning effortless so you can enjoy every
            moment of your outdoor experience with Trailblazer!
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Achray Campground</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Starting Point</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
              Grand Lake
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
