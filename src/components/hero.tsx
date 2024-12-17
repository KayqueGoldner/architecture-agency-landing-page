import { HeroMarquee } from "@/components/hero-marquee"
import { Button } from "@/components/ui/button"

export const Hero = () => {
  return (
    <section className="relative flex flex-col h-[640px]">
      <div className="flex-1 relative z-10 w-full max-w-7xl px-3 pt-24 mx-auto">
        <h1 className="max-w-2xl text-4xl sm:text-5xl md:text-6xl/tight text-white font-bold">
          We Transform Spaces into Experiences!
        </h1>
        <a href="#" className="block mt-10">
          <Button className="w-40 h-12 text-lg">
            Contact us
          </Button>
        </a>
      </div>
      <div className="relative z-10">
        <HeroMarquee />
      </div>
      <div className="absolute inset-0 bg-black">
        <img 
          src="/img-1.jpg" 
          width={1280} 
          height={720} 
          alt="building image" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
    </section>
  )
}