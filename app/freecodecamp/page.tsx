"use client";
import Image from "next/image";
import { Star, BookOpen, CheckCircle, ScatterChartIcon, StarHalfIcon, CircleCheckBig, CopyCheck } from "lucide-react";

export default function FreeCodeCamp() {
  return (
    <div className="bg-gray-100 h-screen">
        <h1 className="text-xl text-left font-bold pl-60">All Projects</h1>
        {/* cards container */}
        <div className="flex flex-row gap-9"> 
            {/* card 1 */}
            <div className="h-65 w-65 bg-amber-300"></div>
            <div className="h-65 w-65 bg-amber-300"></div>
            <div className="h-65 w-65 bg-amber-300"></div>

        </div>
    </div>
  );
}