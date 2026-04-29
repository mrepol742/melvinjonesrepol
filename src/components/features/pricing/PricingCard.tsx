export default function PricingCard({
  title,
  price,
  maintenancePrice,
  currency,
  subtitle,
  items,
}: {
  title: string;
  price: string;
  maintenancePrice?: string;
  currency: string;
  subtitle?: string;
  items: string[];
}) {
  return (
    <div data-aos="fade-up" className="h-full">
      <div className="h-full flex flex-col justify-between rounded-lg border p-6 transition-transform duration-300 hover:-translate-y-1">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>

          <div className="flex items-end gap-2">
            <span className="text-sm opacity-70">Starts at</span>
            <span className="text-3xl font-semibold leading-none">{price}</span>
          </div>

          {(subtitle || maintenancePrice) && (
            <p className="text-sm opacity-70">
              {subtitle}
              {maintenancePrice && (
                <span className="block">{maintenancePrice}</span>
              )}
            </p>
          )}
        </div>

        <div className="my-6 border-t" />

        <ul className="space-y-3 text-sm flex-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 text-xs">●</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
