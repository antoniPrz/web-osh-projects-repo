import { Menu } from "lucide-react";
import { LogoRegosh } from "./LogoRegosh";

export function Header() {
  return (
    <div className="flex items-center px-4 py-2 gap-5 h-24 shadow-xl">
    <LogoRegosh/>
      <span className="text-2xl font-semibold">REGOSH</span>
      <button className="ml-auto border-2 border-[#F16E6F]  px-2 py-1">
      <Menu className="text-[#1890FF] "/>
      </button>
    </div>
  );
}
