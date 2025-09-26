"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import type { Experience } from "@/lib/types";
import type { CarouselApi } from "@/components/ui/carousel";

// Helper function to determine if a path is a URL or local path
const isUrl = (path: string): boolean => {
  return path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//');
};

export function ConditionalMediaGallery({ experience }: { experience: Experience | null }) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  if (!experience?.media || experience.media.length === 0) {
    return null;
  }

  // Handle carousel selection change
  const handleSelect = (api: CarouselApi) => {
    if (!api) return;

    setIsAnimating(true);
    setCurrentSlide(api.selectedScrollSnap());

    // Wait for animation to complete before allowing metadata load
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Adjust based on carousel animation duration
  };

  useEffect(() => {
    if (!api) return;

    api.on("select", () => handleSelect(api));
    handleSelect(api); // Set initial state

    return () => {
      api?.off("select", () => handleSelect(api));
    };
  }, [api]);

  return (
    <div className="my-6">
      <Carousel setApi={setApi} className="w-full max-w-[85vw] sm:max-w-lg mx-auto">
        <CarouselContent>
          {experience.media.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-0.5 sm:p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg relative max-w-full">
                    {item.type === 'image' && (
                       <Image
                         src={item.url}
                         alt={`${experience.role} at ${experience.company} - asset ${index + 1}`}
                         fill
                         sizes="(max-width: 768px) 90vw, (max-width: 1024px) 500px, 600px"
                         data-ai-hint={item.hint}
                         className="object-cover"
                         unoptimized={isUrl(item.url)}
                       />
                    )}
                    {item.type === 'video' && (
                      <video
                        src={item.url}
                        controls
                        className="w-full h-full object-cover"
                        preload={index === currentSlide && !isAnimating ? "metadata" : "none"}
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
        <CarouselPrevious className="-left-2 sm:-left-12" />
        <CarouselNext className="-right-2 sm:-right-12" />
      </Carousel>
    </div>
  );
}
