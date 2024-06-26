import Icon from "@/images/icon-complete.svg"
import "@/app/globals.css"
export default function Succes({...props}) {
  return (
    <main className="succes-form">
      <div>
        <svg
          width="80"
          height="80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="40"
            cy="40"
            r="40"
            fill="url(#a)"
          />
          <path
            d="M28 39.92 36.08 48l16-16"
          />
          <defs>
            <linearGradient
              id="a"
              x1="-23.014"
              y1="11.507"
              x2="0"
              y2="91.507"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6348FE" />
              <stop
                offset="1"
                stop-color="#610595"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div>
        <h4 style={{textAlign:"center"}}>THANKS YOU!</h4>
        <h3 style={{textAlign:"center", fontWeight:"lighter"}} >We{"'"}ve added your card details</h3>
      </div>
      <button className="button-submit" onClick={() => props.setSucces(false)}>Continue</button>
    </main>
  )
}
