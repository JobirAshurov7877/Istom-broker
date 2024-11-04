import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { IoClose } from "react-icons/io5";

export function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="ms-8 text-[14px] font-normal hover:brightness-[0.95] px-6 h-[50px] rounded-[12px]">
          Войти
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[570px]">
        <DialogHeader className="relative">
          <DialogTitle className="text-[36px] font-normal">
            Вход в личный кабинет
          </DialogTitle>
          <Button>
            <IoClose />
          </Button>
          <DialogDescription>
            <form action="" className="mt-4">
              <div className="">
                <label
                  htmlFor="fullName"
                  className="text-[14px] md:text-[18px] text-[#00000080]"
                >
                  Ваше имя: <span className="text-[#FF6565]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="w-full h-[57px] mt-2 border border-[#00000080]  px-3 rounded-[5px]"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="text-[14px] md:text-[18px] text-[#00000080]"
                >
                  Пароль <span className="text-[#FF6565]">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full h-[57px] border mt-2 border-[#00000080]  px-3 rounded-[5px]"
                />
              </div>

              <div className="my-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    className="border-[#C5C5C5] bg-[#F0F1F2 w-[33px] h-[33px]"
                    id="terms"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-[#00000080] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Запоминить меня
                  </label>
                </div>
                <Link
                  href="/"
                  className="text-[#7288D7] text-[14px] font-semibold"
                >
                  Забыли пароль?
                </Link>
              </div>

              <Button className="text-[14px] md:text-[18px] mt-3 w-full font-normal hover:brightness-[0.95] px-6 h-[42px] md:h-[55px] rounded-[12px]">
                Войти
              </Button>
              <Button className="text-[14px] bg-[#FFECD4] text-yellow hover:bg-[#FFECD4] md:text-[18px] mt-3 w-full font-bold hover:brightness-[0.95] px-6 h-[42px] md:h-[55px] rounded-[12px]">
                Регистрация
              </Button>
              <p className="text-[10px] md:text-[14px] mt-2">
                Продолжая, вы соглашаетесь с{" "}
                <Link href="/" className="text-[#7288D7]">
                  политикой конфиденциальности
                </Link>
              </p>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
