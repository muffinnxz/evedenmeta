"use client";

import { Link } from "@/lib/router-events";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "./user-avatar";
import { signOut } from "@/lib/firebase-auth";
import { User } from "firebase/auth";
import { UserData } from "@/hooks/use-user";

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: User | null;
  userData: UserData | null;
}

export function UserAccountNav({ user, userData }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={user} className="h-full" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium">
              {userData?.displayName || user?.displayName}
            </p>
            {user?.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>
        {/* <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onSelect={signOut}>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
