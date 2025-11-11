import React from "react";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative flex flex-row items-center justify-between w-full py-2 border-b">
      <div className="flex items-center justify-between max-w-3xl w-full px-4 md:px-0  mx-auto">
        <Image
          src="/logomark.svg"
          alt="logo Image"
          width={95}
          height={75}
          priority
        />
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="hover:ring-gray-200 hover:ring-4"
          >
            <Star size={16} className="text-gray-500" />
            <span className="text-gray-500">0</span>
          </Button>

          <Button variant="default" className="hover:ring-gray-200 ring-4">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
