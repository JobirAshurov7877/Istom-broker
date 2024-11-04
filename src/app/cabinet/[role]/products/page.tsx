"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import ImageUploadIcon from "@/assets/icons/upload-icon.svg";

const Products = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handler to trigger file input when icon is clicked
  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log("Selected files:", files);
      // You can handle the files here (e.g., upload or display them)
    }
  };
  return (
    <div className=" mb-16">
      <h2 className="text-[24px] md:text-[36px] font-bold">
        Загрузить карточку товара
      </h2>
      <form
        action=""
        className="mt-4 max-w-[510px] space-y-3 w-full md:space-y-5"
      >
        <div className="">
          <label
            htmlFor="fullName"
            className="text-[14px] md:text-[18px] text-[#00000080]"
          >
            Укажите ФИО: <span className="text-[#FF6565]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="w-full h-[38px] md:h-[57px] mt-2 border border-[#00000050] rounded-[3px]  px-3 md:rounded-[5px]"
          />
        </div>
        <div className="">
          <label
            htmlFor="password"
            className="text-[14px] md:text-[18px] text-[#00000080]"
          >
            Электронная почта <span className="text-[#FF6565]">*</span>
          </label>
          <input
            type="email"
            name="password"
            id="password"
            className="w-full h-[38px] md:h-[57px] border mt-2 border-[#00000050] rounded-[3px]  px-3 md:rounded-[5px]"
          />
          <span className="text-[14px] font-normal">
            Является также логином для входа на сайт
          </span>
        </div>
        <div className="">
          <label
            htmlFor="fullName"
            className="text-[14px] md:text-[18px] text-[#00000080]"
          >
            Телефон: <span className="text-[#FF6565]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="w-full h-[38px] md:h-[57px] mt-2 border border-[#00000050] rounded-[3px]  px-3 md:rounded-[5px]"
          />
        </div>
        <div className="">
          <label
            htmlFor="fullName"
            className="text-[14px] md:text-[18px] text-[#00000080]"
          >
            Укажите ИНН: <span className="text-[#FF6565]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="w-full h-[38px] md:h-[57px] mt-2 border border-[#00000050] rounded-[3px]  px-3 md:rounded-[5px]"
          />
        </div>
        <div className="">
          <label
            htmlFor="fullName"
            className="text-[14px] md:text-[18px] text-[#00000080]"
          >
            Укажите заголовок товара: <span className="text-[#FF6565]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="w-full h-[38px] md:h-[57px] mt-2 border border-[#00000050] rounded-[3px]  px-3 md:rounded-[5px]"
          />
          <span className="text-[14px] font-normal">
            Длина заголовка не менее 6 символов
          </span>
        </div>
        <div className="">
          <label
            htmlFor="fullName"
            className="text-[14px] md:text-[18px] text-[#00000080]"
          >
            Укажите описание товара: <span className="text-[#FF6565]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="w-full h-[38px] md:h-[57px] mt-2 border border-[#00000050] rounded-[3px]  px-3 md:rounded-[5px]"
          />
        </div>
        <div className="">
          <label
            htmlFor="fullName"
            className="text-[14px] md:text-[18px] text-[#00000080]"
          >
            Дайте артикул товару: <span className="text-[#FF6565]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="w-full h-[38px] md:h-[57px] mt-2 border border-[#00000050] rounded-[3px]  px-3 md:rounded-[5px]"
          />
        </div>
        <div className="">
          <label
            htmlFor="запрос"
            className="text-[14px] md:text-[18px] text-[#00000080]"
          >
            Добавьте характеристики товара
            <span className="text-[#FF6565]">*</span>
          </label>
          <textarea
            name="запрос"
            rows={5}
            cols={30}
            id="запрос"
            className="w-full  border border-[#00000080]  p-3 rounded-[5px] resize-none"
          />
        </div>
        <div className="flex gap-3 items-center">
          <Image
            onClick={handleIconClick}
            src={ImageUploadIcon}
            alt="upload image icon"
            className="min-w-[42px] h-[42px] md:min-w-[68px] md:h-[68px] cursor-pointer"
          />
          <div className="text-[#00000080]">
            <h4 className="text-[12px] md:text-[18px]">
              Добавьте фото товара не более 10
            </h4>
            <p className="text-[10px] md:text-[14px]">
              Добавьте фото товара не более 10
            </p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              multiple
              style={{ display: "none" }}
            />
          </div>
        </div>
        <Button className="text-[14px] md:text-[18px] mt-3 w-full font-normal hover:brightness-[0.95] px-6 h-[42px] md:h-[55px] rounded-[12px]">
          Выложить
        </Button>
        <p className="text-[10px] md:text-[14px] mt-2 text  text-[#00000080]">
          Продолжая, вы соглашаетесь с{" "}
          <Link href="/" className="text-[#7288D7]">
            политикой конфиденциальности
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Products;
