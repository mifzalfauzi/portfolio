import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Code, Database, HashIcon, Server, Wrench } from "lucide-react"
import { JSX } from "react"

interface Skill {
  name: string
  proficiency: number // 0-100
  years: number
  logo?: JSX.Element

}

interface TechCategory {
  name: string
  icon: JSX.Element
  skills: Skill[]
}

const technologies: TechCategory[] = [
  {
    name: "Frontend",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "HTML", proficiency: 95, years: 3, logo: <HashIcon className="h-5 w-5"/> },
      { name: "Next.js", proficiency: 90, years: 1 },
      { name: "TypeScript", proficiency: 85, years: 1, logo: <span className="">TS</span> },
      { name: "TailwindCSS", proficiency: 90, years: 2 },
      // { name: "Redux", proficiency: 80, years: 4 },
      // { name: "GraphQL", proficiency: 75, years: 2 },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Node.js", proficiency: 90, years: 5 },
      { name: "Express", proficiency: 85, years: 4 },
      { name: "Python", proficiency: 80, years: 3 },
      { name: "Django", proficiency: 70, years: 2 },
      { name: "PostgreSQL", proficiency: 85, years: 4 },
      { name: "MongoDB", proficiency: 80, years: 3 },
    ],
  },
  {
    name: "DevOps",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      // { name: "Docker", proficiency: 85, years: 3 },
      // { name: "AWS", proficiency: 80, years: 4 },
      // { name: "CI/CD", proficiency: 85, years: 3 },
      { name: "Git", proficiency: 25, years: 1 },
      // { name: "Linux", proficiency: 80, years: 5 },
      // { name: "Nginx", proficiency: 75, years: 3 },
    ],
  },
  {
    name: "Tools & Others",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "VS Code", proficiency: 95, years: 5 },
      { name: "Figma", proficiency: 75, years: 2 },
      { name: "Jest", proficiency: 80, years: 3 },
      { name: "GitHub", proficiency: 90, years: 5 },
      { name: "Vercel", proficiency: 85, years: 3 },
      { name: "RESTful APIs", proficiency: 90, years: 5 },
    ],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.name} className="p-6 overflow-hidden">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 rounded-md bg-primary/10 text-primary">{tech.icon}</div>
            <h3 className="text-lg font-semibold">{tech.name}</h3>
          </div>

          <div className="space-y-5">
            {tech.skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
  <div className="flex items-center gap-2">
    {skill.logo && (
      <span className="flex items-center justify-center h-4 w-4 text-muted-foreground">
        {skill.logo}
      </span>
    )}
    <span className="text-sm font-medium">{skill.name}</span>
  </div>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="text-xs text-muted-foreground">
          {skill.years} {skill.years === 1 ? "year" : "years"} experience
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-xs">{getProficiencyLabel(skill.proficiency)}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</div>


                <div className="relative">
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

function getProficiencyLabel(proficiency: number): string {
  if (proficiency >= 90) return "Expert"
  if (proficiency >= 80) return "Advanced"
  if (proficiency >= 70) return "Proficient"
  if (proficiency >= 50) return "Intermediate"
  return "Beginner"
}

