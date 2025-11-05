import React from 'react';
import { Button } from "../../components/ui/button";
import Image from 'next/image';
import { BadgeCheck, Star } from 'lucide-react';

const Flutter = () => {
  return (
    <div className="h-auto w-full sm:flex-col px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* cards container */}
          <div className="flex flex-row gap-5 p-2">
            {/* card 1 */}
            <div className="relative bg-white flex flex-col w-full h-80 rounded-xl shadow-2xl overflow-hidden hover:cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
              <div className="bg-linear-to-tr from-green-100 via-green-50 to-blue-100 h-2/5"></div>
              <div className="h-3/5 px-4">
              <div className="flex items-center justify-between -translate-y-8">
                <div className="w-16 h-16 p-2 rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/flutter.png"
                    alt="flutter Logo"
                    className="w-10 h-10 rounded-full"
                    width={40}
                    height={40}
                  />
                </div>
                <Button variant="outline" className="absolute mt-2 ml-36 flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 rounded-sm">
                  <Star className="w-4 h-4" />
                  171,260
                </Button>
              </div>
              <div>
              <div className="flex flex-row gap-3">
                <h1 className="text-xl font-bold">flutter</h1>
                <BadgeCheck className="text-blue-700 text-sm" /></div>
                <p className="text-gray-500 text-sm">Flutter makes it easy and fast to build beautiful apps for mobile and beyond</p>
              </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="relative flex flex-col w-full h-80 bg-white shadow-2xl rounded-xl hover:shadow-2xl hover:-translate-y-2 hover:cursor-pointer transition-all duration-300 overflow-hidden">
                <div className="bg-linear-to-tr from-cyan-100 via-cyan-50 to-cyan-200 h-2/5"></div>
                <div className="h-3/5 px-4">
                <div className="flex items-center justify-between -translate-y-8">
                  <div className="w-16 h-16 p-2 rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/ollamma.png"
                    alt="Ollamma Logo"
                    className="w-10 h-10 rounded-full"
                    width={40}
                    height={40}
                  />
                </div>
                <Button variant="outline" className="absolute mt-2 ml-36 flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 rounded-sm">
                  <Star className="w-4 h-4" />
                  143,515
                </Button>
              </div>
              <div>
              <div className="flex flex-row gap-3">
                <h1 className="text-xl font-bold">ollama</h1>
                <BadgeCheck className="text-blue-700 text-sm" /></div>
                <p className="text-gray-500 text-sm">Get up and running with Llama 3, Mistral, Gemma, and other large language models.</p>
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
                    src="/nextjs.png"
                    alt="Next.js Logo"
                    className="w-10 h-10 rounded-full"
                    width={40}
                    height={40}
                  />
                </div>
                <Button variant="outline" className="absolute mt-2 ml-36 flex items-center gap-1 border border-black bg-gray-100 py-1 px-1 text-sm text-gray-500 rounded-sm">
                  <Star className="w-4 h-4" />
                  132,893
                </Button>
              </div>
              <div>
              <div className="flex flex-row gap-3">
                <h1 className="text-xl font-bold">Next.js</h1>
                <BadgeCheck className="text-blue-700 text-sm" /></div>
                <p className="text-gray-500 text-sm">The React Framework for the Web.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Flutter
