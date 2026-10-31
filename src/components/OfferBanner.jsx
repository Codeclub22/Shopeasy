
function OfferBanner() {
  return (
    <>
    <div className="w-full">
      <img
        src= "/offer-banner.png"
        alt="Men's Fashion"
        className="h-100 w-full object-auto"
      />
    </div>
<div className="flex justify-center items-center">
  <button className="border border-orange-500 bg-orange-4 text-white   00 h-13 w-70 px-6 py-3 m-5 text-white rounded-md hover:bg-orange-600 transition duration-300">
  Check Offer
</button>
</div>
    </>
  );
}

export default OfferBanner;
