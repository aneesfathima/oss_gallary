import { BadgeCheck, CopyCheck, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const FeatureSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-xl text-left font-bold">Featured</h1>
      {/* cards container */}
      <div className="flex md:flex-row gap-3 pt-4 pb-16 border-b border-gray-200 sm:flex-col">
        {/* card 1 */}
        <div className="relative w-full flex flex-col h-80 shadow-sm hover:-translate-y-1 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
          <div className="bg-linear-to-tr from-black via-stone-800 to-stone-500 h-2/5"></div>
          <div className="h-3/5 px-4">
            <div className="flex items-center justify-between -translate-y-8">
              <div className="h-16 w-16 p-2 bg-white rounded-full flex items-center justify-center shadow-md">
                <Image
                  src="/shadcn.png"
                  alt="shadcn"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <Button variant="outline">
                {" "}
                <Star className="w-4 h-4" /> 90,231
              </Button>
            </div>
            <div className=" flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <h2 className="font-bold text-lg">Shadcn/ui</h2>
                <BadgeCheck className="text-blue-700 text-sm" />
              </div>
              <p>
                Beautifully designed components that you can copy and paste into
                your apps. Accessible...
              </p>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="relative w-full  shadow-sm hover:-translate-y-1 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
          {/* top colored section */}
          <div className="h-24  bg-linear-to-tr from-black via-stone-800 to-stone-500">
            <button className="absolute flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 mt-20 ml-39 rounded-sm">
              <Star className="w-4 h-4" />
              1,234
            </button>
            {/* logo & circle section */}
            <div className="absolute mt-17 ml-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
              <Image
                src="/logo.jpg" // replace with your logo
                alt="oss gallery Logo"
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
              />
            </div>
          </div>
          {/* bottom text  */}
          <h1 className="text-xl  px-4 font-bold mt-10 mb-1">OSS Gallery</h1>
          <CopyCheck className="text-blue-700 text-sm ml-47 -mt-8 mb-2" />
          <p className="text-gray-500 px-4 text-sm">
            A crowdsourced list of the best open-source projects on the
            internet.
          </p>
        </div>
        {/* card 3 */}
        <div className="relative w-full  shadow-sm hover:-translate-y-1 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
          {/* top colored section */}
          <div className="h-24  bg-linear-to-tr from-black via-stone-800 to-stone-500">
            <button className="absolute flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 mt-20 ml-39 rounded-sm">
              <Star className="w-4 h-4" />
              21,817
            </button>
            {/* logo & circle section */}
            <div className="absolute mt-17 ml-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
              <Image
                src="/dub.png" // replace with your logo
                alt="Dub Logo"
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
              />
            </div>
          </div>
          {/* bottom text  */}
          <h1 className="text-xl  px-4 font-bold mt-10 mb-1">Dub</h1>
          <CopyCheck className="text-blue-700 text-sm ml-34 -mt-8 mb-2" />
          <p className="text-gray-500 px-4 text-sm overflow-hidden">
            Open-source link management infrastructure for modern marketing
            teams. Loved by world..
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
