import Input from "@/components/input"
import Image from "next/image"
import Arrow from "@/components/arrow"
import TextCalculator from "@/components/textCalculator"
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-2xl items-center rounded-2xl radius-br bg-white p-10">
        <section className="flex flex-1 relative">
          <form className="flex flex-1 place-content-around border-b-2 pb-5 mr-28">
            <Input input="DD" label="DAY" />
            <Input input="MM" label="MONTH" />
            <Input input="YYYY" label="YEAR" />
          </form>
          <div className="absolute right-0 bottom-[-37px] rounded-full bg-[#854dff] p-4">
            <Arrow/>
          </div>
    
        </section>
        <section className="mt-8">
          <TextCalculator number={21} text="years"/>
          <TextCalculator number={10} text="months"/>
          <TextCalculator number={30} text="days"/>
        </section>
      </div>
    </main>
  )
}
