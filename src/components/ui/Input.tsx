import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Input({
  icon,
  handleChange,
  form,
  clearSearch,
  className,
}: {
  icon: IconProp;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  form: {
    name: string;
    value: string;
    type?: string;
    required?: boolean;
    placeholder?: string;
  };
  clearSearch?: () => void;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-xl border
                 transition-all duration-300
                 focus-within:shadow-md focus-within:-translate-y-[1px] ${className}`}
    >
      <span className="flex items-center justify-center shrink-0 opacity-70">
        <FontAwesomeIcon icon={icon} size="sm" />
      </span>
      <input
        type={form.type || "text"}
        name={form.name}
        value={form.value}
        onChange={handleChange}
        required={form.required || false}
        placeholder={form.placeholder || ""}
        className="w-full outline-none bg-transparent placeholder:opacity-60"
      />

      {clearSearch && (
        <button
          type="button"
          onClick={clearSearch}
          aria-label="Clear search"
          className={`flex items-center justify-center transition-all duration-200
                     ${form.value ? "opacity-70 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
        >
          <FontAwesomeIcon icon={faX} size="xs" />
        </button>
      )}
    </div>
  );
}
