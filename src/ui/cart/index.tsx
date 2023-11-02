"use client";

import { CartContext } from "@kaduportraits-store/context/cart-provider";
import { OverlayerContext } from "@kaduportraits-store/context/overlayer-provider";
import type { Content } from "@kaduportraits-store/contracts/catalog";
import { FormEvent, useContext, useRef, useState } from "react";

export type CartType = {
  items: { [key: string]: Content };
  total?: number;
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

export function Cart(): JSX.Element {
  const { setOverlayer } = useContext(OverlayerContext);
  const { cart, setCart } = useContext(CartContext);
  const [expanded, setExpanded] = useState<boolean>(false);
  const cartList = Object.values(cart.items);
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPhoneRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const expandCart = (value: boolean) => {
    setExpanded(value);
    setOverlayer(value);
  };

  const removeItem = (item: Content) => {
    delete cart.items[item.Key];
    setCart && setCart({ ...cart });
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

  return (
    <>
      <div
        onClick={() => expandCart(true)}
        className="select-none flex duration-200 items-center shadow-md rounded-full w-[50px] h-[50px] p-2 cursor-pointer hover:bg-black active:bg-black/50 hover:text-white"
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
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <span>{cartList.length}</span>
      </div>

      {expanded && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black/40 flex justify-center">
          <div className="relative bg-white border-2 border-black max-w-screen-md w-full p-10 shadow-md rounded-sm overflow-y-auto">
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
            <div className="pt-5">
              <div className="font-bold flex items-center">
                {cartList.length === 0 && <p>Sua sacola está vazia!</p>}
              </div>
              <ul className="pt-5 h-[400px] md:h-[500px] overflow-y-auto">
                {cartList.map((item) => (
                  <li
                    key={item.Key}
                    className="flex flex-row justify-between items-center bg-slate-100 m-1 p-2"
                  >
                    <div>
                      <div
                        style={{
                          backgroundImage: `url(${item?.Url})`,
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                        }}
                        className="bg-black border-2 border-black w-[100px] h-[100px] md:w-[200px] md:h-[200px] flex justify-center items-center"
                      ></div>
                    </div>
                    <div>Valor: R$ 15,00</div>
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
                  </li>
                ))}
              </ul>
              <form
                onSubmit={handleSubmit}
                className="px-5 py-3 flex flex-col md:flex-row md:justify-between"
              >
                <p className="text-lg	 font-semibold w-[250px]">
                  Total: R${" "}
                  {(cartList.length * 15).toFixed(2).replace(".", ",")}
                </p>

                <div className="flex flex-col w-full">
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}
