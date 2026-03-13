import { cn } from "@/lib/utils";

type WidthWrapperProps = {
  children: React.ReactNode;
} & React.ComponentProps<"div">;

export function WidthWrapper({
  children,
  className,
  ...props
}: WidthWrapperProps) {
  return (
    <div className={cn("max-w-7xl mx-auto w-full px-4", className)} {...props}>
      {children}
    </div>
  );
}
