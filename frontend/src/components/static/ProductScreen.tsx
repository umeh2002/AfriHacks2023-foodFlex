import ProductCard2 from "../ProductCard2"


const ProductScreen = () => {
  return (
    <div className="w-full py-2 flex items-center justify-center ">
    <div className="w-[90%] h-full">

        <div className="w-full flex items-center justify-center">
        <p className="text-[30px] tracking-wider text-[#808080] font-extrabold">our <span className="text-[red]">Products</span></p>
        </div>
        <br />

        <div className="flex justify-between flex-wrap w-[100%] md:w-[100%] md:gap-2 ">
          <ProductCard2 />
          <ProductCard2 />
          <ProductCard2 />
          <ProductCard2 />
      </div>

      <br />

      <div className="w-full flex items-center justify-center ">
      <button className="px-10 cursor-pointer hover:text-white transition-all duration-500  rounded-[20px] py-2 bg-[#fc4457] mt-2">view all</button>
      </div>
    </div>
</div>
  )
}

export default ProductScreen