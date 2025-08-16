import Image from "next/image";
import Link from "next/link";
import ActionButton from "../ActionButton";

const EventCard = ({ event }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f2023] via-[#2c2d30] to-[#18191b] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="relative w-full h-48">
        <Image
          src={event?.imageUrl}
          alt={event?.name}
          fill
          className="object-cover rounded-t-2xl"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          {new Date(event?.date).toLocaleDateString()}
        </div>
      </div>

      <div className="p-4">
        <Link
          href={`/details/${event?.id}`}
          className="block font-bold text-lg text-white hover:text-blue-400 transition-colors"
        >
          {event?.name}
        </Link>

        <p className="text-gray-400 text-sm mt-1">{event?.location}</p>

        <div className="flex items-center gap-4 mt-2 text-sm">
          <span className="text-blue-400 font-semibold">
            {event?.interested_ids?.length} Interested
          </span>
          <span className="text-gray-500">|</span>
          <span className="text-green-400 font-semibold">
            {event?.going_ids?.length} Going
          </span>
        </div>

        <div className="mt-4">
          <ActionButton />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
