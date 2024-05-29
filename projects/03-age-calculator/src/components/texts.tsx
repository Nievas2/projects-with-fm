import TextCalculator from "./textCalculator"

export default function Texts({
  years,
  months,
  days
}: {
  years: number
  months: number
  days: number
}) {
  let yearsDate
  let monthsDate
  let daysDate
  if (years > 0 && years.toString().length > 3 && months > 0 && days > 0) {
    const birthDateObj = new Date(years, months - 1, days)
    const currentDate = new Date()

    const timeDifference = currentDate.getTime() - birthDateObj.getTime()

    const ageInMilliseconds = new Date(timeDifference)
    yearsDate = ageInMilliseconds.getUTCFullYear() - 1970
    monthsDate = ageInMilliseconds.getUTCMonth()
    daysDate = ageInMilliseconds.getUTCDate() - 1
  }

  return (
    <main>
      <TextCalculator
        number={yearsDate}
        text="years"
      />
      <TextCalculator
        number={monthsDate}
        text="months"
      />
      <TextCalculator
        number={daysDate}
        text="days"
      />
    </main>
  )
}
