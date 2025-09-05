"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { ReactNode, useState } from "react"

interface ProjectModalProps {
  open: boolean
  onClose: () => void
  title: string
  details: ReactNode
  images?: string[]
}

export function ProjectModal({ open, onClose, title, details, images = [] }: ProjectModalProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const next = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center w-full">
            {title}
            {/* <DialogClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-5 w-5" />
              </Button>
            </DialogClose> */}
          </DialogTitle>
        </DialogHeader>

        {images.length > 0 && (
          <div className="relative w-full mb-4 rounded-lg overflow-hidden">
            <img
              src={images[current]}
              alt={`Slide ${current}`}
              className="w-full h-60 object-cover rounded-md"
            />
            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full ${
                    current === i ? "bg-white" : "bg-white/50"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        )}

        <div className="text-sm text-muted-foreground space-y-3">{details}</div>
      </DialogContent>
    </Dialog>
  )
}
