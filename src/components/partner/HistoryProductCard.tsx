import Image from "next/image";
import React from "react";
import ImageProduct from "@/assets/images/image.png";

const HistoryProductCard = () => {
  return (
    <div className="border rounded-[5px] p-5">
      <div className="flex gap-3">
        <div className="min-w-[75px] h-[75px] md:min-w-[118px] md:h-[118px] border rounded-[10px]">
          <Image
            src={ImageProduct}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="">
          <div className="">
            <span className="text-[10px] inline-block leading-[25px] text-white  px-2 h-[25px] rounded-[5px] bg-[#FF6565] hover:bg-[#FF6565] tracking-[2px] font-bold">
              ХИТ
            </span>
          </div>
          <p className="text-[12px] md:text-[14px] font-normal mt-2">
            VivanoMed Foam Kit (ВиваноМед Фоам Кит) - Стерильный перевязочный
            набор для вакуумной терапии ран
          </p>
        </div>
      </div>
      <div className="space-y-1 mt-3">
        <p className="text-[14px] font-bold">
          Статус:<span className="font-normal ms-2">Оплачено</span>
        </p>
        <p className="text-[14px] font-bold">
          Стоимость:<span className="font-normal ms-2">8 500 рублей.</span>
        </p>
        <p className="text-[14px] font-bold">
          Дата создания:<span className="font-normal ms-2">27.08.2024</span>
        </p>
      </div>
    </div>
  );
};

export default HistoryProductCard;
