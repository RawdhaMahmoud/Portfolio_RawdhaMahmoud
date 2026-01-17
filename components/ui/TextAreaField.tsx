export default function TextAreaField({ label, id, rows = 5, required = false }: { label: string; id: string; rows?: number; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        required={required}
        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
      ></textarea>
    </div>
  );
}
