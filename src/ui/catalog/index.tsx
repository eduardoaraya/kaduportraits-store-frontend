"use client";
import { debounce_leading } from "@kaduportraits-store/utils/debounce";
import { useEffect, useState } from "react";

type Content = {
  Key: string;
  Size: number;
};

type Catalog = {
  data: Content[];
  url: string;
};

export function Catalog() {
  const [catalog, setCatalog] = useState<Content[]>([]);
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [hasData, setHasData] = useState<boolean>(true);

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

  return (
    <div className="flex row flex-wrap justify-center">
      {catalog
        ?.filter((photo: Content) => photo.Size > 0)
        .map((photo: Content, key: number) => (
          <div
            key={key}
            className="overflow-hidden m-3 max-w-[350px] max-h-[350px] flex justify-center items-center border-2 border-black"
          >
            <img alt="logo" width={350} height={350} src={url + photo.Key} />
          </div>
        ))}
      {loading && "Loading..."}
    </div>
  );
}
