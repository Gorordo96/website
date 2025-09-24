import type { Course as CourseType } from "@/lib/types";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Courses({ data }: { data: CourseType[] }) {
  return (
    <SectionWrapper id="courses" title="Formación Complementaria">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((course, index) => (
          <Card key={index} className="flex flex-col text-left">
            <CardHeader className="flex-1">
              <CardTitle className="text-lg">{course.title}</CardTitle>
              <p className="text-sm text-muted-foreground pt-1">{course.institution}</p>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="secondary" className="w-full">
                <a href={course.certificateUrl} target="_blank" rel="noopener noreferrer">
                  Ver Certificado
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
