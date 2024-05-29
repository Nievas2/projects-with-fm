"use client"
import { Dispatch, SetStateAction, useState } from "react"
import { useFormik } from "formik"
export default function Input({
  input,
  label,
  max,
  setResult,
}: {
  input: string
  label: string
  max: number
  setResult: Dispatch<SetStateAction<number>>
}) {
  const [value, setValue] = useState<Number>()
  const [error, setError] = useState<string | undefined>()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) <= max) {
      console.log(Number(event.target.value));
      
      setValue(Number(event.target.value))
      setError(undefined)
      setResult(Number(event.target.value))
    }
    if (Number(event.target.value) == 0) {
      setValue(undefined)
      setError("This field is require")
    }
  }

  const formik = useFormik({
    initialValues: {
      value
    },
    onSubmit: (values : any) => {},
    validationSchema: input.toLocaleLowerCase()
  })
  return (
    <main className="flex flex-col">
      <label className={`text-black tracking-widest  text-xs ${error ? "text-red-500" : ""}`}>
        <strong>{label}</strong>
      </label>
      <input
        className={`max-w-28  p-2 border-[1px] border-slate-400 rounded-md ${error ? "border-red-500" : ""}`}
        type="number"
        onChange={handleChange}
        placeholder={input}
        value={value?.toString()}
        max={2}
      />
      <small className="text-red-500">{error ? error : ""}</small>
    </main>
  )
}
