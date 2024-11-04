import { HistoryProductCard } from "@/components/partner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const ProductHistory = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex md:items-center flex-col md:flex-row gap-3">
          <h2 className="text-[24px] md:text-[36px] font-bold">
            Личный кабинет партнера
          </h2>
          <div className="flex items-center space-x-2">
            <Checkbox
              className="border-yellow w-[20px] h-[20px] bg-[#F0F1F2] "
              id="terms"
            />
            <label
              htmlFor="terms"
              className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              24 вашего товара
            </label>
          </div>
        </div>
        <Button className="text-[14px] hidden md:block border font-normal hover:brightness-[0.95] px-6 h-[30px] rounded-[4px] bg-[#ffffff] hover:bg-[#F4F4F4] text-black">
          По популярности
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4">
        <HistoryProductCard />
        <HistoryProductCard />
        <HistoryProductCard />
        <HistoryProductCard />
      </div>
      <Button className="text-[18px] max-w-[510px] w-full border font-normal hover:brightness-[0.95] px-6 h-[55px] rounded-[12px] ">
        Добавить товар
      </Button>
    </div>
  );
};

export default ProductHistory;
