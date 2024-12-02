import { BUYING_DATA } from "./data";

const Buying  = () => {
  return ( <section className="container">
    <div className="flex flex-col gap-5 bg-bg bg-beige text-black rounded-[35px] px-5 pt-[38px] md:flex-row-reverse md:rounded-[80px] md:pl-0 md:pr-10 md:gap-10 xl:gap-[110px] xl:px-20">
      <div className="flex flex-col gap-10 md:pt-[42px]">
    <h2 className="uppercase text-2xl font-medium leading-[27px] -tracking-[0.04em] md:text-[28px] md:leading-[32px] md:tracking-tight xl:text-[40px] xl:leading-[44px] xl:tracking-[0.01em]">{BUYING_DATA.title}</h2>
    <ul className="flex flex-col gap-5">
      {BUYING_DATA.list.map(({id, text}) => (
        <li key={id} className="flex flex-row items-center gap-[14px]">
          <span className="w-10 h-[38px] bg-green rounded-full flex justify-center items-center md:w-[46px] md:h-11">{id}</span>
          <p className="max-w-[199px] w-full text-sm leading-[18.5px] tracking-tighter xl:max-w-[289px]">{text}</p>
        </li>
      ))}
    </ul>
      </div>
    <img 
      src={BUYING_DATA.img.src}
      alt={BUYING_DATA.img.alt}
      width={BUYING_DATA.img.width}
      height={BUYING_DATA.img.height}
      className="self-center min-h-[319px] w-full max-w-[258px] object-cover md:max-w-[350px] md:h-[446px] xl:max-w-[434px] xl:h-[420px]"
      />
      </div>
  </section> );
}
 
export default Buying;
