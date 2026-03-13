"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type CMSLinkProps = React.ComponentProps<typeof Link>;

export function CMSLink({ className, ...props }: CMSLinkProps) {
  const pathname = usePathname();
  const isActive = props.href === pathname;

  return (
    <Link {...props} className={cn(isActive && "text-blue-700", className)} />
  );
}
