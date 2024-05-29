"use client"
import { Dispatch, SetStateAction, useState } from "react"

export default function Input({
  input,
  label,
  max,
  setResult
}: {
  input: string
  label: string
  max: number
  setResult: Dispatch<SetStateAction<number>>
}) {
  const [value, setValue] = useState<Number>()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(Number(event.target.value));
    if (Number(event.target.value) <= max) {
      console.log(Number(event.target.value));
      
      setValue(Number(event.target.value))
      setResult(Number(event.target.value))
    }
  }

  
  return (
    <main className="flex flex-col">
      <label className="text-black tracking-widest  text-xs">
        <strong>{label}</strong>
      </label>
      <input
        className="max-w-28  p-2 border-[1px]  border-slate-400 rounded-md "
        type="number"
        onChange={handleChange}
        placeholder={input}
        value={value?.toString()}
        max={2}
      />
    </main>
  )
}
