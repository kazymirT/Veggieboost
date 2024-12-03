import { type FC } from "react";
import { type ProductItemProps } from "./types";
import oval from '../../../assets/icons/Oval.svg';

const ProductItem: FC<ProductItemProps> = ({ id, img, price, subTitle, title, height, width }) => {
  const handleAddItemToCart = () => console.log('item id-', id);
  return ( 
    <div className="group flex flex-col gap-5 md:gap-0 w-full max-w-[389px] min-w-[280px] sm:min-w-[335px] rounded-[20px] px-5 pt-10 pb-5 md:px-6 md:pb-6 md:pt-16 bg-light-green hover:cursor-pointer" onClick={handleAddItemToCart}>
      <div className="flex flex-col gap-[9px] md:gap-[7px]">
      <h3 className="text-2xl leading-7 -tracking-[0.04em] md:text-[28px] md:leading-8 md:-tracking-[0.035em] lg:text-[32px] font-bold lg:leading-[38px] lg:tracking-tight">{title}</h3>
      <p className="capitalize text-sm leading-[18px] md:text-lg md:leading-6 md:-tracking-[0.01em]">{subTitle}</p>
      </div>
      <div className="h-[261px] px-[10px] flex flex-col justify-center items-center relative">
        <img src={img} width={width} height={height} alt={`image ${title}`} className="absolute -top-2 transition-all duration-300 group-hover:translate-y-3" />
        <img src={oval} width={195} height={38} alt="shadow icon" className="absolute bottom-0" />
      </div>
      <p className="pt-[10px] md:pt-7 lg:pt-5 font-medium text-sm leading-[18px] md:text-lg -tracking-[0.035em]">{price}</p>
    </div> 
  );
}
 
export default ProductItem;
