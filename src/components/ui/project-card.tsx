import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ReactNode, useState } from "react"
import { ProjectModal } from "./project-modal"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  demoLink?: string
  tags: string[]
  year: string
  details: ReactNode
  images?: string[]
}

export default function ProjectCard({ title, description, image, link, demoLink, tags, year, details, images }: ProjectCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg dark:bg-black p-0">
        
          <div className="relative w-full h-[250px]  overflow-hidden"> {/* Increased height of image container */}
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110 "
              
            />
            <div className="cursor-pointer absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={() => { setOpen(true) }}></div>
          </div>
          <CardContent className="p-5 pt-5">
            <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-2">
            <p className="text-xs text-muted-foreground italic mt-4">
              Developed in <span className="font-medium not-italic">{year}</span>
            </p>
          </div>
          </CardContent>
          <CardFooter className="p-5 pt-0 flex gap-3">
            <Button asChild variant="outline" size="sm" className="gap-1 cursor-pointer">
              <Link href={link} target="_blank">
                <Github className="h-4 w-4" />
                Code
              </Link>
            </Button>
            {demoLink && (
              <Button asChild variant="default" size="sm" className="gap-1 cursor-pointer">
                <Link href={demoLink} target="_blank">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            <Button variant="default" size="sm" className="gap-1 cursor-pointer" onClick={() => { setOpen(true) }}>
              <ExternalLink className="h-4 w-4" />
              Details
            </Button>
          </CardFooter>
     
      </Card>
      <ProjectModal open={open} onClose={() => setOpen(false)} title={title} details={details} images={images} />
    </>
  )
}
