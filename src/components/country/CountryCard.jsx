/* eslint-disable react/prop-types */

export default function CountryCard({ country }) {
  return (
    <div
      key={country.name}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={country.image}
          alt={country.name}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{country.name}</h3>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-sm">Annual Fee</p>
            <p className="text-gray-900 font-semibold">{country.fee}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600 text-sm">Duration</p>
            <p className="text-gray-900 font-semibold">{country.duration}</p>
          </div>
        </div>
        <button className="w-full py-3 text-blue-600 font-semibold border-2 border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}
