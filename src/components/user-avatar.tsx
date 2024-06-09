import { AvatarProps } from "@radix-ui/react-avatar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User  } from "firebase/auth";
import { User as LuUser } from "lucide-react";

interface UserAvatarProps extends AvatarProps {
  user: User | null;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user?.photoURL ? (
        <div className="w-10 h-10 rounded-full border border-gray-300">
          <AvatarImage alt="Picture" src={user?.photoURL} />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.displayName}</span>
          <LuUser className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
