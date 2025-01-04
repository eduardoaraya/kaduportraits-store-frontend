import { CartSVG } from "@kaduportraits-store/components/svg/cart";
import { Button } from "@kaduportraits-store/components/ui/button";
import { Select } from "@kaduportraits-store/components/ui/select";
import { prices } from "@kaduportraits-store/static-data/prices";
import { FunctionComponent } from "react";
import { ICatalogProduct } from "./catalog-product";

export const CatalogProduct: FunctionComponent<ICatalogProduct> = (product) => {
  return (
    <div className="w-full">
      <div className="overflow-hidden flex h-full md:col-span-3 col-span-1 justify-center items-center p-5">
        {product.coverImages.map((image, key) => (
          <img src={image.src} key={key} className="max-h-[600px]" />
        ))}
      </div>
      <div className="p-5 flex flex-col h-full">
        {/* <Select
            label="Opções de qualidade de imagem"
            value={prices.medium.price}
            options={Object.values(prices).map((price) => ({
              value: price.price,
              label: `${price.brlFormat}  ${price.name}`,
            }))}
          /> */}
        <div className="h-full flex flex-col flex-1 justify-between">
          <h1 className="text-primary font-title lg:text-xl font-semibold">
            {product.productTitle}
          </h1>

          <span className="text-secondary font-body lg:text-2xl mt-3">
            R$ {product.productPrice}
          </span>
        </div>
        <div className="flex md:flex-row flex-col md:justify-end justify-center">
          <Button className="mt-5" kind="primary">
            <CartSVG />
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
};
