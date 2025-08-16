// components/details/EventVenue.jsx
const EventVenue = ({ location }) => {
  const mapQuery = encodeURIComponent(location);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <div className="overflow-hidden rounded-lg col-span-2 bg-[#242526]">
      <div className="w-full h-[450px]">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="p-4">
        <p className="text-[#9C9C9C] text-base mt-1">{location}</p>
      </div>
    </div>
  );
};

export default EventVenue;
