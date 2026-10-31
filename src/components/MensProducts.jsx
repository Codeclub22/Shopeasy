import { useEffect, useState } from "react";


function MensProducts(){
    const[products,setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const[error,seterror] = useState("");

    useEffect(()=>{
        const fetchProducts = async()=>{
           try {
            const response = await fetch("https://dummyjson.com/products/category/mens-shirts");

            if(!response.ok)
                throw new Error("Failed to fetch products");
              const data = await response.json();
        setProducts(data.products);
           } catch (error) {
            seterror(error.message);
           }finally{
            setLoading(false)
           }
        }
        fetchProducts()
    },[])

    if(loading){
        return <p className="py-10 text-center">Loading products...</p>;
    }
    if (error) {
      return <p className="py-10 text-center text-red-500">{error}</p>;
    }
    return(
        <>
         <section className="bg-white px-6 py-16 md:px-12 lg:px-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Men's Collection
        </h2>

        <p className="mt-2 text-gray-500">
          Discover the latest styles for men.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-xl border border-gray-200"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-gray-900">
                {product.title}
              </h3>

              <p className="mt-2 text-lg font-bold text-gray-900">
                ${product.price}
              </p>

              <p className="mt-1 text-sm text-yellow-600">
                ⭐ {product.rating}
              </p>

              <button className="mt-4 w-full rounded-lg bg-gray-900 px-4 py-3 text-white hover:bg-red-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
        </>
    )
}
export default MensProducts;