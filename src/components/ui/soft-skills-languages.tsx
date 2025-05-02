import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, Globe, MessageCircle } from "lucide-react"

interface SoftSkill {
  name: string
  description: string
}

interface Language {
  name: string
  proficiency: number
  level: string
}

export default function SoftSkillsLanguages() {
  const softSkills: SoftSkill[] = [
    {
      name: "Collaborative Teamwork",
      description:
        "Proven ability to troubleshoot complex issues and develop innovative, team-driven solutions.",
    },
    {
      name: "Cross-Functional Collaboration",
      description:
        "Strong communicator adept at translating technical concepts for non-technical stakeholders.",
    },
    {
      name: "Strategic Problem-Solving",
      description:
        "Experienced in leading development teams, mentoring peers, and managing cross-functional projects.",
    },
    {
      name: "Time Management",
      description:
        "Efficient in prioritizing tasks, meeting deadlines, and handling multiple projects concurrently.",
    },
    {
      name: "Stakeholder Communication",
      description:
        "Adaptable to new technologies and strategies, with a focus on aligning outcomes with stakeholder goals.",
    },
  ]
  

  const languages: Language[] = [
    { name: "Malay", proficiency: 100, level: "Native" },
    { name: "English", proficiency: 85, level: "Professional" },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="h-full">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Brain className="h-5 w-5 text-primary" />
            Soft Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <h3 className="font-semibold mb-1">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="h-full">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Globe className="h-5 w-5 text-primary" />
            Languages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {languages.map((language, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <span className="font-medium">{language.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{language.level}</span>
                </div>
                <Progress value={language.proficiency} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
