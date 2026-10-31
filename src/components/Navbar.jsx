import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 shadow-md backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">

        {/* Logo */}
        <a href="/" className="flex items-center transition hover:opacity-90">
          <img
            src="ShopEase Express Cart Logo.png"
            alt="ShopEase Logo"
            className="h-16 w-auto object-contain sm:h-20"
          />
        </a>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="group relative rounded-full px-4 py-2 font-medium text-gray-700 transition-colors duration-300 hover:bg-blue-50 hover:text-blue-600"
              >
                {link.name}
                <span className="absolute bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-1/2" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Cart Button */}
          <button className="relative flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 font-medium text-white shadow-md shadow-blue-600/30 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/40 active:translate-y-0">
            <span>Cart</span>
            <span className="text-lg">🛒</span>
            <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-xs font-semibold">
              0
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 md:hidden"
          >
            <span className={`h-0.5 w-5 rounded-full bg-current transition duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-current transition duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-current transition duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? "max-h-60 border-t border-gray-100" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-1 px-6 py-3">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-2 font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
