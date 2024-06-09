// src: https://chakra-ui.com/getting-started/nextjs-guide
"use client";

import { UserProvider } from "@/hooks/use-user";
import { HandleOnComplete } from "@/lib/router-events";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <HandleOnComplete />
        {children}
      </ThemeProvider>
    </UserProvider>
  );
}
