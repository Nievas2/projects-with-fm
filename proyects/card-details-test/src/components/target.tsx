import Bg from "@/images/bg-main-desktop.png"
import BgCardBack from "@/images/bg-card-back.png"
import BgCardFront from "@/images/bg-card-front.png"
import Image from "next/image"
export default function Target() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
        height: "80vh",
        width: "120vh",
        position: "relative",
        backgroundColor: "white"
      }}
    >
      <div style={{ flex: 1 }}>
        <div
          style={{
            position: "absolute",
            top: "5rem",
            left: "5rem",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Image
            src={BgCardFront}
            alt="asd"
            width={230}
            style={{ boxShadow:"1px 1px 8px #000"}}
          />
          <Image
            src={BgCardBack}
            alt="asd"
            width={230}
            style={{ marginLeft: 40, marginTop: 25, boxShadow:"1px 1px 8px #000" }}
          />
        </div>
        <div style={{ height: "100%" }}>
          <Image
            src={Bg}
            alt="asd"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
      <div
        style={{
          flex: 2,
          display: "flex",
          justifyContent: "end",
          alignItems: "center"
        }}
      >
        <div>
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
