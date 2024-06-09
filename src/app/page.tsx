import HomeLayout from "@/components/layouts/home-layout";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@/lib/router-events";
import {
  BarChart4,
  Component,
  Library,
  Rocket,
  Shapes,
  Users,
} from "lucide-react";
import { TypographySmall } from "@/components/ui/typography";
import Image from "next/image";

export default function Home() {
  return (
    <HomeLayout>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={""}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            <div className="flex items-center gap-2">
              <Image
                src="/discord.svg"
                alt="Discord Logo"
                width={20}
                height={20}
              />
              <TypographySmall>Join us on Discord</TypographySmall>
            </div>
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Eveden Meta BETA
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Elevate Your Game, Achieve Mastery. A Community of Champions.
          </p>
          <div className="space-x-4">
            <Link href="" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Welcome to Eveden Meta, where card mastery meets community. Design
            your ultimate deck, compete in diverse tournaments, and engage with
            fellow enthusiasts - all in one dynamic platform.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Shapes className="h-8 w-8" />
              <div className="space-y-2">
                <h3 className="font-bold">Deck Building Tools</h3>
                <p className="text-sm text-muted-foreground">
                  Craft and optimize your decks with user-friendly tools,
                  templates, and real-time analytics designed for all levels of
                  play.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Library className="h-8 w-8" />
              <div className="space-y-2">
                <h3 className="font-bold">Tournament Play</h3>
                <p className="text-sm">
                  Participate in various competitive formats, from ranked
                  matches to seasonal leagues, suitable for novices and veterans
                  alike.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Rocket className="w-8 h-8" />
              <div className="space-y-2">
                <h3 className="font-bold">Community Hub</h3>
                <p className="text-sm text-muted-foreground">
                  Connect, share, and discuss strategies with a vibrant
                  community in forums and live chats on our dedicated Discord
                  server.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore strategic deck-building tools, participate in exciting
            tournaments, and engage with a dedicated community, all designed to
            elevate your card game experience.
          </p>
        </div>
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Join Our Community
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Connect with fellow creators on our{" "}
            <Link
              href={""}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Discord server
            </Link>
            . Share ideas, get support, and be part of the evolving world of AI
            app development with aicreatorhub.io.
          </p>
        </div>
      </section>
    </HomeLayout>
  );
}
