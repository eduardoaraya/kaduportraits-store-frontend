import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-screen-xl m-auto py-5 px-3">
        <Image alt="logo" width="300" height="80" src="/logo.png"></Image>
      </div>
    </header>
  );
}
