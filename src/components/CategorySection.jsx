
const categories = [
  {
    id: 1,
    name: "Men's Fashion",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Women's Fashion",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
  },
];

function CategorySection() {
  return (
    <section className="bg-[#faf6ef] px-6 py-16 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Shop by Category
        </h2>

        <p className="mt-3 text-gray-600">
          Explore our collections and find your style.
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image */}
            <div className="h-64 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Category Name */}
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {category.name}
              </h3>

              <button className="mt-3 font-medium text-blue-600 transition hover:text-blue-800">
                Explore Now →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;