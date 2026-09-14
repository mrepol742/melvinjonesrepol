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
      className={`flex items-center gap-2 border border-stone-300 bg-white px-4 py-3 text-stone-950
                 transition-all duration-300 focus-within:border-orange-500 focus-within:shadow-[3px_3px_0_0_rgb(249_115_22)] focus-within:-translate-y-[1px]
                 dark:border-orange-500/35 dark:bg-zinc-900 dark:text-stone-100 ${className}`}
    >
      <span className="flex shrink-0 items-center justify-center text-orange-600 dark:text-orange-400">
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
