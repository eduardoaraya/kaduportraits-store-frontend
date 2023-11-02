import { Banner } from "@kaduportraits-store/ui/banner";
import { Catalog } from "@kaduportraits-store/ui/catalog";
import { Welcome } from "@kaduportraits-store/ui/welcome";

export default async function Home() {
  return (
    <main className="pt-[100px]">
      <Banner />
      <div className="w-full container m-auto">
        <Welcome />
        <div className="mt-10">
          <Catalog />
        </div>
      </div>
    </main>
  );
}
