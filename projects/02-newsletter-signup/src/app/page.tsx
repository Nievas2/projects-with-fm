"use client"
import Image from "next/image"
import styles from "./page.module.css"
import ItemList from "@/components/item-list"
import { useFormik } from "formik"
import { emailSchema } from "@/services/schemas/emailSchema"
import { useState } from "react"
export default function Home() {
  const [success, setSuccess] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      setSuccess(true)
    }
  })
  function dismissButton(){
    setSuccess(false)
    formik.resetForm()
  }
  return (
    <main className="grid">
        {success ? (
          <section className="container-mobile">
            <div className="icon-success">
              <img
              src="/icon-success.png"
              alt="icon completed"
            />
            </div>
            
            <h1 className="title-success">Thanks for subscribing!</h1>
            <p className="description-success">
              A confirmation email has been sent to {" "}
              <strong>{formik.values.email}</strong>. Please open it and click
              the button inside to confirm your subscription.
            </p>
            <button className="button" type="button" onClick={dismissButton}>Dismiss message</button>
          </section>
        ) : (
          <div className="container">
            <section className="first-section">
              <h1>Stay updated!</h1>
              <h2>
                Join 60,000 product managers receiving monthly updates on:
              </h2>
              <ul>
                <ItemList text="Product discovery and building what matters" />
                <ItemList text="Measuring to ensure updates are a success" />
                <ItemList text="And much more!" />
              </ul>
              <form onSubmit={formik.handleSubmit}>
                <label>Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="email@company.com"
                  style={{
                    borderColor: formik.errors.email ? "red" : "black"
                  }}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="error">{formik.errors.email}</small>
                ) : null}
                <button
                  className="button"
                  type="submit"
                >
                  Subscribe to monthly newsletter
                </button>
              </form>
            </section>
            <section className="second-section">
              <img
                src="/Illustration-destock.png"
                className="image-destock"
                alt="image newsletter signup"
              />
              <img
                src="/Illustration-mobile.png"
                className="image-mobile"
                alt="image newsletter signup"
              />
            </section>
          </div>
        )}
    </main>
  )
}
