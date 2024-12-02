import Reviews from "./components/Reviews/Reviews";
import img from "../../assets/image.png";
import Tags from "./components/Tags/Tags";

const Banner = () => {
  const handleOpenShop = () => console.log('open shop now');
  return ( 
  <div className="bg-green">
  <section className="container flex flex-col lg:flex-row gap-3 lg:gap-[27px] pt-40 sm:pt-[clamp(48px,32.733px+4.071vw,64px)] md:pt-[clamp(64px,-38px+13.281vw,132px)] pb-5 sm:pb-[clamp(20px,8.55px+3.053vw,32px)]">
    <div className="flex flex-col gap-5 md:gap-8 lg:gap-[33px]">
      <section className="flex flex-col gap-4">
      <Reviews/>
      <h1 className="max-w-[672px] uppercase text-white text-[40px] sm:text-[clamp(40px,26.538px+3.59vw,54px)] md:text-[clamp(54px,39.146px+1.942vw,64px)] font-medium leading-[43px] md:leading-[65px] lg:leading-[77px] tracking-[0.007em]">organic <span className="text-light-green italic">vegetables</span> to your diet today!</h1>
      <p className="max-w-[491px] text-sm -tracking-[0.04em] leading-[18px]">Our expertly curated vegetable baskets are made with the freshest, highest quality vegetables available. Fresh Harvest Box has got you covered. Fresh, high-quality vegetables in expertly curated vegetable baskets delivered to you.</p>
      </section>
      <button className="flex justify-center items-center size-[68px] sm:size-[clamp(68px,24.107px+11.705vw,114px)] md:size-[clamp(114px,87px+3.516vw,132px)] bg-beige rounded-full uppercase text-sm sm:text-[clamp(14px,4.458px+2.545vw,24px)] md:text-[clamp(24px,18px+0.781vw,28px)] text-orange font-medium leading-none -rotate-[14deg] hover:bg-light-green hover:text-green transition-all duration-300" onClick={handleOpenShop}>shop now</button>
    </div>
    <div className="flex flex-col gap-[2px] lg:gap-[clamp(2px,-74.5px+9.961vw,53px)]">
      <img src={img} alt="banner images" width={517} height={429} className="w-[303px] h-[236px] sm:w-[clamp(303px,126.473px+47.074vw,488px)] sm:h-[clamp(236px,86.191px+39.949vw,393px)] md:h-[clamp(393px,286.662px+13.846vw,429px)] md:w-[clamp(488px,402.338px+11.154vw,517px)] self-center" />
      <Tags />
    </div>
  </section> 
  </div>
  );
}
 
export default Banner;
