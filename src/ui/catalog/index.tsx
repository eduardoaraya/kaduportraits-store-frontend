"use client";
import { debounce_leading } from "@kaduportraits-store/utils/debounce";
import { useContext, useEffect, useState } from "react";
import { Preview } from "../preview";
import "./index.css";
import { Content, Catalog } from "@kaduportraits-store/contracts/catalog";
import { CartContext } from "@kaduportraits-store/context/cart-provider";
import { OverlayerContext } from "@kaduportraits-store/context/overlayer-provider";

export function Catalog() {
  const { setOverlayer } = useContext(OverlayerContext);
  const { cart, setCart } = useContext(CartContext);
  const [catalog, setCatalog] = useState<Content[]>([]);
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [hasData, setHasData] = useState<boolean>(true);
  const [currentPhoto, setCurrentPhoto] = useState<{
    photo: Content;
    key: number;
  } | null>(null);

  const handleCatalog = async (id?: number): Promise<boolean> => {
    try {
      setLoading(true);
      const res = await getCatalog(id ?? null);
      if (!res.data || !res.data.length) {
        setHasData(false);
        return Promise.resolve(false);
      }

      setCatalog((prev) => [...prev, ...res.data]);
      setUrl(res.url);
    } finally {
      setLoading(false);
      return Promise.resolve(true);
    }
  };

  const handleOnScroll = () => {
    if (
      !loading &&
      document.documentElement.scrollTop >=
        document.documentElement.scrollHeight -
          document.documentElement.scrollHeight / 6
    ) {
      if (catalog !== undefined && catalog?.length > 0)
        handleCatalog(
          Number(catalog[catalog.length - 1]?.Key.replace(/[\D]/g, ""))
        ).then();
    }
  };

  const getCatalog = (async (page: number | null) => {
    const res = await fetch(
      `https://5v6kiswwi4.execute-api.sa-east-1.amazonaws.com/v1/getCatalog?page=${Number(
        page
      )}`
    );
    const content = await res.json();
    return content;
  }) satisfies (page: number | null) => Promise<Catalog>;

  useEffect(() => {
    handleCatalog().then();
  }, []);

  useEffect(() => {
    const handle = debounce_leading(handleOnScroll, 150);
    if (!hasData) return window.removeEventListener("scroll", handle);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, [loading]);

  useEffect(() => {
    setOverlayer(Boolean(currentPhoto));
  }, [currentPhoto]);

  const handleCkick = (content: { photo: Content; key: number }) => {
    setCurrentPhoto(content);
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

  const hasPhoto = (photo: Content): boolean => {
    return Boolean(cart.items[photo.Key]);
  };

  return (
    <>
      {currentPhoto && (
        <Preview
          selecteds={cart.items}
          url={url}
          photo={currentPhoto.photo}
          close={() => setCurrentPhoto(null)}
          next={() => console.log("> Next")}
          prev={() => console.log("> Prev")}
          select={() => selectPhoto(currentPhoto.photo)}
        />
      )}
      <div className="relative flex row flex-wrap justify-center">
        {catalog
          ?.filter((photo: Content) => photo.Size > 0)
          .map((photo: Content, key: number) => (
            <div
              key={key}
              className="relative overflow-hidden m-3 max-w-[350px] max-h-[350px] flex flex-col justify-center items-center border-2 border-black bg-black"
            >
              <img
                onClick={() => handleCkick({ photo, key })}
                className="cursor-pointer "
                alt={photo.Key}
                loading="lazy"
                width={350}
                height={350}
                src={getSrc(photo.Key)}
              />
              <div className="actions">
                {hasPhoto(photo) ? (
                  <button
                    disabled={hasPhoto(photo)}
                    onClick={() => selectPhoto(photo)}
                    className="rounded-sm	px-2 py-2 bg-green-600 text-white shadow-md select-none"
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => selectPhoto(photo)}
                    className="rounded-sm	px-2 py-2 bg-green-600/30 hover:bg-green-600/50 text-white shadow-md select-none"
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
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => handleCkick({ photo, key })}
                  className="rounded-sm	px-2 py-2 bg-black/30 hover:bg-black/50 text-white shadow-md select-none"
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
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="w-full m-auto flex justify-center my-5">
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
    </>
  );
}
