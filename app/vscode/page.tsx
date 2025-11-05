import React from 'react';
import { Button } from "../../components/ui/button";
import Image from 'next/image';
import { BadgeCheck, Star } from 'lucide-react';

const VsCode = () => {
  return (
    <div className="h-auto w-full sm:flex-col px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* cards container */}
          <div className="flex flex-row gap-5 p-2">
            {/* card 1 */}
            <div className="relative bg-white flex flex-col w-full h-80 rounded-xl shadow-2xl overflow-hidden hover:cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
              <div className="bg-linear-to-tr from-pink-100 via-pink-50 to-pink-200 h-2/5"></div>
              <div className="h-3/5 px-4">
              <div className="flex items-center justify-between -translate-y-8">
                <div className="w-16 h-16 p-2 rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/omy.png"
                    alt="omy logo"
                    className="w-10 h-10 rounded-full"
                    width={40}
                    height={40}
                  />
                </div>
                <Button variant="outline" className="absolute mt-2 ml-36 flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 rounded-sm">
                  <Star className="w-4 h-4" />
                  179,634
                </Button>
              </div>
              <div>
              <div className="flex flex-row gap-3">
                <h1 className="text-xl font-bold">ohmyzsh</h1>
                <BadgeCheck className="text-blue-700 text-sm" /></div>
                <p className="text-gray-500 text-sm">🙃 A delightful community-driven (with 2,300+ contributors) framework for managing your zsh configuration. Includes 300+ optional plugins </p>
              </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="relative flex flex-col w-full h-80 bg-white shadow-2xl rounded-xl hover:shadow-2xl hover:-translate-y-2 hover:cursor-pointer transition-all duration-300 overflow-hidden">
                <div className="bg-linear-to-tr from-purple-100 via-violet-50 to-blue-100 h-2/5"></div>
                <div className="h-3/5 px-4">
                <div className="flex items-center justify-between -translate-y-8">
                  <div className="w-16 h-16 p-2 rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/vscode.png"
                    alt="vscode Logo"
                    className="w-10 h-10 rounded-full"
                    width={40}
                    height={40}
                  />
                </div>
                <Button variant="outline" className="absolute mt-2 ml-36 flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 rounded-sm">
                  <Star className="w-4 h-4" />
                  174,170
                </Button>
              </div>
              <div>
              <div className="flex flex-row gap-3">
                <h1 className="text-xl font-bold">VsCode</h1>
                <BadgeCheck className="text-blue-700 text-sm" /></div>
                <p className="text-gray-500 text-sm">Visual Studio Code</p>
              </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="relative flex flex-col w-full h-80 bg-white shadow-2xl rounded-xl hover:shadow-2xl hover:-translate-y-2 hover:cursor-pointer transition-all duration-300 overflow-hidden">
                <div className="bg-linear-to-tr from-purple-100 via-violet-50 to-blue-100 h-2/5"></div>
                <div className="h-3/5 px-4">
                <div className="flex items-center justify-between -translate-y-8">
                  <div className="w-16 h-16 p-2 rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/bootstrap.png"
                    alt="boostrap Logo"
                    className="w-10 h-10 rounded-full"
                    width={40}
                    height={40}
                  />
                </div>
                <Button variant="outline" className="absolute mt-2 ml-36 flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 rounded-sm">
                  <Star className="w-4 h-4" />
                  172,486
                </Button>
              </div>
              <div>
              <div className="flex flex-row gap-3">
                <h1 className="text-xl font-bold">Bootstrap</h1>
                <BadgeCheck className="text-blue-700 text-sm" /></div>
                <p className="text-gray-500 text-sm">The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default VsCode
