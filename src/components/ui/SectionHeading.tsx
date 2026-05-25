import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-14", align === "center" ? "text-center" : "text-left")}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance">{title}</h2>
      {subtitle && (
        <p className={cn("mt-4 text-muted leading-relaxed text-base", align === "center" && "max-w-2xl mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
