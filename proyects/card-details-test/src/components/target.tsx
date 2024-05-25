"use client"
import Bg from "@/images/bg-main-desktop.png"
import BgCardBack from "@/images/bg-card-back.png"
import BgCardFront from "@/images/bg-card-front.png"
import Image from "next/image"
import "@/app/globals.css"
import Logo from "@/images/card-logo.svg"
import { ChangeEvent, useState } from "react"
export default function Target() {
  const [value, setValue] = useState("")
  const [cardHolder, setCardHolder] = useState([
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0",
    "-",
    "0",
    "0",
    "0",
    "0"
  ])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value.length)
    if (value.length < 24) {
      setValue(e.target.value)
    }
  }
  return (
    <main className="container">
      <div className="first-section">
        <div className="position-image">
          <div className="back-image">
            <Image
              src={BgCardFront}
              alt="asd"
              width={230}
              className="shadow-image"
            />
            <div className="contentcard">
              <div style={{ width: 84, height: 47, flex: 1 }}>
                <svg
                  width="42"
                  height="23.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="11.739"
                    cy="11.75"
                    rx="11.739"
                    ry="11.75"
                    fill="#fff"
                  />
                  <path
                    d="M41.75 11.75c0 2.782-2.253 5.038-5.033 5.038s-5.033-2.256-5.033-5.038c0-2.782 2.253-5.038 5.033-5.038s5.033 2.256 5.033 5.038Z"
                    stroke="#fff"
                  />
                </svg>
              </div>
              <div
                style={{
                  flex: 1,
                  marginTop: 18,
                  display: "flex",
                  alignItems: "end"
                }}
              >
                <p
                  style={{
                    margin: 0,
                    flex: 1,
                    letterSpacing: "0.1rem",
                    textAlign: "center"
                  }}
                >
                  {/*  {value ? value : "0000 0000 0000 0000"} */}
                  {cardHolder.map((date: string, index: number) => (
                    <p
                      key={crypto.randomUUID()}
                      style={{ display: "inline-block" }}
                    >
                      {index == 4 || index == 9 || index == 14 ? "-" : ""}
                      {index < 4
                        ? value.length > index && value.length != 0
                          ? value[index]
                          : date != "-"
                          ? "0"
                          : ""
                        : ""}

                      {index > 4 && index < 9
                        ? value.length + 1 > index && value.length != 0
                          ? value[index - 1]
                          : date != "-"
                          ? "0"
                          : ""
                        : ""}
                      {index > 9 && index < 14
                        ? value.length + 2 > index && value.length != 0
                          ? value[index - 2]
                          : date != "-"
                          ? "0"
                          : ""
                        : ""}
                      {index > 14
                        ? value.length + 3 > index && value.length != 0
                          ? value[index - 3]
                          : date != "-"
                          ? "0"
                          : ""
                        : ""}
                    </p>
                  ))}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 2,
                  alignItems: "end"
                }}
              >
                <small
                  style={{ flex: 1, fontWeight: "lighter", color: " #aaa" }}
                >
                  Jane Appleseed
                </small>
                <small style={{ flex: 1, textAlign: "end" }}>00/00</small>
              </div>
            </div>
          </div>
          <div className="front-image">
            <Image
              src={BgCardBack}
              alt="asd"
              width={230}
              style={{
                marginLeft: 40,
                top: 155
              }}
              className="shadow-image"
            />
            <div
              className="contentcard"
              style={{
                marginLeft: 40,
                top: 180,
                display: "flex",
                alignItems: "end"
              }}
            >
              <p style={{ marginRight: 10 }}>000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="form-space">
          <form className="form-container">
            <div>
              <label className="label-text">CARDHOLDER NAME</label>
              <input
                type="text"
                className="inputs"
                onChange={(e) => handleChange(e)}
                value={value}
              />
            </div>
            <div>
              <label className="label-text">CARD NUMBER</label>
              <input
                type="text"
                className="inputs"
              />
            </div>
            {/* inputs chicos */}
            <div
              style={{ display: "flex", flexDirection: "row", flex: 2, gap: 8 }}
            >
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <label className="label-text">EXP.DATE (MM/YY)</label>
                <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                  <input
                    type="text"
                    className="inputs-small"
                  />
                  <input
                    type="text"
                    className="inputs-small"
                  />
                </div>
              </div>
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <label className="label-text">CVC</label>
                <input
                  type="text"
                  className="inputs-second-small"
                />
              </div>
            </div>
            <button
              className="button-submit"
              type="submit"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
