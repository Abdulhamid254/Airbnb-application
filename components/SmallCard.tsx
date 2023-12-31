"use client"

import Image from "next/image"



function SmallCard({img,distance, location}:any) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100
      hover:scale-105 transition transform duration-200 eae-out">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image
        src={img}
        alt=""
        layout="fill"
        className="rounded-lg"
        />
      </div>

      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard