"use client";
import { Content } from "@kaduportraits-store/contracts/catalog";
import { ChangeEvent, useContext, useState } from "react";

export function Preview({
  photo,
  next,
  prev,
  select,
  close,
  selecteds,
  url,
}: {
  photo: Content;
  url: string;
  next: () => void;
  prev: () => void;
  select: () => void;
  close: () => void;
  selecteds: { [k: string]: Content };
}) {
  const [scale, setScale] = useState<number>(1);
  const handleOverlayerClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("overlayer")) return close();
  };
  const getSrc = (key: string): string => url + key;
  const hasPhoto = (): boolean => {
    return Boolean(selecteds[photo.Key]);
  };

  const handleScale = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setScale(Number(target.value));
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 bg-black/90 w-full h-full z-50 p-10"
        onClick={handleOverlayerClick}
      >
        <div
          className="absolute top-10 right-10 bg-white/90 z-50 cursor-pointer"
          onClick={close}
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

        <div className="relative overlayer h-full flex flex-col justify-center items-center">
          <img
            style={{ transform: `scale(${scale})` }}
            className="shadow-2xl mb-5 select-none"
            alt={photo.Key}
            src={getSrc(photo.Key)}
          />

          <button
            disabled={hasPhoto()}
            className="px-5 py-3 bg-green-600 text-white shadow-md select-none rounded-sm uppercase z-40"
            onClick={() => select()}
          >
            {hasPhoto() ? (
              <span className="flex flex-row justify-between">
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
                Foto adicionada!
              </span>
            ) : (
              "Adicionar a lista"
            )}
          </button>
          <input
            className="mt-10 z-40"
            type="range"
            id="volume"
            name="volume"
            min="1"
            max="3"
            value={scale}
            onChange={handleScale}
          />
        </div>
      </div>
    </>
  );
}
