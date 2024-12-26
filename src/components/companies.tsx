export const Companies = () => {
  const companiesList = [
    {
      id: "company-logo-1",
      image: "/company-logo-1.svg",
    },
    {
      id: "company-logo-2",
      image: "/company-logo-2.svg",
    },
    {
      id: "company-logo-3",
      image: "/company-logo-3.svg",
    },
    {
      id: "company-logo-4",
      image: "/company-logo-4.svg",
    },
  ];

  return (
    <section className="px-6 py-10">
      <div className="flex items-center justify-between flex-wrap gap-x-4 gap-y-6">
        {companiesList.map(company => (
          <div key={company.id} className="min-w-40 h-24 flex-1 grid place-items-center rounded-md bg-neutral-200">
            <img src={company.image} alt={company.id} width={154} height={87} />
          </div>
        ))}
      </div>
    </section>
  )
}