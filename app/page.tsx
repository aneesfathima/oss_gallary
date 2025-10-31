"use client";
import Image from "next/image";
import { Star, BookOpen, CopyCheck } from "lucide-react";
import AllProjects from "./all projects/page";

export default function Home() {
  return (
<div className="bg-gray-100 h-screen">
    <div className="flex pl-60 pt-4">
  <Image
    src="/logomark.svg"
    alt="logo Image"
    width={95}
    height={75}
    priority/></div>
    {/* header submit div */}
  <div className="relative flex flex-row pl-220 -mt-7 gap-2.5">
  <button className=" items-center flex gap-1 px-3 py-1 border border-gray-300 bg-white rounded-md hover:cursor-pointer hover:border hover:border-black  hover:shadow-md transition-all duration-300 box-shadow">
        <Star size={16} className="text-gray-500" />
        <span className="text-gray-500">0</span>
      </button>
  <button type="submit" className="bg-black text-white rounded-lg  px-2 py-0.5 hover:cursor-pointer hover:shadow-md transform-3d box-content"> Submit</button>
  </div>
 {/* hero section div */}
  <div className="items-center flex justify-center h-[65vh] space-y-4 flex-col">
    <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-white rounded-full border-gray-100">
        <BookOpen size={16} className="text-gray-700" />
        <span className="text-gray-700 text-sm">How we built OSS Gallery</span>
      </button>
      <h1 className="text-5xl font-extrabold">Discover the best </h1>
      <h1 className="text-5xl font-extrabold"> open-source projects</h1>
      <h1 className="text-gray-600 text-xl -mb-1">A crowdsourced list of the best open-</h1>
      <h1 className="text-gray-600 text-xl">source projects on the internet.</h1>
      <div>
    <input
      type="text"
      placeholder="Search for a project"
      className="w-125 px-2 py-2 shadow-2xl border border-gray-400 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-600 "
    /></div> </div>
    {/* Featured heading */}
    <h1 className="text-xl text-left font-extrabold pl-60">Featured</h1>
    {/* card section 1st row */}
    <div className="h-screen bg-gray-100">
      {/* cards container */} 
      <div className="flex flex-row gap-3 px-60 pt-4 mb-8">
        {/* card 1 */}
        <div className="relative w-65 h-65 shadow-2xl rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
          {/* top colored section */}
          <div className="h-24  bg-linear-to-tr from-black to-blue-50"> 
            <button className="absolute flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 mt-20 ml-39 rounded-sm"><Star className="w-4 h-4" />90,231</button>
            {/* logo & circle section */}
            <div className="absolute mt-17 ml-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
              <img
                src="/shadcn.png" // replace with your logo
                alt="schadcn Logo"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
          {/* bottom text  */}
          <h1 className="text-xl  px-4 font-bold mt-10 mb-1"> shadcn/ui </h1>
          <CopyCheck className="text-blue-700 text-sm ml-43 -mt-8 mb-2"/>
          <p className="text-gray-500 px-4 text-sm">Beautifully designed components that you can copy and paste into your apps. Accessible..</p>
        </div>

        {/* card 2 */}
        <div className="w-65 h-65 shadow-2xl rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
          {/* top colored section */}
          <div className="h-24  bg-linear-to-tr from-black to-blue-50"> 
            <button className="absolute flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 mt-20 ml-39 rounded-sm"><Star className="w-4 h-4" />1,234</button>
            {/* logo & circle section */}
            <div className="absolute mt-17 ml-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
              <img
                src="/logo.jpg" // replace with your logo
                alt="oss gallery Logo"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
          {/* bottom text  */}
          <h1 className="text-xl  px-4 font-bold mt-10 mb-1">OSS Gallery</h1>
          <CopyCheck className="text-blue-700 text-sm ml-47 -mt-8 mb-2"/>
          <p className="text-gray-500 px-4 text-sm">A crowdsourced list of the best open-source projects on the internet.</p>
        </div>
        {/* card 3 */}
        <div className="w-65 h-65 shadow-2xl rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
          {/* top colored section */}
          <div className="h-24  bg-linear-to-tr from-black to-blue-50"> 
            <button className="absolute flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 mt-20 ml-39 rounded-sm"><Star className="w-4 h-4" />21,817</button>
            {/* logo & circle section */}
            <div className="absolute mt-17 ml-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
              <img
                src="/dub.png" // replace with your logo
                alt="Dub Logo"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
          {/* bottom text  */}
          <h1 className="text-xl  px-4 font-bold mt-10 mb-1">Dub</h1>
          <CopyCheck className="text-blue-700 text-sm ml-34 -mt-8 mb-2"/>
          <p className="text-gray-500 px-4 text-sm overflow-hidden">Open-source link management infrastructure for modern marketing teams. Loved by world..</p>
        </div>     
    </div>
    <AllProjects/> 
    </div> 
  </div>  
  );
}
