"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { CartContext } from "./cart-provider";
import { Content } from "@kaduportraits-store/contracts/catalog";
import { Preview } from "@kaduportraits-store/components/features/preview";

export const PreviewContext = createContext<{
  currentPhoto: Content | null;
  setCurrentPhoto: Dispatch<SetStateAction<Content | null>>;
}>({
  currentPhoto: null,
  setCurrentPhoto: () => null,
});

export function PreviewProvider({ children }: { children: React.ReactNode }) {
  const [currentPhoto, setCurrentPhoto] = useState<Content | null>(null);
  const { cart, setCart } = useContext(CartContext);
  const url = "https://kaduportraits.s3.sa-east-1.amazonaws.com/";

  const getSrc = (key: string): string => url + key;

  const selectPhoto = (photo: Content) => {
    setCart &&
      setCart({
        items: {
          ...cart.items,
          [photo.Key]: { ...photo, Url: getSrc(photo.Key) },
        },
      });
  };

  return (
    <>
      <PreviewContext.Provider value={{ currentPhoto, setCurrentPhoto }}>
        {children}
      </PreviewContext.Provider>
      {currentPhoto && (
        <Preview
          selecteds={cart.items}
          url={url}
          photo={currentPhoto}
          close={() => setCurrentPhoto(null)}
          next={() => console.log("> Next")}
          prev={() => console.log("> Prev")}
          select={() => selectPhoto(currentPhoto)}
        />
      )}
    </>
  );
}
