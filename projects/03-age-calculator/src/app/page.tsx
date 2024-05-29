"use client"
import Input from "@/components/input"
import Image from "next/image"
import Arrow from "@/components/arrow"
import TextCalculator from "@/components/textCalculator"
import { useState } from "react"
import Texts from "@/components/texts"
export default function Home() {
  const [years, setYears] = useState(0)
  const [months, setMonths] = useState(0)
  const [days, setDays] = useState(0)

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-2xl items-center rounded-2xl radius-br bg-white p-10">
        <section className="flex flex-1 relative">
          <form className="flex flex-1 place-content-around border-b-2 pb-5 mr-28">
            <Input
              input="DD"
              label="DAY"
              setResult={setDays}
              max={31}
            />
            <Input
              input="MM"
              label="MONTH"
              setResult={setMonths}
              max={12}
            />
            <Input
              input="YYYY"
              label="YEAR"
              setResult={setYears}
              max={2025}
            />
          </form>
          <div className="absolute right-0 bottom-[-37px] rounded-full bg-[#854dff] p-4">
            <Arrow />
          </div>
        </section>
        <section className="mt-8">
          <Texts
            days={days}
            months={months}
            years={years}
          />
        </section>
      </div>
    </main>
  )
}
