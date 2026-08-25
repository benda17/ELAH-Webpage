import Image from "next/image";

const SIZES = {
  sm: "h-8 md:h-9",
  md: "h-10 md:h-12",
  lg: "h-14 md:h-16",
} as const;

export default function Logo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: keyof typeof SIZES;
}) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="ELAH"
        width={250}
        height={100}
        className={`${SIZES[size]} w-auto`}
        priority
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
