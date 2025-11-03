import React from "react";
import { BadgeCheck, CopyCheck, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Freecodecamp() {
  return (
    <div className="h-auto w-full">
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-xl font-bold"> All Projects</h1>
      {/* cards container */}
      <div className="flex flex-row gap-5 p-2">
        {/* card 1 */}
        <div className="relative bg-white flex flex-col w-full h-80 rounded-xl shadow-2xl overflow-hidden hover:cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
          <div className="bg-linear-to-tr from-yellow-100 via-yellow-50 to-yellow-200 h-2/5"></div>
          <div className="h-3/5 px-4">
          <div className="flex items-center justify-between -translate-y-8">
            <div className="w-16 h-16 p-2 rounded-full bg-white flex items-center justify-center">
              <Image
                src="/roadmap.png"
                alt="road map Logo"
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
              />
            </div>
            <Button variant="outline" className="absolute mt-2 ml-36 flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 rounded-sm">
              <Star className="w-4 h-4" />
              54,000
            </Button>
          </div>
          <div>
          <div className="flex flex-row gap-3">
            <h1 className="text-xl font-bold">roadmap.sh</h1>
            <BadgeCheck className="text-blue-700 text-sm" /></div>
            <p className="text-gray-500 text-sm">Interactive roadmaps, guides and other educational content to help developers grow in their careers.</p>
          </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="relative flex flex-col w-full h-80 bg-white shadow-2xl rounded-xl hover:shadow-2xl hover:-translate-y-2 hover:cursor-pointer transition-all duration-300 overflow-hidden">
            <div className="bg-linear-to-tr from-green-100 via-green-50 to-blue-100 h-2/5"></div>
            <div className="h-3/5 px-4">
            <div className="flex items-center justify-between -translate-y-8">
              <div className="w-16 h-16 p-2 rounded-full bg-white flex items-center justify-center">
              <Image
                src="/react.png"
                alt="React Logo"
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
              />
            </div>
            <Button variant="outline" className="absolute mt-2 ml-36 flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 rounded-sm">
              <Star className="w-4 h-4" />
              236,951
            </Button>
          </div>
          <div>
          <div className="flex flex-row gap-3">
            <h1 className="text-xl font-bold">React</h1>
            <BadgeCheck className="text-blue-700 text-sm" /></div>
            <p className="text-gray-500 text-sm">The library for web and native user interfaces.</p>
          </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="relative flex flex-col w-full h-80 bg-white shadow-2xl rounded-xl hover:shadow-2xl hover:-translate-y-2 hover:cursor-pointer transition-all duration-300 overflow-hidden">
            <div className="bg-linear-to-tr from-green-100 via-green-50 to-blue-100 h-2/5"></div>
            <div className="h-3/5 px-4">
            <div className="flex items-center justify-between -translate-y-8">
              <div className="w-16 h-16 p-2 rounded-full bg-white flex items-center justify-center">
              <Image
                src="/vue.png"
                alt="Vue Logo"
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
              />
            </div>
            <Button variant="outline" className="absolute mt-2 ml-36 flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 rounded-sm">
              <Star className="w-4 h-4" />
              209,080
            </Button>
          </div>
          <div>
          <div className="flex flex-row gap-3">
            <h1 className="text-xl font-bold">Vue</h1>
            <BadgeCheck className="text-blue-700 text-sm" /></div>
            <p className="text-gray-500 text-sm">This is the repo for Vue 2. For Vue 3, go to https://github.com/vuejs/core</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
