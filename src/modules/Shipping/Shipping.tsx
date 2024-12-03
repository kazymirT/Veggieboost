import { SHIPPING_DATA } from "./data";

const Shipping = () => {
  return ( 
    <section className="container">
      <div className="flex flex-col lg:flex-row items-center py-20 px-5 md:py-10 md:px-20 gap-10 xl:gap-[73px] xl:px-16 xl:py-[63px] rounded-[40px] md:rounded-[80px] bg-bg bg-beige">
      <img src={SHIPPING_DATA.img.src} alt={SHIPPING_DATA.img.alt} width={578} height={339} className="w-full max-w-[578px] min-w-[260px] sm:min-w-[295px]" />
      <h2 className="lg:max-w-[437px] lg:text-left text-black uppercase font-medium text-center text-2xl leading-[27.7px] -tracking-[0.036em] md:text-[28px] md:-tracking-[0.025em] md:leading-[32px] lg:text-[40px] lg:leading-[43.5px] lg:tracking-[0.012em]">{SHIPPING_DATA.title}</h2>
      </div>
    </section> );
}
 
export default Shipping;
