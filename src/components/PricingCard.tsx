export default function PricingCard({
  title,
  price,
  subtitle,
  items,
}: {
  title: string;
  price: string;
  subtitle?: string;
  items: string[];
}) {
  return (
    <div data-aos="fade-up">
      <div className="bg-black/10 backdrop-blur rounded p-6 hover:scale-98 transition-transform duration-300">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <p className="text-2xl font-bold mb-1">
          <span className="text-sm font-medium text-gray-500 mr-1">
            Starts at
          </span>
          {price}
        </p>

        {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}

        <ul className="space-y-2 text-gray-700 text-sm">
          {items.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
