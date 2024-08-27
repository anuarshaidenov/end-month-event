import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
};

export default function ShiningButton({
  children,
  className = "",
  href,
}: Props) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "group cursor-pointer rounded-xl border-4 border-blue-500 border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100",
          className
        )}
      >
        <div className="relative flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-primary px-6 py-4 font-bold text-primary-foreground">
          {children}
          <ArrowRight className="transition-all group-hover:translate-x-2 group-hover:scale-125" />
          <div
            className={cn(
              "absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]"
            )}
          />
        </div>
      </Link>
    );
  }

  return (
    <button
      className={cn(
        "group cursor-pointer rounded-xl border-4 border-blue-500 border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100",
        className
      )}
    >
      <div className="relative flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-primary px-6 py-4 font-bold text-primary-foreground">
        {children}
        <ArrowRight className="transition-all group-hover:translate-x-2 group-hover:scale-125" />
        <div
          className={cn(
            "absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]"
          )}
        />
      </div>
    </button>
  );
}
