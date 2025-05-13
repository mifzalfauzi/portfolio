import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Star, Zap, Users, NotebookIcon } from "lucide-react"
import Image from "next/image"

export default function AchievementsCard() {
  const achievements = [
    
    {
      title: "Yayasan Telekom Malaysia Future Leaders Scholarship",
      description: "A full-ride scholarship provided by Yayasan TM to further study for a Bachelor's Degree in Software Engineering (Information System Development) by maintaining an academic promise with a CGPA of 3.00 and above",
      icon: (
        <div className="relative w-12 h-10 rounded-full overflow-hidden">
          <Image
            src="/tm.jpg"
            alt="Telekom Malaysia Logo"
            fill
            className="object-cover"
          />
        </div>
      ),
      year: "2023 - 2025"
    },
    {
      title: "Cyberhack & Ethics Special Interest Group (Protocol Committee & Learning Facilitator)",
      description: "Part of the Protocol Committee under the Cyberhack & Ethics Special Interest Group in the Faculty of Information Science & Technology for the Technorace School@UKM Programme",
      year: "2022",
      icon: <Users className="h-8 w-8 text-blue-500" />,
    },

    {
      title: "Dean's List Award",
      description: "Five-time Dean's List Award recipient at the National University of Malaysia",
      icon: <NotebookIcon className="h-8 w-8 text-purple-500" />,
      year: "2021 - 2025"
    },
    
    // {
    //   title: "Published Author",
    //   description: "Co-authored 'Modern Web Development Patterns' technical book published in 2023",
    //   icon: <Zap className="h-8 w-8 text-purple-500" />,
    // },
  ]

  return (
    <Card className="h-full dark:bg-black">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Trophy className="h-5 w-5 text-primary" />
          Achievements & Recognition
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex gap-4 p-3 rounded-lg transition-colors hover:bg-muted/50">
              <div className="flex-shrink-0 flex items-start justify-center w-10 h-10 rounded-full bg-background shadow-sm">
                {achievement.icon}
              </div>
              <div>
                <div>
                  <h3 className="font-medium">{achievement.title}</h3>

                  <div className="flex flex-col sm:flex-row sm:items-end gap-2 text-sm text-muted-foreground">
                    <p className="m-0 flex-1">{achievement.description}</p>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap self-start sm:self-end">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
