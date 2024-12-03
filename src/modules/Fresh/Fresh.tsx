import Form from "./components/Form/Form";
import { FRESH_DATA } from "./data";

const Fresh = () => {
  return ( 
  <section className="container">
    <div className="pt-[0px] lg:pt-[125px] flex flex-col lg:flex-row gap-[42px] md:gap-[77px] pb-20">
    <div className="text-black w-full lg:w-1/2 max-w-[524px] lg:max-w-[614px] flex flex-col items-center lg:items-start self-center lg:self-start gap-10 md:gap-[38px] lg:gap-20 pt-[80px] md:pt-[98px]">
      <div className="flex flex-col w-full items-center lg:items-start gap-5 lg:gap-10">
        <h2 className="w-full text-center lg:text-left font-medium uppercase text-2xl leading-[28px] -tracking-[0.015em] md:text-[40px] md:leading-[44px] md:tracking-[0.01em] lg:text-[48px] lg:leading-[48px] lg:tracking-[0.012em]">{FRESH_DATA.title}</h2>
        <p className="px-3 lg:px-0 text-center lg:text-left w-full max-w-[523px] text-sm leading-[18px] -tracking-[0.05em] md:text-lg md:leading-[25px] md:-tracking-[0.04em]">{FRESH_DATA.description}</p>
      </div>
      <Form />
    </div>
    <div className="bg-bg bg-light-green rounded-[40px] md:rounded-[80px] pb-1 sm:pb-0 pt-[31px] md:pt-[17px] lg:pt-[37px] flex justify-center items-end">
      <img src={FRESH_DATA.img.src} alt={FRESH_DATA.img.alt} width={525} height={499} className="w-full min-h-[300px] sm:min-h-[357px] lg:min-h-[499px] max-w-[470px] lg:max-w-[525px] md:max-h-[446px] min-w-[335px]" />
    </div>
    </div>
  </section> );
}
 
export default Fresh;
