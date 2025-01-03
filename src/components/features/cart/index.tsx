"use client";

import { CartContext } from "@kaduportraits-store/providers/cart-provider";
import { OverlayerContext } from "@kaduportraits-store/providers/overlayer-provider";
import type { Content } from "@kaduportraits-store/contracts/catalog";
import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { CartSVG } from "@kaduportraits-store/components/svg/cart";
import { Preview } from "../preview";
import { PreviewContext } from "@kaduportraits-store/providers/preview-provider";
import { prices } from "@kaduportraits-store/static-data/prices";
import { Select } from "@kaduportraits-store/components/ui/select";

export type CartType = {
  items: { [key: string]: Content };
  total?: number;
};

export function Cart(): JSX.Element {
  const url = "https://kaduportraits.s3.sa-east-1.amazonaws.com/";
  const { setOverlayer } = useContext(OverlayerContext);
  const { cart, setCart } = useContext(CartContext);
  const [expanded, setExpanded] = useState<boolean>(false);
  const cartList: Content[] = Object.values(cart?.items);
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPhoneRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { currentPhoto, setCurrentPhoto } = useContext(PreviewContext);

  const expandCart = (value: boolean) => {
    setExpanded(value);
    setOverlayer(value);
  };

  const removeItem = (item?: Content) => {
    if (!item) return;
    delete cart.items[item.Key];
    setCart && setCart({ ...cart });
  };

  const sendOrder = async (data: {
    name: string;
    email: string;
    phone: string;
    items: CartType["items"];
  }) => {
    try {
      const response = await fetch(
        "https://5v6kiswwi4.execute-api.sa-east-1.amazonaws.com/v1/sendOrder",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const json = await response.json();
      return json;
    } catch (_err) {
      alert("Ocorreu um erro, tente novamente mais tarde!");
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    try {
      event.preventDefault();
      const [name, email, phone] = [
        inputNameRef.current?.value,
        inputEmailRef.current?.value,
        inputPhoneRef.current?.value,
      ];
      if (!name || !email || !phone)
        return alert("Preencha corretamente os dados!");

      setLoading(true);
      await sendOrder({
        name,
        email,
        phone,
        items: cart.items,
      });
      alert("Solicitação em andamento, aguarde e logo entraremos em contato!");
      expandCart(false);
      localStorage.setItem(
        `_order::${new Date().getTime()}`,
        JSON.stringify(cart)
      );
      setCart &&
        setCart({
          items: {},
          total: 0,
        });
    } catch (_err) {
      console.log(_err);
      alert(
        "Ocorreu um erro na sua solicitação, tente novamente ou contate o nosso suporte!"
      );
    } finally {
      setLoading(false);
    }
  };

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
      <div
        onClick={() => expandCart(true)}
        className="select-none flex duration-200 items-center shadow-md rounded-full w-[50px] h-[50px] p-2 cursor-pointer hover:bg-secondary active:bg-secondary/50 hover:text-white"
      >
        <CartSVG />
        <span>{cartList.length}</span>
      </div>

      {expanded && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black/40 flex justify-center">
          <div className="relative bg-white border-2 w-full p-10 shadow-md rounded-sm overflow-y-auto">
            <div
              className="absolute top-5 right-5 bg-white/90 z-50 cursor-pointer"
              onClick={() => expandCart(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="pt-5 container m-auto grid md:grid-cols-5 grid-cols-1 auto-rows-auto">
              {cartList.length === 0 && (
                <div className="font-bold flex items-center md:col-span-3 col-span-1">
                  <p>Sua sacola está vazia!</p>
                </div>
              )}
              <ul className="md:col-span-3 col-span-1 pt-5 h-[400px] md:h-[500px] overflow-y-auto divide-y divide-gray-100">
                {cartList.map((item, key) => (
                  <li
                    key={key}
                    className="flex justify-between items-center gap-x-6 p-5"
                  >
                    <div className="flex min-w-0 gap-x-4">
                      <img
                        onClick={() => setCurrentPhoto(item)}
                        className="h-full w-[80px] flex-none bg-gray-50"
                        src={item.Url}
                        alt=""
                      />
                      <div className="min-w-0 flex-auto">
                        <Select
                          label="Opções de qualidade de imagem"
                          value={prices.medium.price}
                          options={Object.values(prices).map((price) => ({
                            value: price.price,
                            label: `${price.brlFormat}  ${price.name}`,
                          }))}
                        />
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                      <button
                        className="text-red-600"
                        onClick={() => removeItem(item)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <form
                onSubmit={handleSubmit}
                className="md:col-span-2 col-span-1 px-5 py-3 flex flex-col md:flex-row md:justify-between"
              >
                <div className="flex flex-col w-full p-5">
                  <label className="mt-1" htmlFor="cart-name">
                    Nome
                  </label>
                  <input
                    ref={inputNameRef}
                    id="cart-name"
                    type="text"
                    name="name"
                    className="p-1 border-2 border-slate-600"
                  />
                  <label className="mt-1" htmlFor="cart-email">
                    E-mail
                  </label>
                  <input
                    ref={inputEmailRef}
                    id="cart-email"
                    type="email"
                    name="email"
                    className="p-1 border-2 border-slate-600"
                  />
                  <label className="mt-1" htmlFor="cart-tel">
                    Telefone/Celular
                  </label>
                  <input
                    ref={inputPhoneRef}
                    id="cart-tel"
                    type="tel"
                    name="phone"
                    className="p-1 border-2 border-slate-600 mt-1"
                  />
                  <div className="flex justify-center items-center p-3">
                    {loading && (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}
                  </div>
                  <button
                    disabled={cartList.length === 0 || loading}
                    className={`px-5 py-3 ${
                      cartList.length === 0
                        ? "bg-gray-600"
                        : "bg-green-600 active:bg-green-300"
                    } text-white shadow-md select-none rounded-sm uppercase z-40 mt-1 duration-200`}
                  >
                    Solicitar
                  </button>
                </div>
              </form>
              <div className="md:col-span-3 col-span-1">
                <p className="font-sans text-lg text-left">
                  Total: R${" "}
                  {(cartList.length * 15).toFixed(2).replace(".", ",")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
