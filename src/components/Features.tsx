const features = [
  {
    title: "Nameštaj po meri",
    description: "Savršeno uklopljen u vaš prostor i stil života.",
    icon: <img src="/icons/olovka-metar.svg" width={72} height={72} alt="Nameštaj po meri" />,
  },
  {
    title: "Vrhunski kvalitet",
    description: "Koristimo samo proverene materijale i okove.",
    icon: <img src="/icons/priznanje.svg" width={55} height={55} alt="Vrhunski kvalitet" />,
  },
  {
    title: "Pouzdana isporuka",
    description: "Tačnost, rokovi i profesionalna ugradnja.",
    icon: <img src="/icons/isporuka.svg" width={64} height={64} alt="Pouzdana isporuka" />,
  },
  {
    title: "Podrška i Saveti",
    description: "Tu smo za vas od ideje do realizacije.",
    icon: <img src="/icons/podrska.svg" width={64} height={64} alt="Podrška i Saveti" />,
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto w-full px-8 py-14">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col gap-4">
            <div className="text-[#cc9a6e]">{feature.icon}</div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#1a1a1a]">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
