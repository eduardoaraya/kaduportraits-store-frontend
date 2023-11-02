"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

export const OverlayerContext = createContext<{
  overlayer: boolean;
  setOverlayer: Dispatch<SetStateAction<boolean>>;
}>({
  overlayer: false,
  setOverlayer: () => null,
});

export default function OverlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [overlayer, _setOverlayer] = useState<boolean>(false);

  const setOverlayer = (_overlayer: SetStateAction<boolean>) => {
    _setOverlayer(_overlayer);
    const overflowClassName = "overflow-hidden";
    if (_overlayer)
      return document.querySelector("body")?.classList.add(overflowClassName);

    document.querySelector("body")?.classList.remove(overflowClassName);
  };

  return (
    <OverlayerContext.Provider value={{ overlayer, setOverlayer }}>
      {children}
    </OverlayerContext.Provider>
  );
}
