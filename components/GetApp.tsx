import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]" id="download">
      <div className="get-app">
        {/* LEFT SIDE */}
        <div className="z-20 flex flex-col flex-1 w-full items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[350px]">
            Get for free today!
          </h2>
          <p className="regular-16 text-gray-10">
            Now available on both iOS and Android platforms.
          </p>

          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Download on App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Download on Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
