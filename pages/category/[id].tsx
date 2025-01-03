import { Catalog } from "@kaduportraits-store/components/features/catalog";
import { CatalogFilter } from "@kaduportraits-store/components/features/catalog-filter";
import { categories } from "@kaduportraits-store/static-data/categories";
import { products } from "@kaduportraits-store/static-data/products";
import { useRouter } from "next/router";

export default function Category() {
  const router = useRouter();
  const { id } = router.query;
  const data = Object.values(categories).find((cat) => cat.id === Number(id));
  const type = "box";

  return (
    <>
      {/* <div className="bg-secondary py-10">
        <div className="container m-auto">
          <h1 className="uppercase font-bold text-2xl text-left  text-white font-sans">
            {data?.name}
          </h1>
        </div>
      </div> */}
      {type !== "box" ? (
        <div className="relative grid md:grid-cols-3 grid-cols-1 container m-auto py-5">
          <div className="relative col-span-1 shadow-md h-full p-5">
            <div className="p-5">
              <CatalogFilter />
            </div>
          </div>
          <div className="py-10 col-span-1 md:col-span-2 p-5">
            <Catalog products={products} type={type} />
          </div>
        </div>
      ) : (
        <div className="relative container m-auto flex flex-row pt-10">
          <Catalog products={products} type={type} />
        </div>
      )}
    </>
  );
}
