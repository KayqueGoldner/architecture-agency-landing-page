import Marquee from "@/components/ui/marquee";

export const HeroMarquee = () => {
  const items = [
    {
      title: "Custom Projects",
      description: "Every detail designed to reflect your personality and lifestyle.",
      image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Sustainable Design",
      description: "We create architectural solutions that respect the environment.",
      image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Perfect Execution",
      description: "From planning to delivery, we ensure quality at every stage.",
      image: "https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Innovation in Every Stroke",
      description: "We explore the balance between aesthetics and functionality.",
      image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Turn Ideas into Reality",
      description: "From unique concepts to incredible spaces, we make your dreams come true.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Detail Experts",
      description: "Focus on finishes and solutions that make a difference in the final result.",
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  return (
    <Marquee pauseOnHover className="[--duration:35s] p-4">
      {items.map(item => (
        <div 
          key={item.title} 
          className="relative w-full max-w-72 h-40 bg-black/90 rounded-xl"
        >
          <img 
            src={item.image} 
            alt={item.title} 
            className="absolute inset-0 object-cover h-full w-full opacity-30 rounded-xl" 
          />
          <h1 className="relative w-min mx-auto -mt-2.5 whitespace-nowrap bg-white text-orange-600 p-1 px-3 text-base font-semibold rounded-full">
            {item.title}
          </h1>
          <p className="relative text-base text-white pt-3 pl-3 font-medium">
            {item.description}
          </p>
        </div>
      ))}
    </Marquee>
  )
}