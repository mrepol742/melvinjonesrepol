import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({
  children,
  icon,
  className,
  onClick,
}: {
  children: React.ReactNode;
  icon?: IconProp;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded uppercase text-sm relative px-7 py-4 mt-3 font-semibold overflow-hidden shadow-none transition-transform duration-200 hover:translate-x-1 hover:translate-y-1
    before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-full before:h-1 before:rounded-b-lg
    after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-1 after:h-full after:rounded-r-lg ${className}`}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} className="inline mr-2" size="xl" />
      )}
      {children}
    </button>
  );
}
