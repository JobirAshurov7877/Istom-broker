import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import TrashIcon from "@/assets/icons/trash-icon.svg";
import FavoriteIcon from "@/assets/icons/favorite.svg";

const CartItem = () => {
  return (
    <div className="lg:h-[170px] border mt-3 rounded-[5px] flex flex-col md:flex-row justify-between items-start md:items-center p-8 gap-3">
      <div className="flex gap-4">
        <div className="border w-[110px] h-[110px] rounded-[10px]"></div>
        <div className="">
          <span className="text-[10px] inline-block leading-[25px] text-white  px-2 h-[25px] rounded-[5px] bg-[#FF6565] hover:bg-[#FF6565] tracking-[2px] font-bold">
            ХИТ
          </span>
          <h2 className="text-[18px] font-normal mt-2">ТОР Кламп № В5</h2>
        </div>
      </div>
      <div className="h-[43px] min-w-[100px] rounded-[5px] bg-[#F4F4F4] flex justify-between items-center">
        <Button variant={"ghost"} className="text-[20px] text-[#B2B2B2]">
          -
        </Button>
        <span className="text-[20px] font-bold">1</span>
        <Button variant={"ghost"} className="text-[20px] text-[#B2B2B2]">
          +
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <h4 className="text-[18px] font-bold">8 200 ₽ / шт.</h4>
        <span className="line-through text-[#818181] text-[12px]">
          9 750 ₽ / шт.
        </span>
        <Image src={TrashIcon} alt="delete" />
        <Image src={FavoriteIcon} alt="favorite" />
      </div>
    </div>
  );
};

export default CartItem;
