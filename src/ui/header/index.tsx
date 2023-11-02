import Image from "next/image";
import { Cart } from "../cart";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="container m-auto py-5 px-3 flex justify-between">
        <Image alt="logo" width="300" height="80" src="/logo.png"></Image>
        <Cart />
      </div>
    </header>
  );
}
