export default function TextCalculator({
  text,
  number
}: {
  text: string
  number: number | undefined
}) {
  return (
    <main className="flex flex-row align-middle ">
      <p className="text-black tracking-widest text-2xl ">
        <strong className="text-[#854dff] text-6xl">
          {number == 0 || number == undefined ? "--" : number}
        </strong>
      </p>
      <h5 className="text-black tracking-widest text-6xl font-bold">{text}</h5>
    </main>
  )
}
