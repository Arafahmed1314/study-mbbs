import CountryCard from "./CountryCard";
import a1 from "/src/assets/images/6-4-1030x577.jpg";
import a2 from "/src/assets/images/Exterior.jpg";
import a3 from "/src/assets/images/HOREV-Medical-Center-Tashkent.jpg";
import a4 from "/src/assets/images/hh.jpg";
import a5 from "/src/assets/images/kostanay-hospital-07.jpg";
import a6 from "/src/assets/images/spmc.jpg";
import a7 from "/src/assets/images/st.webp";
export default function TopCountry() {
  const countries = [
    {
      name: "Russia",
      image: a1,
      fee: "$4,000 - $12,000/year",
      duration: "6 years",
    },
    {
      name: "Uzbekistan",
      image: a2,
      fee: "$5,000 - $7,000/year",
      duration: "5 years",
    },
    {
      name: "Kazakhstan",
      image: a3,
      fee: "$4,500 - $8,000/year",
      duration: "5 years",
    },
    {
      name: "Philippines",
      image: a4,
      fee: "$4,000 - $6,000/year",
      duration: "5.5 years",
    },
    {
      name: "Georgia",
      image: a5,
      fee: "$4,000 - $6,000/year",
      duration: "6 years",
    },
    {
      name: "Kyrgyzstan",
      image: a6,
      fee: "$4,000 - $6,000/year",
      duration: "5 years",
    },
    {
      name: "Egypt",
      image: a7,
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
