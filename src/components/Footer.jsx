export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-gray-800">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Study MBBS Abroad
            </h3>
            <p className="text-gray-400">
              Your Gateway to Global Medical Education
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#countries"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Countries
                </a>
              </li>
              <li>
                <a
                  href="#apply"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Apply Now
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: nayemhasan1314@gmail.com</li>
              <li className="text-gray-400">Phone: +8801923531755</li>
              <li className="text-gray-400">Address: Dhaka,Bangladesh</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-500">
            © 2025 Study MBBS Abroad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
