import "./App.css";
import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { About } from "@/components/about";
import { Companies } from "@/components/companies";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Companies />
      </main>
    </>
  )
}

export default App
