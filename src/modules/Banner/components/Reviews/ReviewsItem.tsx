import classNames from "classnames";
import { type FC } from "react";
import { type ReviewItemProps } from "./types";

const ReviewsItem: FC<Partial<ReviewItemProps>> = ({ alt, img, subtitle, title, id, left }) => {
  const itemsCN = classNames("rounded-full border-2 flex justify-center items-center relative size-11 sm:size-[clamp(44px,34.458px+2.545vw,54px)] md:size-[clamp(54px,30px+3.125vw,70px)]", {
    [`z-${id ? id * 10 : undefined}`]: id,
  });
  return (
    <div
      className={itemsCN}
      style={{ left: left ? `-${left}px` : undefined }}
    >
      {img && <img src={img} alt={alt} width={66} height={66} className="w-full h-full" />}
      {title && (
        <div className="flex flex-col justify-center items-center gap-[2px] pt-[9px] size-11 sm:size-[clamp(44px,34.458px+2.545vw,54px)] md:size-[clamp(54px,30px+3.125vw,70px)] text-black bg-white rounded-full">
          <p className="uppercase text-sm text-[clamp(14px,10.183px+1.018vw,18px)] md:text-[clamp(18px,9px+1.172vw,24px)] sm:leading-[8px] md:leading-[14px]  lg:leading-[23px]">{title}</p>
          <p className="text-[8px] sm:text-[clamp(8px,6.092px+0.509vw,10px)] md:text-[clamp(10px,7px+0.391vw,12px)]">{subtitle}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewsItem;
