import Image from "next/image";
import { Cart } from "../cart";
import { useIsClient } from "@kaduportraits-store/hooks/use-is-client";

export function Header() {
  const { isClient } = useIsClient();

  return (
    <header className="bg-tertiary fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="container m-auto py-5 px-3 flex justify-between">
        <Image alt="logo" width="300" height="80" src="/logo.png"></Image>
        <nav className="w-[300px] flex items-center">
          <ul className="flex items-center justify-start gap-5 mr-10 text-secondary font-sans">
            <li>Home</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
          {isClient && <Cart />}
        </nav>
      </div>
    </header>
  );
}
