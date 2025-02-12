import CountryCard from "./CountryCard";

export default function TopCountry() {
  const countries = [
    {
      name: "Russia",
      image:
        "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=2000",
      fee: "$4,000 - $12,000/year",
      duration: "6 years",
    },
    {
      name: "Uzbekistan",
      image:
        "https://images.unsplash.com/photo-1528644495100-e7f1cd363796?auto=format&fit=crop&q=80&w=2000",
      fee: "$5,000 - $7,000/year",
      duration: "5 years",
    },
    {
      name: "Kazakhstan",
      image:
        "https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&q=80&w=2000",
      fee: "$4,500 - $8,000/year",
      duration: "5 years",
    },
    {
      name: "Philippines",
      image:
        "https://images.unsplash.com/photo-1518439179742-2bfd6565d1c4?auto=format&fit=crop&q=80&w=2000",
      fee: "$6,000 - $10,000/year",
      duration: "5.5 years",
    },
    {
      name: "Georgia",
      image:
        "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&q=80&w=2000",
      fee: "$5,500 - $8,500/year",
      duration: "6 years",
    },
    {
      name: "Kyrgyzstan",
      image:
        "https://images.unsplash.com/photo-1569531955323-33c6b2dca44b?auto=format&fit=crop&q=80&w=2000",
      fee: "$4,000 - $6,000/year",
      duration: "5 years",
    },
    {
      name: "Egypt",
      image:
        "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=2000",
      fee: "$5,000 - $9,000/year",
      duration: "5.5 years",
    },
  ];
  return (
    <section
      id="countries"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Top Countries for MBBS
          </h2>
          <p className="text-xl text-gray-600">
            Choose from these prestigious destinations for your medical
            education
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
}
