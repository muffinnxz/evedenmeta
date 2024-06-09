import { useTheme } from "next-themes";
import Image from "next/image";

export const AppIcon = ({ size = 32 }: { size?: number }) => {
  const { theme } = useTheme();
  return (
    <Image
      quality={50}
      src={'/eveden-meta.webp'}
      width={size}
      height={size}
      alt="icon"
      className="rounded-full"
    />
  );
};
