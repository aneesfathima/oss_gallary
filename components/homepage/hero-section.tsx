import { BookOpenText, Link2 } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="items-center flex justify-center h-[65vh] space-y-4 flex-col">
      <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-white rounded-full border-gray-100">
        <BookOpenText size={16} className="text-gray-700" />
        <span className="text-gray-700 text-sm">How we built OSS Gallery</span>
      </button>
      <h1 className="text-5xl md:text-6xl text-center max-w-2xl font-bold tracking-tight bg-linear-to-br from-black to-stone-500 text-transparent bg-clip-text">
        Discover the best <br /> open-source projects
      </h1>
      <h1 className="text-gray-600 text-xl -mb-1">
        A crowdsourced list of the best open-
      </h1>
      <h1 className="text-gray-600 text-xl">
        source projects on the internet.
      </h1>
      <div className="relative h-12">
        <input
          type="text"
          placeholder="Search for a project"
          className="w-125 pl-8 py-2 shadow-2xl border border-gray-400 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-600 "
        />
        <Link2
          size={20}
          className="text-gray-400 absolute -top-0.5 left-2 h-full "
        />
      </div>
    </div>
  );
};

export default HeroSection;
