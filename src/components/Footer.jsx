function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Logo and Description */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">
            Shop<span className="text-blue-500">Ease</span>
          </h2>

          <p className="text-sm leading-6 text-gray-400">
            Discover the latest fashion and lifestyle products.
            Shop your favourite products at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="/" className="transition hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="transition hover:text-blue-400">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="transition hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="transition hover:text-blue-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Customer Support
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="/faq" className="transition hover:text-blue-400">
                FAQs
              </a>
            </li>
            <li>
              <a href="/shipping" className="transition hover:text-blue-400">
                Shipping Information
              </a>
            </li>
            <li>
              <a href="/returns" className="transition hover:text-blue-400">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="/privacy" className="transition hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Get In Touch
          </h3>

          <p className="mb-3 text-sm">
            Email: support@shopease.com
          </p>

          <p className="mb-5 text-sm">
            Follow us on social media
          </p>

          <div className="flex gap-4">
            <a
            //   href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition hover:text-blue-400"
            >
              Instagram
            </a>

            <a
            //   href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="transition hover:text-blue-400"
            >
              Facebook
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 px-6 py-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;