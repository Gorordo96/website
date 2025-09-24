import { cn } from "@/lib/utils";

export const SectionWrapper = ({ id, title, children, className }: { id: string, title: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={cn("container py-16 md:py-24", className)}>
    <h2 className="font-headline text-3xl md:text-4xl font-bold mb-12">{title}</h2>
    {children}
  </section>
);
