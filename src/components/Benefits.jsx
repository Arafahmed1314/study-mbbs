export default function Benifits() {
  const benefits = [
    "World-Class Medical Education",
    "Affordable Fee Structure",
    "Global Recognition",
    "Cultural Exposure",
    "Advanced Infrastructure",
    "Clinical Experience",
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/50 -skew-y-6"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Study MBBS Abroad?
          </h2>
          <p className="text-xl text-gray-600">
            Discover the advantages of pursuing your medical education
            internationally
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <span className="text-2xl">#{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {benefit}
              </h3>
              <div className="h-1 w-12 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
