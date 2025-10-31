"use client";
import Image from "next/image";
import { Star, BookOpen, CheckCircle, ScatterChartIcon, StarHalfIcon, CircleCheckBig, CopyCheck } from "lucide-react";

export default function AllProjects() {
  return (
    <div className="bg-gray-100 h-screen">
        <h1 className="text-xl text-left font-bold pl-60">All Projects</h1>

        {/* cards container */} 
      <div className="flex flex-row gap-3 px-60 pt-4">
        {/* card 1 */}
        <div className="relative w-65 h-65 shadow-2xl rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
          {/* top colored section */}
          <div className="h-24  bg-linear-to-tr from-green-100 to-blue-50"> 
            <button className="absolute flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 mt-20 ml-39 rounded-sm"><Star className="w-4 h-4" />422,026</button>
            {/* logo & circle section */}
            <div className="absolute mt-17 ml-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
              <img
                src="/freecodecamp.png" // replace with your logo
                alt="freecodecamp Logo"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
          {/* bottom text  */}
          <h1 className="text-xl  px-4 font-bold mt-10 mb-1"> freeCodeCamp </h1>
          <CopyCheck className="text-blue-700 text-sm ml-43 -mt-8 mb-2"/>
          <p className="text-gray-500 px-4 text-sm">freecodecamp.org's open-source codebase and curriculum. Learn to code for free.</p>
        </div>

        {/* card 2 */}
        <div className="w-65 h-65 shadow-2xl rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
          {/* top colored section */}
          <div className="h-24  bg-linear-to-tr from-blue-50 to-blue-200"> 
            <button className="absolute flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 mt-20 ml-39 rounded-sm"><Star className="w-4 h-4" />394,427</button>
            {/* logo & circle section */}
            <div className="absolute mt-17 ml-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
              <img
                src="/buildx.jpeg" // replace with your logo
                alt="Build-X Logo"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
          {/* bottom text  */}
          <h1 className="text-xl  px-4 font-bold mt-10 mb-1">build-your-own-X </h1>
          <CopyCheck className="text-blue-700 text-sm ml-47 -mt-8 mb-2"/>
          <p className="text-gray-500 px-4 text-sm">Master Programming by recreating your favorite technologies from your scartch</p>
        </div>
        {/* card 3 */}
        <div className="w-65 h-65 shadow-2xl rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
          {/* top colored section */}
          <div className="h-24  bg-linear-to-tr from-pink-50 to-pink-200"> 
            <button className="absolute flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 mt-20 ml-39 rounded-sm"><Star className="w-4 h-4" />354,682</button>
            {/* logo & circle section */}
            <div className="absolute mt-17 ml-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
              <img
                src="/public_api.png" // replace with your logo
                alt="public APIs Logo"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
          {/* bottom text  */}
          <h1 className="text-xl  px-4 font-bold mt-10 mb-1">Public-apis </h1>
          <CopyCheck className="text-blue-700 text-sm ml-34 -mt-8 mb-2"/>
          <p className="text-gray-500 px-4 text-sm">A Collective list of free APIs</p>
        </div>



      </div>       
    </div>
  );
}
