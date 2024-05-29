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
      <div className="w-full max-w-2xl items-center rounded-2xl radius-br bg-white p-5 sm:p-10">
        <section className="flex flex-1 flex-col relative border-b-2 mb-10 sm:mb-0">
          <form className="flex flex-wrap mb-4 sm:mb-0 place-content-around pb-5 mr-0 sm:mr-28 ">
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
          <div className="flex sm:absolute sm:right-0 bottom-[-37px] place-content-center">
            <div className="self-end max-w-[78px] mb-[-40px] sm:mb-0 rounded-full bg-[#854dff] p-4">
              <Arrow />
            </div>
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
