import { categories } from "../../../static-data/categories";
import { useRouter } from "next/navigation";
import "./index.module.css";

export function Categories(): JSX.Element {
  const router = useRouter();
  const goTo = (id: number) => router.push(`category/${id}`);
  return (
    <>
      <div className="categories grid grid-cols-6 auto-rows-auto gap-2 md:gap-5 px-5 md:px-10">
        <div
          onClick={() => goTo(categories.kitesurf.id)}
          style={{
            backgroundImage: `url(${categories.kitesurf.cover})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="category-item cursor-pointer p-5 rounded-md shadow-md h-[300px] col-span-6 md:col-span-3 lg:col-span-4"
        >
          <h1 className="relative z-10 text-tertiary uppercase font-bold text-2xl">
            {categories.kitesurf.name}
          </h1>
        </div>
        <div
          onClick={() => goTo(categories.jetski.id)}
          style={{
            backgroundImage: `url(${categories.jetski.cover})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="category-item cursor-pointer p-5 rounded-md shadow-md h-[300px] col-span-6 md:col-span-3 lg:col-span-2"
        >
          <h1 className="relative z-10 text-tertiary uppercase font-bold text-2xl">
            {categories.jetski.name}
          </h1>
        </div>
        <div
          onClick={() => goTo(categories.run.id)}
          style={{
            backgroundImage: `url(/images/run.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="category-item cursor-pointer p-5 rounded-md shadow-md h-[300px] col-span-6 md:col-span-3 lg:col-span-2"
        >
          <h1 className="relative z-10 text-tertiary uppercase font-bold text-2xl">
            {categories.run.name}
          </h1>
        </div>
        <div
          onClick={() => goTo(categories.skate.id)}
          style={{
            backgroundImage: `url(/images/skate.jpg)`,
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="category-item cursor-pointer p-5 rounded-md shadow-md h-[300px] col-span-6 md:col-span-3 lg:col-span-4"
        >
          <h1 className="relative z-10 text-tertiary uppercase font-bold text-2xl">
            {categories.skate.name}
          </h1>
        </div>
      </div>
    </>
  );
}
