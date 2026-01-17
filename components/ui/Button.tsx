export default function Button({ text }: { text: string }) {
  return (
    <button
      type="submit"
      className="w-full px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
    >
      {text}
    </button>
  );
}