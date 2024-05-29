export default function Input({
  input,
  label
}: {
  input: string
  label: string
}) {
  return (
    <main className="flex flex-col">
      <label className="text-black tracking-widest  text-xs">
        <strong>{label}</strong>
      </label>
      <input
        className="max-w-28  p-2 border-[1px]  border-slate-400 rounded-md "
        type="text"
        placeholder={input}
      />
    </main>
  )
}
