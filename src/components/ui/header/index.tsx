import Image from "next/image";
import { Cart } from "../../features/cart";
import { useIsClient } from "@kaduportraits-store/hooks/use-is-client";

export function Header() {
  const { isClient } = useIsClient();
  return (
    <header className="bg-highlight fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="container m-auto py-2 lg:py-5 px-1 lg:px-3 flex lg:items-center lg:justify-center">
        <div className="flex justify-start items-center w-full">
          <Image
            alt="logo"
            width="65"
            height="65"
            src="/shiki-logo.png"
          ></Image>
          <h1 className="font-body text-lg lg:text-4xl text-primary">Shiki</h1>
        </div>
        <nav className="w-full flex items-center justify-between lg:justify-center">
          <ul className="w-full flex items-center justify-end gap-5 text-secondary">
            <li className="font-sans">Home</li>
            <li className="font-sans">Sobre</li>
            <li className="font-sans">Contato</li>
          </ul>
          {isClient && (
            <div className="ml-10 p-2">
              <Cart />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
