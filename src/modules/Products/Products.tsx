import useWindowWidth from "../../hooks/useWindowWidth";
import ProductItem from "./components/ProductItem";
import { PRODUCTS_DATA } from "./data";

const Products = () => {
  const width = useWindowWidth();
  const productArray = width < 1116 ? [...PRODUCTS_DATA.slice(0, -1)] : PRODUCTS_DATA; 
  return ( 
    <section className="container text-black flex flex-col gap-10">
      <div className="self-center flex flex-col gap-[14px] md:px-[31px] w-full max-w-[624px]">
      <h2 className="uppercase font-medium text-2xl leading-7 -tracking-[0.04em] md:text-[28px] md:-tracking-[0.025em] md:leading-[32px] lg:text-[40px] text-center lg:tracking-[0.01em] lg:leading-[44px]">oRGANIC vegetables</h2>
      <p className="text-center text-sm -tracking-[0.04em] leading-[18px] md:text-lg md:leading-6 md:-tracking-[0.039em]">
        Our organic vegetables are hand-picked from local farms and delivered straight to your doorstep, ensuring that you get the freshest and most nutritious produce possible. 
      </p>
      </div>
      <div className="products">
        {productArray && productArray.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </div>
      <button className="-mt-5 md:-mt-[3px] lg:mt-[2px] self-center uppercase size-20 md:size-[114px] rounded-full bg-orange text-white -rotate-[14deg] font-medium text-sm md:text-lg transition-all duration-300 hover:bg-green hover:rotate-0">oRDER</button>
      </section> );
}
 
export default Products;
