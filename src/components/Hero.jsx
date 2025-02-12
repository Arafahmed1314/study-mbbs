import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/95" />
        <img
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2000"
          alt="Medical Education"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
      </div>
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Study MBBS
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400 block">
                    Abroad
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  Transform your medical career with world-class education at
                  prestigious international universities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/apply"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-900 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now
                </Link>
                <Link
                  to="/country"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold  border-2 border-white/30 bg-gray-600 text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Explore Countries
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="bg-gray-900 px-6 py-2 rounded-md">
                  <div className="text-3xl font-bold text-blue-200">7+</div>
                  <div className="text-sm text-blue-100">Countries</div>
                </div>
                <div className="bg-gray-900 px-6 py-2 rounded-md">
                  <div className="text-3xl font-bold text-blue-200">100+</div>
                  <div className="text-sm text-blue-100">Universities</div>
                </div>
                <div className="bg-gray-900 px-6 py-2 rounded-md">
                  <div className="text-3xl font-bold text-blue-200">10k+</div>
                  <div className="text-sm text-blue-100">Students</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src="/src/assets/images/6-4-1030x577.jpg"
                  alt="Medical Students"
                  className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
