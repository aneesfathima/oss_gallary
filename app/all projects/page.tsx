"use client";
import { Button } from "@/components/ui/button";
import { CopyCheck, Star, BadgeCheck } from "lucide-react";
import Image from "next/image";

export default function AllProjects() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-xl text-left font-bold">All Projects</h1>
      {/* cards container */}
      <div className="flex md:flex-row gap-3 pt-4 pb-16 sm:flex-col">
        {/* card 1 */}
        <div className="relative w-full flex flex-col h-80 shadow-sm hover:-translate-y-1 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
          <div className="bg-linear-to-tr from-green-100 via-green-50 to-blue-100 h-2/5"></div>
          <div className="h-3/5 px-4">
            <div className="flex items-center justify-between -translate-y-8">
              <div className="h-16 w-16 p-2 bg-white rounded-full flex items-center justify-center shadow-md">
                <Image
                  src="/freecodecamp.png"
                  alt="Freecodecamp"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <Button variant="outline">
                {" "}
                <Star className="w-4 h-4" />422,026
              </Button>
            </div>
            <div className=" flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <h2 className="font-bold text-lg">freecodecamp</h2>
                <BadgeCheck className="text-blue-700 text-sm" />
              </div>
              <p>
                freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.
              </p>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="relative w-full  shadow-sm hover:-translate-y-1 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
          {/* top colored section */}
          <div className="h-24  bg-linear-to-tr from-cyan-100 via-cyan-50 to-cyan-200">
            <button className="absolute flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 mt-20 ml-39 rounded-sm">
              <Star className="w-4 h-4" />
              394,427
            </button>
            {/* logo & circle section */}
            <div className="absolute mt-17 ml-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
              <Image
                src="/buildx.jpeg" // replace with your logo
                alt="Build Your Own X Logo"
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
              />
            </div>
          </div>
          {/* bottom text  */}
          <h1 className="text-xl  px-4 font-bold mt-10 mb-1">build-your-own-x</h1>
          <CopyCheck className="text-blue-700 text-sm ml-47 -mt-8 mb-2" />
          <p className="text-gray-500 px-4 text-sm">
            Master programming by recreating your favorite technologies from scratch.
          </p>
        </div>
        {/* card 3 */}
        <div className="relative w-full  shadow-sm hover:-translate-y-1 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
          {/* top colored section */}
          <div className="h-24  bg-linear-to-tr from-pink-100 via-pink-50 to-pink-200">
            <button className="absolute flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 mt-20 ml-39 rounded-sm">
              <Star className="w-4 h-4" />
              384,682
            </button>
            {/* logo & circle section */}
            <div className="absolute mt-17 ml-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
              <Image
                src="/public_api.png" // replace with your logo
                alt="public-apis Logo"
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
              />
            </div>
          </div>
          {/* bottom text  */}
          <h1 className="text-xl  px-4 font-bold mt-10 mb-1">public-apis</h1>
          <CopyCheck className="text-blue-700 text-sm ml-34 -mt-8 mb-2" />
          <p className="text-gray-500 px-4 text-sm overflow-hidden">
            A collective list of free APIs
          </p>
        </div>
      </div>
    </div>
  );
}
