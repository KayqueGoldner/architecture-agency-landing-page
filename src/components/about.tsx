import { motion } from "motion/react";

import InteractiveHoverButton from "@/components/ui/interactive-hover-button"

export const About = () => {
  const bannerMotion = {
    hovered: {
      x: 0, 
      y: 0,
    }
  };

  return (
    <section className="flex gap-10 items-start p-5 py-16 w-full max-w-7xl mx-auto">
      <motion.div whileHover="hovered" className="relative hidden lg:block shrink-0 max-w-sm">
        <img 
          src="/about-img.jpg" 
          alt="about image" 
          width={560} 
          height={720} 
          className="rounded-md relative z-10"
        />
        <motion.div
          variants={bannerMotion}
          whileInView={{ x: 8, y: 8 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-orange-500 rounded-md"
        />
      </motion.div>
      <div className="flex flex-col gap-5 items-center lg:items-end text-center lg:text-right">
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, type: "keyframes" }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h1 className="text-4xl/tight text-orange-500 font-bold">
            Crafting Spaces, Shaping Dreams
          </h1>
          <h3 className="text-base font-medium text-neutral-700">
            We are a team of passionate architects dedicated to creating innovative and sustainable spaces that inspire. Our mission is to transform ideas into exceptional designs that combine functionality, beauty, and individuality
          </h3>
        </motion.div>
        <div className="flex w-full gap-4 mt-10 text-center flex-wrap lg:flex-nowrap">
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4, type: "keyframes" }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="h-full flex items-center justify-center border border-orange-500 p-6 rounded-md shadow-sm text-orange-500 text-xl/7 font-semibold">
              <div>
                Over <span className="bg-orange-500 py-0.5 px-2 rounded-md text-white">15</span> Years of Experience
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5, type: "keyframes" }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="h-full flex items-center justify-center border border-orange-500 p-6 rounded-md shadow-sm text-orange-500 text-xl/7 font-semibold">
              <div>
                More Than <span className="bg-orange-500 py-0.5 px-2 rounded-md text-white">500</span> Successful Projects
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6, type: "keyframes" }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="h-full flex items-center justify-center border border-orange-500 p-6 rounded-md shadow-sm text-orange-500 text-xl/7 font-semibold">
              <div>
                Trusted by <span className="bg-orange-500 py-0.5 px-2 rounded-md text-white">300+</span> Satisfied Clients
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7, type: "keyframes" }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <a href="#">
            <InteractiveHoverButton className="h-14 w-44 text-lg mt-5" text="About Us" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}