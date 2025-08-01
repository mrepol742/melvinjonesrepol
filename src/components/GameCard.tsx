interface GameType {
  name: string;
  playtime_hours: number;
  cover_url: string;
}

export default function GameCard({
  name,
  playtime_hours,
  cover_url,
}: GameType) {
  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-lg h-48 flex items-end hover:scale-95 transition-transform duration-300"
      style={{
        backgroundImage: `url(${cover_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-transparent absolute bottom-0 left-0 p-3">
        <h2 className="text-white text-lg font-semibold truncate">{name}</h2>
        <p className="text-gray-300 text-sm">{playtime_hours} hours played</p>
      </div>
    </div>
  );
}
