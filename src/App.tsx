import "./App.css";
import { Hero } from "@/components/hero";
import { Header } from "./components/header";
import { About } from "@/components/about";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App
