import Image from "next/image";
import Link from "next/link";

const EventCard = () => {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src="/next-event.avif"
        alt="Event 1"
        layout="responsive"
        className="w-full"
        width={500}
        height={300}
      />

      <div className="p-3">
        <Link href="./details.html" className="font-bold text-lg">
          Google I/O Extended
        </Link>
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
  );
};

export default EventCard;
