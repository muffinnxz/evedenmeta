import HomeLayout from "@/components/layouts/home-layout";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@/lib/router-events";
import { Shapes, Trophy, User } from "lucide-react";
import { TypographySmall } from "@/components/ui/typography";
import Image from "next/image";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { cards } from "@/constants/cards";
  
export default function Home() {
  return (
    <HomeLayout>
      <section className="space-y-6 pb-8 pt-6 md:pb-8 md:pt-10 lg:py-28">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Command>
            <CommandInput placeholder="Search" />
            <CommandList>
            </CommandList>
            </Command>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-6 lg:py-12 content-center"
      >
        <div className="mx-3 gap-4 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 justify-items-center">
            {cards.map((card)=> (
                <Link
                key={card.id}
                href={"#"}
                className="w-max h-max"
                >
                <Image
                src={card.picture}
                alt={card.name}
                sizes={"100%"}
                width={200}
                height={200}
                quality={50}
                ></Image>
                </Link>
            ))}
        </div>
      </section>
    </HomeLayout>
  );
}
