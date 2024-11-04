"use client";

import Image from "next/image";
import exapleImage from "@/assets/images/image.png";
import { Button } from "../ui/button";
import { ImStarFull } from "react-icons/im";
import { GoDotFill, GoHeart } from "react-icons/go";
import { useState } from "react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaSortDown } from "react-icons/fa";
import Link from "next/link";
const frameworks = [
  {
    value: "s",
    label: "S",
  },
  {
    value: "xl",
    label: "XL",
  },
];

const ProductCard = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="max-w-[284px] h-[600px] w-full ">
      <Link href="/client/product/1" className="head w-full relative">
        <div className="mb-10">
          <Button className="text-[10px] hover:brightness-[0.95] px-2 h-[25px] rounded-[5px] bg-[#A56FFD] hover:bg-[#A56FFD] tracking-[2px] font-bold">
            СОВЕТУЕМ
          </Button>
        </div>
        <div className="h-[254px] w-full">
          <Image
            src={exapleImage}
            alt="product"
            className="obcject-contain w-full h-full"
          />
        </div>
      </Link>
      <div className="body mt-3">
        <h3 className="text-[14px] font-normal">
          Сменный резервуар Waterpik RR
        </h3>
        <p className="text-[#818181] text-[12px] mt-3">
          Артикул товара: 4097391
        </p>
        <div className="mt-2 text-[12px] flex space-x-3">
          <div className="flex items-center space-x-1">
            <ImStarFull className="text-yellow text-[15px]" /> <span>4.7</span>
          </div>
          <div className="flex items-center space-x-1 text-[#818181]">
            <GoDotFill />
            <span>Нет в наличии</span>
          </div>
        </div>
        <div className="mt-3">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between h-[32px] text-[14px] text-black bg-[#FFAB414D] rounded-[6px]"
              >
                {value
                  ? frameworks.find((framework) => framework.value === value)
                      ?.label
                  : "Select size"}

                <FaSortDown className=" h-4 w-4 mb-1 shrink-0 " />
              </Button>
            </PopoverTrigger>
            <PopoverContent className=" p-0">
              <Command>
                <CommandList>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <h4 className="text-[18px] font-bold mt-2">1 745 ₽ / шт.</h4>
        <div className="mt-2 flex justify-between items-center">
          <Button className="text-[14px] font-semibold max-w-[220px] w-full  hover:brightness-[0.95] px-6 h-[40px] rounded-[12px]">
            В корзину
          </Button>
          <GoHeart className="text-[26px] text-yellow" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
