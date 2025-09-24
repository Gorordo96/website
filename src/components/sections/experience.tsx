"use client";

import { useState } from "react";
import type { Experience as ExperienceType } from "@/lib/types";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExperienceModal } from "@/components/experience-modal";

export default function Experience({ data }: { data: ExperienceType[] }) {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceType | null>(null);

  return (
    <>
      <SectionWrapper id="experience" title="Trayectoria Profesional">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((exp) => (
            <Card key={exp.id} className="flex flex-col text-left">
              <CardHeader>
                <CardTitle>{exp.role}</CardTitle>
                <CardDescription>{exp.company} &middot; {exp.dates}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">{exp.summary}</p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => setSelectedExperience(exp)} variant="secondary">
                  Ver detalles
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionWrapper>
      
      <ExperienceModal
        experience={selectedExperience}
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </>
  );
}
