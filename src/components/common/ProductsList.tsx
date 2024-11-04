import React from "react";
import { Button } from "../ui/button";
import { ProductCard } from "../common";

const ProductsList = ({ title }: { title: string }) => {
  return (
    <section className="">
      <div className="flex flex-col gap-4 md:flex-row justify-between">
        <h2 className="text-[24px] md:text-[32px] font-bold">{title}</h2>
        <div className="flex items-center flex-wrap gap-3">
          <Button className="text-[14px] font-normal hover:brightness-[0.95] px-5 h-[37px] rounded-[12px]">
            Хит
          </Button>
          <Button className="text-[14px] font-normal hover:brightness-[0.95] px-5 h-[37px] rounded-[12px] bg-[#F4F4F4] hover:bg-[#F4F4F4] text-black">
            Новинка
          </Button>
          <Button className="text-[14px] font-normal hover:brightness-[0.95] px-5 h-[37px] rounded-[12px] bg-[#F4F4F4] hover:bg-[#F4F4F4] text-black">
            Акция
          </Button>
          <Button className="text-[14px] font-normal hover:brightness-[0.95] px-5 h-[37px] rounded-[12px] bg-[#F4F4F4] hover:bg-[#F4F4F4] text-black">
            Советуем
          </Button>
        </div>
      </div>
      <div className="mt-16">
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductsList;
