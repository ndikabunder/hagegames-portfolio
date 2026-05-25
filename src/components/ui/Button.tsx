import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({ href, children, variant = "primary", className, onClick, type = "button" }: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-medium tracking-wide transition-[background-color,border-color,color,box-shadow,transform] duration-300",
    variant === "primary" && "bg-accent text-background hover:bg-accent-hover hover:shadow-[0_0_30px_-5px_var(--accent)]",
    variant === "outline" && "border border-border text-foreground hover:border-accent/60 hover:text-accent",
    className
  );

  if (href) {
    return <Link href={href} className={base}>{children}</Link>;
  }

  return <button type={type} onClick={onClick} className={base}>{children}</button>;
}
