import { FOOTER_DATA } from "./data";

const Footer = () => {
  return ( 
    <footer className="bg-light-green text-black mt-[43px]">
      <div className="container">
      <div className="flex flex-row flex-wrap md:max-lg:gap-x-20 justify-center lg:justify-between items-center py-10 lg:py-20 pl-0 lg:pr-[110px]">
        <div className="flex flex-col justify-center items-center gap-4 md:gap-5">
          <img src={FOOTER_DATA.img.src} alt={FOOTER_DATA.img.alt} width={349} height={179} />
          <a href="#">
            <img src={FOOTER_DATA.logo} alt="logo icon" width={118} height={18} />
          </a>
        </div>
        <nav className="w-full flex justify-center md:w-fit md:order-2 min-[997px]:order-none">
          <ul className="flex  gap-5 pb-8 pt-9 lg:pt-0">
            {FOOTER_DATA.links && FOOTER_DATA.links.map(({ id, name, link }) => (
              <li key={id}>
                <a href={link} className="text-sm -tracking-[0.04em]">{name}</a>
              </li>
            ))}
          </ul>
        </nav>
          <div className="flex flex-col gap-10 pb-[15px]">
          <ul className="flex gap-5">
            {FOOTER_DATA.iconLinks && FOOTER_DATA.iconLinks.map(({ alt, icon, id, link }) => (
              <li key={id}>
                <a href={link} className="group block p-[6.4px] border-black border-2 border-solid rounded-[10px] duration-200 transition-all hover:border-green">
                  <img src={icon} alt={alt} width={28} height={28} className="transition-all duration-200 group-hover:filter group-hover:invert-[87%] group-hover:sepia-[21%] group-hover:saturate-[582%] group-hover:hue-rotate-[45deg] group-hover:brightness-[86%] group-hover:contrast-[81%]" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 md:gap-5">
          <a href="tel:+380 (68) 443-94-26" className="pl-2 md:pl-0 -tracking-[0.05em] md:tracking-[0.07em]">{FOOTER_DATA.contacts.phone}</a>
          <p className="text-center text-sm leading-[18px] -tracking-[0.03em] md:text-lg md:text-left md:tracking-[0.04em]">1678 S. Pioneer Road <br />
              Salt Lake City <br />
              UT 84104</p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
 
export default Footer;
