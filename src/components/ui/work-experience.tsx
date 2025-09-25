import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

interface WorkExperienceItem {
  position: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
}

export default function WorkExperience() {
  const experiences: WorkExperienceItem[] = [
    {
      position: "Trainee - MyMahir Programme (Microsoft Azure Cloud Developer Associate Track)",
      company: "Knowledgecom",
      period: "May 2025 - Sep 2025",
      location: "Kuala Lumpur, Malaysia",
      description: [
        "Attended structured weekend classes on Microsoft Azure Development, covering core services such as Blob Storage, Cosmos DB, Key Vault, RBAC, and Event Grid",

        "Gained hands-on knowledge of Azure infrastructure and applied it in practical labs",

        "Delivered a Capstone Project (QuickAid Student Helpdesk), developed using Microsoft Azure services to simulate a real-world enterprise solution",

        "Attempted Microsoft Certified: Azure Developer Associate (AZ-204) certification, scoring 603/1000 on first attempt, currently preparing for retake to achieve certification"
      ],
      skills: ["Microsoft Azure", "Azure Key Vault", "Azure Blob Storage", "Azure Cosmos DB", "Azure RBAC", "Azure Event Grid", "Azure App Service", "Azure Functions"]
    },
    {
      position: "Technical Developer Intern",
      company: "AGTIV Consulting Sdn. Bhd.",
      location: "Kuala Lumpur, Malaysia",
      period: "Aug 2024 - Jan 2025",
      description: [
        "Implemented the form creation process with .NET MVC 9 and Razor Pages for a client change request module, digitizing and handling 10,000+ physical documents in the oil and gas sector",
        "Developed the Management Of Change drafting functionality with .NET MVC, enhancing usability and improving draft preparation efficiency while ensuring data consistency through storage in Microsoft SQL Server",
        "Programmed the export functionality for change request short registers to Excel,  automating data extraction, and enabling quick reporting for auditing, which reduced manual work",
        "Migrated the client’s change request physical data and documents from the past 4+ years into a hosted SharePoint environment, significantly improving document accessibility, data management, and overall organizational efficiency",
        "Assisted the functional team in determining the client’s requirements for change request form workflow, ensuring alignment with business needs"
      ],
      skills: [".NET MVC", "API .NET MVC", "SQL Server", "Git", "REST APIs"],
    },
    
    // {
    //   position: "Full Stack Developer",
    //   company: "Digital Solutions Ltd.",
    //   location: "Boston, MA",
    //   period: "Mar 2018 - Dec 2020",
    //   description: [
    //     "Developed and maintained multiple client websites and web applications using React, Redux, and Node.js",
    //     "Implemented RESTful APIs that processed over 1M requests daily with 99.9% uptime",
    //     "Collaborated with UX/UI designers to implement responsive designs that increased mobile conversions by 22%",
    //     "Optimized database queries and implemented caching strategies, reducing load times by 45%",
    //   ],
    //   skills: ["JavaScript", "React", "Redux", "PostgreSQL", "Express", "REST APIs"],
    // },
    // {
    //   position: "Junior Web Developer",
    //   company: "Creative Web Agency",
    //   location: "New York, NY",
    //   period: "Jun 2016 - Feb 2018",
    //   description: [
    //     "Developed responsive websites for clients across various industries using HTML, CSS, and JavaScript",
    //     "Built custom WordPress themes and plugins that improved content management workflows",
    //     "Collaborated with the design team to implement pixel-perfect UI components",
    //     "Participated in daily stand-ups and sprint planning using Agile methodologies",
    //   ],
    //   skills: ["HTML/CSS", "JavaScript", "WordPress", "PHP", "jQuery", "Responsive Design"],
    // },
  ]

  return (
    <Card className="h-full dark:bg-black">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Briefcase className="h-5 w-5 text-primary" />
          Professional Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative border-l-2 border-primary/20 pl-6 pb-2">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <h3 className="font-bold text-lg">{exp.position}</h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{exp.period}</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
              <span className="font-medium">{exp.company}</span>
              <span className="hidden md:inline text-muted-foreground">•</span>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-3 w-3 mr-1" />
                <span>{exp.location}</span>
              </div>
            </div>

            <ul className="list-disc pl-5 space-y-1 mb-3">
              {exp.description.map((item, i) => (
                <li key={i} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-3">
              {exp.skills.map((skill, i) => (
                <Badge key={i} variant="outline" className="bg-primary/5">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
