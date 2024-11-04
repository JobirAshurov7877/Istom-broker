import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const ProductFeatues = () => {
  return (
    <div>
      <Tabs defaultValue="description" className=" p-0">
        <TabsList className="bg-transparent p-0 md:border-b justify-start overflow-auto  w-full rounded-none text-[14px] md:text-base space-x-4">
          <TabsTrigger value="description">Описание</TabsTrigger>
          <TabsTrigger value="reviews">Отзывы</TabsTrigger>
          <TabsTrigger value="characteristics">Характеристики</TabsTrigger>
          <TabsTrigger value="payment">Оплата</TabsTrigger>
          <TabsTrigger value="delivery">Доставка</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <div className="mt-4">
            <h2 className="text-[16px] md:text-[24px] font-semibold">
              Характеристики
            </h2>
            <ul className="list-disc ps-6 mt-2 text-[14px] md:text-base">
              <li>
                при выборе и припасовке клампа необходимо учитывать, что челюсти
                клампа должны плотно охватывать шейку зуба, фиксироваться на ней
                всеми четырьмя контактными точками. кламп не должен
                балансировать на зубе
              </li>
              <li>
                клампы (кламмера, фиксирующие зажимы) предназначены для фиксации
                коффердама, обеспечения надежной изоляции рабочего поля и
                создания условий для комфортного и безопасного
                стоматологического лечения.
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <h2 className="text-[16px] md:text-[24px] font-semibold">
              Характеристики
            </h2>
            <ul className="list-disc ps-6 mt-2">
              <li>
                при выборе и припасовке клампа необходимо учитывать, что челюсти
                клампа должны плотно охватывать шейку зуба, фиксироваться на ней
                всеми четырьмя контактными точками. кламп не должен
                балансировать на зубе
              </li>
              <li>
                клампы (кламмера, фиксирующие зажимы) предназначены для фиксации
                коффердама, обеспечения надежной изоляции рабочего поля и
                создания условий для комфортного и безопасного
                стоматологического лечения.
              </li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductFeatues;
