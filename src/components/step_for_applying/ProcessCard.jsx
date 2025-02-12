/* eslint-disable react/prop-types */
export default function ProcessCard({ step, index }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
      <div className="relative p-8 bg-white rounded-2xl">
        <div className="flex items-center space-x-4 mb-6">
          <span className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl font-bold">
            {index + 1}
          </span>
          <div className="h-0.5 flex-grow bg-blue-100"></div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{step}</h3>
        <p className="text-gray-600">
          Our expert counselors will guide you through each step of the process.
        </p>
      </div>
    </div>
  );
}
