import Image from "next/image"
import styles from "./page.module.css"
import ItemList from "@/components/item-list"

export default function Home() {
  return (
    <main className="grid">
      <div className="container">
        <section className="first-section">
          <h1>Stay updated!</h1>
          <h2>Join 60,000 product managers receiving monthly updates on:</h2>
          <ul>
            <ItemList text="Product discovery and building what matters" />
            <ItemList text="Measuring to ensure updates are a success" />
            <ItemList text="And much more!" />
          </ul>
          <form action="">
            <label>Email address</label>
            <input type="text" placeholder="email@company.com" />
            <button>Subscribe to monthly newsletter</button>
          </form>
        </section>
        <section className="second-section">
          <img
            src="/Illustration-destock.png"
            className="image-destock"
            alt="00"
          />
        </section>
      </div>
    </main>
  )
}
