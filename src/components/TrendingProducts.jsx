
const products = [
  {
    id: 1,
    name: "Classic Men's T-Shirt",
    price: 499,
    oldPrice: 799,
    rating: 4.5,
    discount: "38% OFF",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Stylish Women's Handbag",
    price: 899,
    oldPrice: 1499,
    rating: 4.8,
    discount: "40% OFF",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Classic Sneakers",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,
    discount: "35% OFF",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Premium Wrist Watch",
    price: 1599,
    oldPrice: 2499,
    rating: 4.7,
    discount: "36% OFF",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
  },
];

function TrendingProducts() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 font-semibold uppercase tracking-widest text-orange-500">
            Customer Favorites
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Trending Products
          </h2>

          <p className="mt-3 text-gray-500">
            Discover products everyone is loving.
          </p>
        </div>

        <button className="font-semibold text-blue-600 hover:text-blue-800">
          View All →
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                {product.discount}
              </span>
            </div>

            {/* Product Details */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="mt-2 flex items-center gap-2">
                <span className="text-yellow-500">★</span>
                <span className="text-sm font-medium text-gray-700">
                  {product.rating}
                </span>
                <span className="text-sm text-gray-400">
                  Customer Rating
                </span>
              </div>

              {/* Price */}
              <div className="mt-3 flex items-center gap-3">
                <span className="text-xl font-bold text-gray-900">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>

                <span className="text-sm text-gray-400 line-through">
                  ₹{product.oldPrice.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => alert(`${product.name} added to cart!`)}
                className="mt-5 w-full rounded-xl bg-gray-900 px-4 py-3 font-semibold text-white transition hover:bg-orange-500"
              >
                Add to Cart +
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingProducts;
