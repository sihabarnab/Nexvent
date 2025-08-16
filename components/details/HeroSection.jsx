import Image from "next/image";
import ActionButton from "../ActionButton";
const HeroSection = ({ eventInfo }) => {
  return (
    <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={eventInfo?.imageUrl}
          alt={eventInfo?.name}
          className="h-[450px] mx-auto"
          width={900}
          height={900}
        />
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mt-6 gap-4">
        {/* Event Info */}
        <div className="flex-auto py-4">
          <h1 className="font-extrabold text-3xl md:text-4xl text-gray-100">
            {eventInfo?.name}
          </h1>
          <p className="text-gray-400 text-lg mt-1">{eventInfo?.location}</p>

          <div className="flex items-center gap-4 mt-2 text-sm">
            <span className="text-blue-400 font-semibold hover:text-blue-500 transition-colors cursor-pointer">
              {eventInfo?.interested_ids?.length} Interested
            </span>
            <span className="text-gray-500">|</span>
            <span className="text-green-400 font-semibold hover:text-green-500 transition-colors cursor-pointer">
              {eventInfo?.going_ids?.length} Going
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <ActionButton fromDetails={true} />
      </div>
    </section>
  );
};

export default HeroSection;
