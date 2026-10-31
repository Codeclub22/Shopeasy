function Banner() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[#faf5ed]">

      <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-8 px-6 py-12 md:grid-cols-2">

        {/* Left Content */}
        <div className="z-10">
          <p className="mb-4 font-semibold uppercase tracking-widest text-emerald-800">
            ✨✨✨ Discover Your Style
          </p>
          <h1 className="max-w-xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Upgrade Your Style With Our Collection.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
            Explore the latest fashion trends and discover products
            that perfectly match your style.
          </p>

          <button className="mt-8 rounded-md bg-gray-900 px-8 py-4 font-semibold text-white transition hover:bg-emerald-300">
            Shop Now →
          </button>

          <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-900">
              70+
            </h2>
            <p className="text-gray-600">Products Available</p>
          </div>
        </div>

        {/* Right Banner Image */}
        <div className="relative">
         
            <img src="Stylish Wavy-Haired Man in Sunglasses.png"
              alt="Men's Fashion Model"
  className="h-[500px] w-full rounded-3xl object-cover object-center"/>
          {/* Floating Badge */}
          <div className="absolute right-3 top-5 rounded-xl bg-white px-5 py-4 shadow-lg sm:right-5 sm:top-8">
            <p className="text-xl font-bold text-amber-500">
              ★★★★★
            </p>
            <p className="mt-1 text-sm text-gray-700">
              Customer Favourite
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Banner;