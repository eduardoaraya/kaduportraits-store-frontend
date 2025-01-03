import { categories } from "../../../static-data/categories";
import { useRouter } from "next/navigation";
import "./index.module.css";

const getClassName = (type: string) =>
  type === "box"
    ? "flex flex-wrap gap-10 w-full justify-center"
    : `categories grid grid-cols-6 auto-rows-auto gap-2 md:gap-5`;

export function Categories(): JSX.Element {
  const router = useRouter();
  const goTo = (id: number) => router.push(`category/${id}`);
  return (
    <>
      <div className={getClassName("box")}>
        {Array.from({ length: 4 }).map((_item, key) => (
          <div className="cursor-pointer p-5  h-[300px] w-[300px]">
            <div
              key={key}
              onClick={() => goTo(categories.kitesurf.id)}
              style={{
                backgroundImage: `url(${categories.kitesurf.cover})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className={"rounded-full shadow-xl h-full w-full"}
            ></div>
            <div className="flex justify-center w-full pt-5">
              <h1 className="relative z-10 text-secondary font-bold text-2xl">
                {categories.kitesurf.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
