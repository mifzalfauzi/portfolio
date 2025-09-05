import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { School, Award, Calendar, LinkIcon } from "lucide-react"

export default function EducationCard() {
  const education = [
    {
      degree: "Bachelor of Software Engineering with Honours (Information System Development)",
      institution: "National University of Malaysia",
      year: "2021 - 2025",
      description: "CGPA : 3.74 (Distinction)",
    },
    {
      degree: "Foundation in Science",
      institution: "MARA University of Technology",
      year: "2020 - 2021",
      description: "CGPA : 3.89/4.0",
    },
  ]

  const certifications = [
    {
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      year: "Expected 2025",
    },
    {
      name: "ICDL Profile — Document, Spreadsheets, Teamwork",
      issuer: "ICDL Asia",
      year: "2025",
      link: "https://profile.icdlasia.org/227857d9-5934-4623-892c-11869cde2a8b#acc.r1UDVtHL"
    },
    // {
    //   name: "Google Professional Cloud Developer",
    //   issuer: "Google Cloud",
    //   year: "2021",
    // },
    {
      name: "Fundamentals of Cloud Computing",
      issuer: "RunCloud",
      year: "2024",
      link: "https://cert.runcloud.education/en/verify/74089342945174?ref=email"
    },
    {
      name: "YTM Scholars: Role Model Now, Digital Leaders Tomorrow",
      issuer: "LHI Consulting",
      year: "2023",
    },
    {
      name: "Data Engineering Professional",
      issuer: "Altair – RapidMiner Academy",
      year: "2023",
      link: "https://openbadgefactory.com/v1/assertion/94367f6f526e32f87593f8a53f56b196fa158c45"
    },
    {
      name: "Classical Guitar Studies - Grade 6",
      issuer: "Yamaha Corporation",
      year: "2023",
    },
  ]

  return (
    <Card className="h-full dark:bg-black">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <School className="h-5 w-5 text-primary" />
          Education & Certifications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {education.map((item, index) => (
            <div key={index} className="space-y-2 border-l-2 border-primary/20 pl-4 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{item.year}</span>
              </div>
              <h3 className="font-semibold">{item.degree}</h3>
              <p className="text-sm text-muted-foreground">{item.institution}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Award className="h-4 w-4 text-primary" />
            Professional Certifications
          </h3>
          <div className="space-y-2">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-border pb-2 last:border-0"
              >
                <div>
                  <p className="font-medium text-sm">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
                <div className="flex items-center space-x-2">
                {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <LinkIcon className="h-4 w-4" />
                    </a>
                  )}
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {cert.year}
                  </span>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
