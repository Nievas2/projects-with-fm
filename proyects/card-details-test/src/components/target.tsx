import Bg from "@/images/bg-main-desktop.png"
import BgCardBack from "@/images/bg-card-back.png"
import BgCardFront from "@/images/bg-card-front.png"
import Image from "next/image"
import "@/app/globals.css"
export default function Target() {
  return (
    <main className="container">
      <div className="first-section">
        <div className="position-image">
          <div>
            <Image
              src={BgCardFront}
              alt="asd"
              width={230}
              className="shadow-image"
            />
          </div>
          <div>
            <Image
              src={BgCardBack}
              alt="asd"
              width={230}
              style={{
                marginLeft: 40,
                marginTop: 25
              }}
              className="shadow-image"
            />
          </div>
        </div>
      </div>
      <div className="second-section">
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: 300,
            marginLeft: 150
          }}
        >
          <form
            action=""
            style={{ display: "flex", flexDirection: "column", width: "80%" }}
          >
            <label>CARDHOLDER NAME</label>
            <input
              type="text"
              className="rounded-md p-1"
              style={{ border: "1px solid #aaa" }}
            />
            <label htmlFor=""> CARD NUMBER</label>
            <input
              type="text"
              className="rounded-md p-1"
              style={{ border: "1px solid #aaa" }}
            />

            <div style={{ display: "flex", flexDirection: "row", flex: 2 }}>
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="">EXP.DATE (MM/YY)</label>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <input
                    type="text"
                    style={{ border: "1px solid #aaa", width: 80 }}
                  />
                  <input
                    type="text"
                    style={{ border: "1px solid #aaa", width: 80 }}
                  />
                </div>
              </div>
              <div
                style={{ flex: 0.8, display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="">CVC</label>
                <input
                  type="text"
                  style={{ border: "1px solid #aaa", width: 80 }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
