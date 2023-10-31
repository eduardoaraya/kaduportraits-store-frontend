import { Catalog } from "@kaduportraits-store/ui/catalog";

export default async function Home() {
  return (
    <main className="pt-[150px]">
      <div className="w-full max-w-screen-xl m-auto">
        <Catalog />
      </div>
    </main>
  );
}
