"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Experience } from "@/lib/types";
import { MarkdownRenderer } from "./markdown-renderer";
import { ConditionalMediaGallery } from "./conditional-media-gallery";

interface ExperienceModalProps {
  experience: Experience | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ExperienceModal({ experience, isOpen, onClose }: ExperienceModalProps) {
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  if (!experience) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline">{experience.role}</DialogTitle>
          <DialogDescription>
            {experience.company} &middot; {experience.dates}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] -mx-6 px-6">
          <div className="py-4">
             <ConditionalMediaGallery experience={experience} />
             <MarkdownRenderer content={experience.detailedDescription} />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
