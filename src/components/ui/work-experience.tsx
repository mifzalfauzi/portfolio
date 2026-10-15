import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

interface WorkExperienceItem {
  position: string
  image: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
}

export default function WorkExperience() {
  const experiences: WorkExperienceItem[] = [
    {
      position: "Assistant Manager, L1 Security Analyst ",
      image: "/tm.jpg",
      company: "TM One",
      period: "December 2025 - Present",
      location: "Malaysia",
      description: [
        "Investigated a 2,000+ event brute-force alert on a client domain controller, analysing NTLM authentication failures (Event ID 4776) and tracing them to vendor accounts with expired credentials, escalating to L2 with root cause identified to support quick confirmation and client clean-up",

        "Maintained sub-30-minute target for enterprise clients in 2026 and met over 90% strict 15-minute SLA compliance on P1 to P4 incidents with 100% escalation adherence",

        "Monitored 1,200+ weekly enterprise events within a sub-1% miss rate KPI across various security platforms (Splunk ES, IBM QRadar, TrendAI Vision One, Palo Alto Cortex XDR)",

        "Escalated around 5-10 cases to clients monthly after correlating SIEM and XDR alerts to validate findings, rebuild timelines, extract IOCs and identify affected assets for client remediation strategies",

        "Reviewed security alerts on TM One's Cloud Alpha platform, enriching and validating IPs, domains and file hashes with OSINT sources such as VirusTotal, IBM X-Force, and AbuseIPDB to assess suspicious activity on cloud-hosted workloads and firewalls, extending coverage beyond on-premises environments",

        "Authored client-facing incident notifications and shift handover reports to keep 24/7 operations continuous and liaised with vendor support to resolve security platform issues affecting monitoring"

        // "Attempted Microsoft Certified: Azure Developer Associate (AZ-204) certification, scoring 603/1000 on first attempt, currently preparing for retake to achieve certification"
      ],
      skills: ["Security Operations", "XDR", "Alert Triage", "OSINT","Windows Event Security", "Endpoint & Network Log Analysis", "Security Event Monitoring", "Compliance", "Incident Response"]
    },
    {
      position: "Technical Developer Intern",
      image: "/agtiv_consulting_logo.jpg",
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
        <div className="flex items-center gap-2">
          {exp.image && (
            <div className="relative w-8 h-8 shrink-0 overflow-hidden">
              <Image
                src={exp.image}
                alt={`${exp.company} logo`}
                fill
                className="object-cover"
              />
            </div>
          )}
          <span className="font-medium">{exp.company}</span>
        </div>
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
