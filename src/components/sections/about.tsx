import type { AboutData } from "@/lib/types";
import { SectionWrapper } from "@/components/layout/section-wrapper";

export default function About({ data }: { data: AboutData }) {
  return (
    <SectionWrapper id="about" title="Sobre Mí">
      <p className="max-w-3xl mx-auto text-lg text-justify text-foreground/80 leading-relaxed">
        {data.description}
      </p>
    </SectionWrapper>
  );
}
