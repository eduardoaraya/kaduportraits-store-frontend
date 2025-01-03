import Image from "next/image";
import { Cart } from "../../features/cart";
import { useIsClient } from "@kaduportraits-store/hooks/use-is-client";

export function Header() {
  const { isClient } = useIsClient();
  return (
    <header className="bg-tertiary fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="container m-auto py-5 px-3 flex flex-col items-center justify-center">
        <Image alt="logo" width="100" height="80" src="/shiki-logo.png"></Image>
        <nav className="w-full flex items-center justify-center p-5">
          <ul className="flex items-center justify-center gap-5 mr-10 text-secondary font-sans">
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
