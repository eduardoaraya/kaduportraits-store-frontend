import { Banner } from "@kaduportraits-store/components/ui/banner";
import { Categories } from "@kaduportraits-store/components/ui/categories";
import { PriceInfo } from "@kaduportraits-store/components/ui/price-info";
import { ShortWelcome } from "@kaduportraits-store/components/ui/welcome";

export default async function Home() {
  return (
    <>
      {/* <Banner></Banner> */}
      <div className="container m-auto p-5 md:p-20 mt-5 md:mt-20">
        <ShortWelcome />
      </div>
      <div className="container m-auto p-5 md:p-10">
        <h1 className="text-secondary uppercase font-bold text-2xl my-10 text-center">
          Categorias
        </h1>
        <Categories />
      </div>
      <div className="container m-auto mt-10 md:mt-20">
        <p className="w-[600px] m-auto leading-8 text-lg text-center text-secondary">
          Obrigado por sua visita, e que sua paixão pelo esporte seja sempre
          acompanhada de imagens memoráveis! Comemore o esporte, celebre a
          fotografia, e aproveite sua estadia em nosso site.
        </p>
      </div>
      <div className="container m-auto p-20 mt-10 md:mt-20">
        <h1 className="text-secondary uppercase font-bold text-2xl my-10 text-center">
          Preços
        </h1>
        <div className="bg-secondary rounded-md p-5 md:p-20 shadow-md">
          <PriceInfo />
        </div>
      </div>
    </>
  );
}
