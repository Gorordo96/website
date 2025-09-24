import type { Education as EducationType } from "@/lib/types";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function Education({ data }: { data: EducationType[] }) {
  return (
    <SectionWrapper id="education" title="Formación Académica">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {data.map((edu, index) => (
          <Card key={index} className="flex flex-col text-left">
            <CardHeader className="pb-4">
               <div className="flex items-start justify-between">
                <div className="space-y-1.5 flex-1">
                  <p className="text-primary font-semibold text-sm">{edu.category}</p>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                </div>
                 <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0 ml-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-2">
              <p className="font-semibold">{edu.institution}</p>
              <p className="text-sm text-muted-foreground">{edu.date}</p>
              {edu.details && <p className="text-sm text-foreground/90 pt-2">{edu.details}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
