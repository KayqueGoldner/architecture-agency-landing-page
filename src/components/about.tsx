import InteractiveHoverButton from "@/components/ui/interactive-hover-button"

export const About = () => {
  return (
    <section className="flex gap-10 items-start p-5 py-16 w-full max-w-7xl mx-auto">
      <div className="relative hidden lg:block shrink-0 max-w-sm">
        <img 
          src="/about-img.jpg" 
          alt="about image" 
          width={560} 
          height={720} 
          className="rounded-md relative z-10"
        />
        <div
          className="absolute top-2 -right-2 -bottom-2 left-2 bg-orange-500 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-5 items-center lg:items-end text-center lg:text-right">
        <h1 className="text-4xl/tight text-orange-500 font-bold">
          Crafting Spaces, Shaping Dreams
        </h1>
        <h3 className="text-base font-medium text-neutral-700">
          We are a team of passionate architects dedicated to creating innovative and sustainable spaces that inspire. Our mission is to transform ideas into exceptional designs that combine functionality, beauty, and individuality
        </h3>
        <div className="flex w-full gap-4 mt-10 text-center flex-wrap lg:flex-nowrap">
          <div className="flex-1 border border-orange-500 p-6 rounded-md shadow-sm text-orange-500 text-xl/7 font-semibold">
            Over <span className="bg-orange-500 py-0.5 px-2 rounded-md text-white">15</span> Years of Experience
          </div>
          <div className="flex-1 border border-orange-500 p-6 rounded-md shadow-sm text-orange-500 text-xl/7 font-semibold">
            More Than <span className="bg-orange-500 py-0.5 px-2 rounded-md text-white">500</span> Successful Projects
          </div>
          <div className="flex-1 border border-orange-500 p-6 rounded-md shadow-sm text-orange-500 text-xl/7 font-semibold">
            Trusted by <span className="bg-orange-500 py-0.5 px-2 rounded-md text-white">300+</span> Satisfied Clients
          </div>
        </div>
        <a href="#">
          <InteractiveHoverButton className="h-14 w-44 text-lg mt-5" text="About Us" />
        </a>
      </div>
    </section>
  )
}