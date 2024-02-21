import MainMenuItem from "@/components/MainMenuItem";
import MobileMenu from "@/components/MobileMenu";
import { type MainMenuItemProps } from "@/types";

export default function Page() {
  return (
    <>
      <nav className="border-b shadow-lg">
        <div className="flex justify-between items-center max-w-screen-2xl mx-auto py-4 px-6">
          <div>LOGO</div>
          <menu className="gap-1 items-center hidden lg:flex">
            {mainMenuItems.map((props, key) => (
              <MainMenuItem key={key} {...props} />
            ))}
          </menu>
          <MobileMenu className="block lg:hidden" />
        </div>
      </nav>
      <main className="max-w-screen-2xl mx-auto py-4 px-6 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Page</h1>
        <p>Hello content!</p>
      </main>
    </>
  );
}
const mainMenuItems: MainMenuItemProps[] = [
  { href: "/", children: "Check IMEI" },
  {
    href: "/imei-checker",
    children: "IMEI Checker",
    submenu: [
      {
        href: "/imei-checker/iphone",
        children: "iPhone Carrier and IMEI Check",
      },
      {
        href: "/imei-checker/samsung",
        children: "Samsung Carrier and IMEI Check",
      },
      {
        href: "/imei-checker/xiaomi",
        children: "Xiaomi Carrier and IMEI Check",
      },
    ],
  },
  { href: "/calc", children: "IMEI Calculator" },
  {
    href: "/faq",
    children: "FAQ",
    submenu: [
      { href: "/faq/iphone", children: "How to find IMEI on Apple Device" },
      { href: "/faq/samsung", children: "How to find IMEI on Samsung Device" },
      { href: "/faq/xiaomi", children: "How to find IMEI on Xiaomi Device" },
    ],
  },
  { href: "/c-db", children: "Carriers Database" },
  { href: "/p-db", children: "Phone Database" },
  { href: "/news", children: "News" },
];
