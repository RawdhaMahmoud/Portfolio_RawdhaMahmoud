interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

export default function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: Props) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-sm font-medium text-muted-foreground text-white "
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl text-gray-500 bg-muted/50 border border-border text-foreground placeholder:text-[#EAEBD0] transition-all duration-300 focus:outline-none focus:border-primary/50 focus:shadow-glow"
      />
    </div>
  );
}
