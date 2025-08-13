import Image from "next/image";
import React from "react";

const EventList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <div className="overflow-hidden rounded-md bg-[#242526]">
        <Image
          src="/next-event.avif"
          alt="Event 1"
          layout="responsive"
          width={500}
          height={300}
        />

        <div className="p-3">
          <a href="./details.html" className="font-bold text-lg">
            Google I/O Extended
          </a>
          <p className="text-[#9C9C9C] text-sm mt-1">
            Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh
          </p>
          <div className="text-[#737373] text-sm mt-1">
            <span>1k Interested</span>
            <span>|</span>
            <span>40K Going</span>
          </div>

          <div className="w-full flex gap-4 mt-4">
            <button className="w-full">Interested</button>
            <button className="w-full">Going</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
