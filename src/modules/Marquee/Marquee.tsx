import MarqueeComponent from "react-fast-marquee";

const Marquee = () => {
  return (
    <div className="pt-[92px] pb-[100px] md:pt-[119px] md:pb-[110px] lg:pt-[161px] lg:pb-[114px] relative">
      <div className="rotate-[4deg] md:rotate-2 lg:rotate-3">
      <MarqueeComponent autoFill pauseOnHover delay={50}>
        <h2 className="text-2xl bg-orange pt-2 pb-3 px-14 md:py-4 lg:text-[40px] lg:leading-[50px] lg:pt-[21px] lg:pb-[29px]">Discount up to <span className="italic">40%!</span> Taste <span className="italic">the vitamins</span> and keep your health</h2>
      </MarqueeComponent>
      </div>
      <div className="-translate-y-[8%] -rotate-[7deg] md:-translate-y-[30%] md:-rotate-[4deg] lg:-translate-y-[34%] lg:-rotate-2">
      <MarqueeComponent autoFill pauseOnHover>
        <h2 className="text-2xl bg-green pt-2 pb-3 px-14 md:py-4  lg:text-[40px] lg:leading-[50px] lg:pt-[21px] lg:pb-[29px]">Discount up to <span className="italic">40%!</span> Taste <span className="italic">the vitamins</span> and keep your health</h2>
      </MarqueeComponent>
      </div>
    </div>
  );
};

export default Marquee;
