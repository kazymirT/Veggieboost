import classNames from "classnames";
import { type FC } from "react";
import { type TagProps } from "./types";

const Tag: FC<TagProps> = ({ text, isActive }) => {
  const buttonCN = classNames('px-[clamp(14px,-3.723px+2.308vw,20px)] md:px-[clamp(20px,2px+2.344vw,32px)] md:py-[clamp(10px,7px+0.391vw,12px)] py-[clamp(8px,6.092px+0.509vw,10px)] border-[1px] border-solid border-[#f9f7f4] rounded-3xl leading-[10.45px] lg:leading-[12.4px] text-[10px] sm:text-[clamp(10px,8.092px+0.509vw,12px)] uppercase -tracking-[0.014em] hover:bg-[#f9f7f4] hover:text-black transition-all duration-300', {
    ["bg-[#f9f7f4] text-black"]: isActive,
  })
  return ( <button className={buttonCN}>{text}</button> );
}
 
export default Tag;
