interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}

export default function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  required,
}: Props) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-sm font-medium text-muted-foreground text-white"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-[#EAEBD0] transition-all duration-300 focus:outline-none focus:border-primary/50 focus:shadow-glow resize-none"
      />
    </div>
  );
}
