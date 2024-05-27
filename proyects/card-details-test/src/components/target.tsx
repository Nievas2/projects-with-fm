"use client"
import * as yup from "yup"
import Bg from "@/images/bg-main-desktop.png"
import BgCardBack from "@/images/bg-card-back.png"
import BgCardFront from "@/images/bg-card-front.png"
import Image from "next/image"
import "@/app/globals.css"
import Logo from "@/images/card-logo.svg"
import { ChangeEvent, useState } from "react"
import { useFormik } from "formik"
import { schemaCard } from "@/services/schema"
import Succes from "./succes"
export default function Target() {
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
  const [succes, setSucces] = useState(false)
  const formik = useFormik({
    initialValues: {
      cardHolder: "",
      cardNumber: "",
      expiryDateMM: "",
      expiryDateYY: "",
      cvc: ""
    },
    validationSchema: schemaCard,
    enableReinitialize: true,
    onSubmit: (values) => {
      setSucces(true)
      formik.resetForm()
    }
  })

  return (
    <main className="container">
      <div className="first-section">
        <div className="position-image">
          <div>
            <Image
              src={BgCardFront}
              alt="asd"
              width={230}
              className="shadow-image back-image"
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
                {cardHolder.map((date: string, index: number) => (
                  <p
                    style={{
                      margin: 0,
                      flex: 1,
                      letterSpacing: "0.1rem",
                      textAlign: "center",
                      display: "inline-block"
                    }}
                    key={crypto.randomUUID()}
                  >
                    {index == 4 || index == 9 || index == 14 ? "-" : ""}
                    {index < 4
                      ? formik.values.cardNumber.length > index &&
                        formik.values.cardNumber.length != 0
                        ? formik.values.cardNumber[index]
                        : date != "-"
                        ? "0"
                        : ""
                      : ""}

                    {index > 4 && index < 9
                      ? formik.values.cardNumber.length + 1 > index &&
                        formik.values.cardNumber.length != 0
                        ? formik.values.cardNumber[index - 1]
                        : date != "-"
                        ? "0"
                        : ""
                      : ""}
                    {index > 9 && index < 14
                      ? formik.values.cardNumber.length + 2 > index &&
                        formik.values.cardNumber.length != 0
                        ? formik.values.cardNumber[index - 2]
                        : date != "-"
                        ? "0"
                        : ""
                      : ""}
                    {index > 14
                      ? formik.values.cardNumber.length + 3 > index &&
                        formik.values.cardNumber.length != 0
                        ? formik.values.cardNumber[index - 3]
                        : date != "-"
                        ? "0"
                        : ""
                      : ""}
                  </p>
                ))}
              </div>
              <div className="name-card">
                <small
                  style={{ flex: 1, fontWeight: "lighter", color: " #aaa" }}
                >
                  {formik.values.cardHolder
                    ? formik.values.cardHolder.toLocaleUpperCase()
                    : "Jane Appleseed"}
                </small>
                <small style={{ flex: 1, textAlign: "end" }}>
                  {formik.values.expiryDateMM
                    ? formik.values.expiryDateMM
                    : "00"}
                  /
                  {formik.values.expiryDateYY
                    ? formik.values.expiryDateYY
                    : "00"}
                </small>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={BgCardBack}
              alt="asd"
              width={230}
              className="shadow-image front-image"
            />
            <div className="contentcard-back">
              <p style={{ marginRight: 10 }}>
                {formik.values.cvc ? formik.values.cvc : "123"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="second-section">
        {succes ? (
          <Succes setSucces={setSucces} />
        ) : (
          <div className="form-space">
            <form
              className="form-container"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <label className="label-text">CARDHOLDER NAME</label>
                <input
                  id="cardHolder"
                  name="cardHolder"
                  type="text"
                  className="inputs"
                  placeholder="Jane Appleseed"
                  style={{
                    borderColor: formik.errors.cardHolder ? "red" : "black"
                  }}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.cardHolder}
                />
                {formik.touched.cardHolder && formik.errors.cardHolder ? (
                  <small style={{ color: "red" }}>
                    {formik.errors.cardHolder}
                  </small>
                ) : null}
              </div>
              <div>
                <label className="label-text">CARD NUMBER</label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  className="inputs"
                  placeholder="0000000000000000"
                  style={{
                    borderColor: formik.errors.cardNumber ? "red" : "black"
                  }}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.cardNumber}
                  /* {...formik.getFieldProps('cardNumber')} */
                  maxLength={16}
                />
                {formik.touched.cardNumber && formik.errors.cardNumber ? (
                  <small style={{ color: "red" }}>
                    {formik.errors.cardNumber}
                  </small>
                ) : null}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 2,
                  gap: 8
                }}
              >
                <div
                  style={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <label className="label-text">EXP.DATE (MM/YY)</label>
                  <div
                    style={{ display: "flex", flexDirection: "row", gap: 8 }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <input
                        id="expiryDateMM"
                        type="text"
                        className="inputs-small"
                        placeholder="MM"
                        style={{
                          borderColor: formik.errors.expiryDateMM
                            ? "red"
                            : "black"
                        }}
                        name="expiryDateMM"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.expiryDateMM}
                        maxLength={2}
                      />
                      {formik.touched.expiryDateMM &&
                      formik.errors.expiryDateMM ? (
                        <small style={{ color: "red" }}>
                          {formik.errors.expiryDateMM}
                        </small>
                      ) : null}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <input
                        id="expiryDateYY"
                        type="text"
                        className="inputs-small"
                        style={{
                          borderColor: formik.errors.expiryDateYY
                            ? "red"
                            : "black"
                        }}
                        name="expiryDateYY"
                        placeholder="YY"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.expiryDateYY}
                        maxLength={2}
                      />
                      {formik.touched.expiryDateYY &&
                      formik.errors.expiryDateYY ? (
                        <small style={{ color: "red" }}>
                          {formik.errors.expiryDateYY}
                        </small>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div
                  style={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <label className="label-text">CVC</label>
                  <input
                    id="cvc"
                    type="text"
                    className="inputs-second-small"
                    style={{ borderColor: formik.errors.cvc ? "red" : "black" }}
                    placeholder="e.g. 123"
                    name="cvc"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.cvc}
                    maxLength={3}
                  />
                  {formik.touched.cvc && formik.errors.cvc ? (
                    <small style={{ color: "red" }}>{formik.errors.cvc}</small>
                  ) : null}
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
        )}
      </div>
    </main>
  )
}
