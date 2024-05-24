import Target from "../components/target"

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center"
      }}
    >
      <div style={{ alignContent: "center" }}>
        <Target />
      </div>
    </main>
  )
}
