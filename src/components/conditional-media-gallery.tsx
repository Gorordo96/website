"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import type { Experience } from "@/lib/types";

// Helper function to determine if a path is a URL or local path
const isUrl = (path: string): boolean => {
  return path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//');
};

export function ConditionalMediaGallery({ experience }: { experience: Experience | null }) {
  if (!experience?.media || experience.media.length === 0) {
    return null;
  }

  return (
    <div className="my-6">
      <Carousel className="w-full max-w-lg mx-auto">
        <CarouselContent>
          {experience.media.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                    {item.type === 'image' && (
                       <Image
                         src={item.url}
                         alt={`${experience.role} at ${experience.company} - asset ${index + 1}`}
                         width={600}
                         height={400}
                         data-ai-hint={item.hint}
                         className="object-cover w-full h-full"
                         unoptimized={isUrl(item.url)}
                       />
                    )}
                    {item.type === 'video' && (
                      <video
                        src={item.url}
                        controls
                        className="w-full h-full object-cover"
                        preload="metadata"
                      >
                        Tu navegador no soporta el elemento video.
                      </video>
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-14" />
        <CarouselNext className="mr-14" />
      </Carousel>
    </div>
  );
}
