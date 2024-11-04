import { ProductCard, Subscribe } from "@/components/common";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function Catalog() {
  return (
    <>
      <div className="container">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="lg:text-[36px] font-bold p-0 leading-none">Каталог</h1>
          <span className="border-[1.5px] border-yellow w-[72px] h-[24px] rounded-[4px] flex justify-center items-center text-[10px]">
            1340 товара
          </span>
        </div>
        <Breadcrumb className="my-5">
          <BreadcrumbList className="text-[14px] ">
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/client/home">Главная</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Каталог</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-3 flex gap-5 overflow-auto">
          <Button className="text-[14px] border font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[12px] bg-[#F4F4F4] hover:bg-[#F4F4F4] text-black">
            Стоматология
          </Button>
          <Button className="text-[14px] border font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[12px] bg-[#F4F4F4] hover:bg-[#F4F4F4] text-black">
            Косметология
          </Button>
          <Button className="text-[14px] border font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[12px] bg-[#F4F4F4] hover:bg-[#F4F4F4] text-black">
            Для медицинских учереждений
          </Button>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 mt-4 mb-8">
          <div className="hidden lg:block col-span-1 border min-h-[600px] rounded-[10px] py-2 px-3">
            <h2 className=" md:text-[24px] font-bold">Фильтр</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  Цена
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      className="border-[#C5C5C5] bg-[#F0F1F2"
                      id="terms"
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-[#818181] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      B.Braun (9)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      className="border-[#C5C5C5] bg-[#F0F1F2"
                      id="terms"
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-[#818181] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Iconlab (2)
                    </label>
                  </div>
                  <Button
                    variant={"ghost"}
                    className="p-0 text-[#FFAB41] hover:bg-[#fff]"
                  >
                    Показать еще...
                  </Button>
                  <div className="">
                    <Button className="text-[14px] w-full font-normal hover:brightness-[0.95] px-6 h-[40px] rounded-[12px]">
                      Применить
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="col-span-3 md:p-6">
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox className="border-[#C5C5C5] bg-[#F0F1F2" id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Товары в наличии
                </label>
              </div>
              <Button className="text-[14px] border font-normal hover:brightness-[0.95] px-6 h-[30px] rounded-[4px] bg-[#ffffff] hover:bg-[#F4F4F4] text-black">
                По популярности
              </Button>
            </div>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-2 mt-5">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}
