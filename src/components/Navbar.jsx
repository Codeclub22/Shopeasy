function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-3 shadow-md">

      {/* Logo */}
<div className="flex items-center">
  <img
    src="ShopEase Express Cart Logo.png"
    alt="ShopEase Logo"
    className="h-22 w-auto object-contain"
  />
</div>

      {/* Navigation Links */}
      <ul className="hidden items-center gap-8 md:flex">
        <li>
          <a href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
        </li>

        <li>
          <a href="/products" className="text-gray-700 hover:text-blue-600">
            Products
          </a>
        </li>

        <li>
          <a href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </a>
        </li>
      </ul>

      {/* Cart Button */}
      <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
        Cart 🛒
      </button>

    </nav>
  );
}

export default Navbar;