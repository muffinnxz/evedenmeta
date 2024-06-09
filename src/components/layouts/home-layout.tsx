"use client";
import { Button } from "@/components/ui/button";
import { MainNav } from "../main-nav";
import { SiteFooter } from "../site-footer";
import { signIn } from "@/lib/firebase-auth";
import { UserAccountNav } from "../user-account-nav";
import useUser from "@/hooks/use-user";
import { useRouter } from "@/lib/router-events";
import ChangeThemeButton from "../change-theme-button";

export const mainNavItems = [
  {
    title: "Features",
    href: "/#features",
  },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: LayoutProps) {
  const { user, userData } = useUser();
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={mainNavItems} />
          <div className="flex h-full justify-center items-center gap-4">
            <ChangeThemeButton />
            {!user && (
              <nav>
                <Button className="px-4" onClick={signIn}>
                  Login
                </Button>
              </nav>
            )}
            {user && (
              <nav>
                <UserAccountNav user={user} userData={userData} />
              </nav>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
