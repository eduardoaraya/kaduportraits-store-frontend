import { Catalog } from "@kaduportraits-store/components/features/catalog";
import { Categories } from "@kaduportraits-store/components/features/categories";
import { PriceInfo } from "@kaduportraits-store/components/features/price-info";
import { ShortWelcome } from "@kaduportraits-store/components/features/welcome";
import { products } from "@kaduportraits-store/static-data/products";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <ShortWelcome></ShortWelcome>
      <div className="container m-auto lg:py-5">
        <Categories />
      </div>
      <div className="container m-auto mt-10 p-5 md:p-10">
        <Catalog products={products} type={`box`} />
      </div>
      <div className="container m-auto mt-10 md:mt-20 px-5">
        <div className="w-full m-auto flex flex-col lg:flex-row">
          <div className="w-full flex flex-col">
            <h2 className="font-title text-3xl lg:text-7xl text-primary mb-10">
              Aromaterapia
            </h2>
            <div className="w-full max-w-[650px]">
              <p className="leading-8 text-md lg:text-lg text-primary">
                A aromaterapia é uma forma natural e eficaz de cuidar da saúde e
                do bem-estar. Experimente integrar esses aromas no seu dia a dia
                e descubra os benefícios que eles podem trazer para a sua vida.
              </p>
            </div>
          </div>
          <Image
            className="opacity-20 md:opacity-100"
            src="/images/woman-2-nobg.png"
            width={1200}
            height={1200}
            alt=""
          />
        </div>
      </div>
      <div className="pb-[145px] bg-white m-auto shadow-sm">
        <div className="container m-auto">
          <div className="w-full flex flex-row p-5 py-[75px] items-center justify-between">
            <h1 className="font-body text-primary uppercase text-xl lg:text-3xl m-auto">
              Nossa marca
            </h1>
          </div>
          <div className="p-5 md:p-10">
            <PriceInfo />
          </div>
        </div>
      </div>
    </>
  );
}
