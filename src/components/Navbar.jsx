import { useState } from "react";
import { Link } from "react-router-dom";
import Close from "./svgIcon/Close";
import Menu from "./svgIcon/Menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const option = ["Benefits", "Country", "Process", "Apply"];
  return (
    <header className="container mx-auto  py-4 shadow-lg fixed top-0 bg-white z-50 w-full px-12">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center justify-center space-x-4">
            {" "}
            <img
              className="w-12 rounded-full h-12"
              src="/public/logo.jpg"
              alt=""
            />
            <h1 className="text-xl font-bold">STUDY MBBS</h1>
          </div>
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <Close /> : <Menu />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-xl">
          <li>
            <Link to="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          {option.map((item) => (
            <li key={item}>
              <Link to={`${item}`} className="hover:text-orange-500">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <ul>
            <li>
              <Link to="/Login" className="hover:text-orange-500 text-xl">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 w-full">
            <li>
              <Link
                to="/"
                className="hover:text-orange-500 hover:bg-gray-700 hover:w-full px-24 py-1 rounded-md transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            {option.map((item) => (
              <li key={item}>
                <Link
                  to={`${item}`}
                  className="hover:text-orange-500 hover:bg-gray-700 hover:w-full px-24 py-1 rounded-md transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
