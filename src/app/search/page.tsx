'use client'
import HomeLayout from "@/components/layouts/home-layout";
import { cards } from "@/constants/cards";
import SearchCard from "./SearchCard"
import ImageArea from "./ImageArea";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  return (
    <HomeLayout>
      <section className="space-y-6 pb-8 pt-6 md:pb-8 md:pt-10 lg:py-28">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <SearchCard />
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-6 lg:py-12 content-center"
      >
        <ImageArea query={searchParams.get("query")}/>
      </section>
    </HomeLayout>
  );
}
