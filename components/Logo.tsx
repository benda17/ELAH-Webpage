import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="ELAH Logo"
        width={250}
        height={100}
        className="h-16 md:h-20 lg:h-24 w-auto drop-shadow-[0_0_15px_rgba(0,168,255,0.6)]"
        priority
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}

