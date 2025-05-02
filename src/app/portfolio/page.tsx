'use client'

import { Button } from "@/components/ui/button"
// import { Typewriter } from "react-simple-typewriter"
import { CodepenIcon, DatabaseIcon, GitGraphIcon, Github, HashIcon, Instagram, Linkedin, Mail, NetworkIcon, Twitter, XIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/components/ui/contact-form"
import ProjectCard from "@/components/ui/project-card"
import TechStack from "@/components/ui/tech-stack"
import EducationCard from "@/components/ui/education-card"
import AchievementsCard from "@/components/ui/achievements-card"
import SoftSkillsLanguages from "@/components/ui/soft-skills-languages"
import TechStackGallery from "@/components/ui/tech-stack-gallery"
import WorkExperience from "@/components/ui/work-experience"
import TypewriterComponent from "@/components/ui/use-typewriter"
import { useState } from "react"
import { ResumeModal } from "@/components/ui/resume-modal"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Page() {

    const [showModal, setShowModal] = useState(false);

    const handlePreview = () => {
        window.open('/resume.pdf', '_blank');
        setShowModal(false);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowModal(false);
    };


    return (
        <div className="min-h-screen bg-background">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-14 items-center">
                    <div className="mr-4 hidden md:flex">
                        <Link className="mr-6 flex items-center space-x-2" href="/">
                            <span className="hidden font-bold sm:inline-block">Mifzal Fauzi</span>
                        </Link>
                        <nav className="flex items-center space-x-6 text-sm font-medium">
                            <Link href="#about" className="transition-colors hover:text-foreground/80">
                                About
                            </Link>
                            <Link href="#experience" className="transition-colors hover:text-foreground/80">
                                Experience
                            </Link>
                            <Link href="#education" className="transition-colors hover:text-foreground/80">
                                Education
                            </Link>
                            <Link href="#education" className="transition-colors hover:text-foreground/80">
                                Achievements
                            </Link>
                            <Link href="#projects" className="transition-colors hover:text-foreground/80">
                                Projects
                            </Link>
                            <Link href="#tech-stack-gallery" className="transition-colors hover:text-foreground/80">
                                Tech
                            </Link>
                            <Link href="#soft-skills" className="transition-colors hover:text-foreground/80">
                                Skills
                            </Link>
                        </nav>
                    </div>
                    <div className="ml-auto flex items-center gap-4">
                        <ThemeToggle />
                        <Button variant="outline" className="cursor-pointer" onClick={() => setShowModal(true)}>
                            Detailed Resume
                        </Button>
                    </div>
                </div>
            </header>

            <main className="w-full">
                <section id="about" className="py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1 space-y-4">
                                <h2 className="text-xl font-semibold tracking-tight text-muted-foreground">Mifzal Fauzi</h2>

                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    {/* <span className="mr-2"></span> */}
                                    <span className="text-primary">
                                        <TypewriterComponent
                                            words={["Entry-Level Web Developer", "Entry-Level Systems Developer", "Aspiring Software Engineer"]}
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delayBetweenWords={1000}
                                            loop={true}
                                        />
                                    </span>
                                </h1>

                                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Building digital experiences with modern technologies. Focused on creating elegant solutions to complex problems.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link href="https://github.com/mifzalfauzi" target="_blank">
                                        <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                                            <Github className="h-4 w-4" />
                                            <span className="sr-only">GitHub</span>
                                        </Button>
                                    </Link>
                                    <Link href="https://linkedin.com/in/mifzal" target="_blank">
                                        <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                                            <Linkedin className="h-4 w-4" />
                                            <span className="sr-only">LinkedIn</span>
                                        </Button>
                                    </Link>
                                    <Link href="https://instagram.com/mifzalfauzi" target="_blank">
                                        <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                                            <Instagram className="h-4 w-4" />
                                            <span className="sr-only">Instagram</span>
                                        </Button>
                                    </Link>
                                    <Link href="mailto:mifzalmaf@gmail.com">
                                        <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                                            <Mail className="h-4 w-4" />
                                            <span className="sr-only">Email</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
                                <Image
                                    src="/mifzal.jpg?height=400&width=400"
                                    alt="Profile Photo"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>


                <section id="education" className="py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                            Education & Achievements
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            <EducationCard />
                            <AchievementsCard />
                        </div>
                    </div>
                </section>
                <section id="experience" className="py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                            Working Experience
                        </h2>
                        <WorkExperience />
                    </div>
                </section>

                <section id="projects" className="py-12 md:py-24 lg:py-32 ">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center">Projects</h2>
                        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                            Selection of recent work and personal projects that showcases skills and expertise.
                        </p>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <ProjectCard
                                title="A.I.-Powered Prompt Citation for Students (Ongoing)"
                                description=" A.I. citation platform for students built with Next.js, FastAPI, with Axios and NeonDB integration."
                                image="/progress-work.png?height=400&width=600"
                                link=""
                                // demoLink="https://demo.example.com"
                                tags={["Next.js", "FastAPI", "Python", "Axios"]}
                                year="2025 - Ongoing"
                                details={
                                    <>
                                        <p>Ongoing project using technologies such as:</p>
                                        <ul className="list-disc list-inside">
                                            <li>Next.js 13 with App Router</li>
                                            <li>FastAPI for RESTful API implementation and backend logic</li>
                                            <li>Axios for RESTful API calls</li>
                                            <li>Tailwind CSS for styling</li>
                                            <li>ShadCN/UI for components</li>
                                        </ul>
                                        <p>It features SSR, responsive design, and dark mode support.</p>
                                    </>
                                }
                            />
                            <ProjectCard
                                title="Personal Portfolio"
                                description="Responsive personal portfolio developed with NextJS and Tailwind CSS"
                                image="/portfolio.png?height=400&width=600"
                                link=""
                                demoLink="https://demo.example.com"
                                tags={["Next.js", "Tailwind CSS"]}
                                year="2025"
                                details={
                                    <>
                                        <p>Deployed project using technologies such as:</p>
                                        <ul className="list-disc list-inside">
                                            <li>Next.js 13 with App Router</li>
                                            <li>Tailwind CSS for styling</li>
                                            <li>ShadCN/UI for components</li>
                                        </ul>
                                        <p>It features a responsive web design.</p>
                                    </>
                                }
                            />
                            <ProjectCard
                                title="Music Academy Management System with Chatbot Integration"
                                description="A management system for music academies to fulfill final-year project requirements."
                                image="/login.png?height=400&width=600"
                                link="https://github.com/mifzalfauzi/fyp-MAMS"
                                // demoLink="https://demo.example.com"
                                tags={["Django", "Django Views", "PythonAnywhere", "SQL"]}
                                year="2024"
                                details={
                                    <>
                                        <p>Final-Year Project of 2024:</p>
                                        <ul className="list-disc list-inside">
                                            <li>Developed using Python (Django) for server-side development using MVT (Model-View-Template) architecture</li>
                                            <li>Constructed an NLP Voting Classifier Pipeline (Google Colab) utilizing machine learning algorithms and NLTK trained on 1500+ sample datasets for context-based assistant responses in Text Classification</li>
                                            <li>Enhanced chatbot responses functionality by API integration with OpenAI</li>
                                            <li>Utilising phpMyAdmin to store data instances into relational tables</li>
                                            <li>System deployment with PythonAnywhere</li>
                                        </ul>
                                        <p>Associated with the National University of Malaysia</p>
                                    </>
                                }
                                images={["front.png", "chatbot.png", "login.png"]}
                            />
                            <ProjectCard
                                title="Student Absenteeism Management System "
                                description="An AI-powered chat interface with natural language processing capabilities."
                                image="/sams.jpg?height=400&width=600"
                                link="https://github.com/mifzalfauzi/SAMS"

                                tags={["PHP", "MySQL"]}
                                year="2023"
                                details={
                                    <>
                                        <p>This project involved certain methodologies and development technologies such as:</p>
                                        <ul className="list-disc list-inside">
                                            <li>Elected as Scrum Master from a team of five members to monitor progress throughout development within a span of three semesters (TTTU3404)</li>
                                            <li>Identified stakeholders and use cases for clear and concise project direction</li>
                                            <li>Gathered and documented requirements for project proposal</li>
                                            <li>Developed with HTML, CSS and JavaScript for client-side and PHP for server-side processes</li>
                                            <li>Developed with HTML, CSS and JavaScript for client-side and PHP for server-side processes</li>
                                            <li>Designed UI/UX requirements with Figma </li>
                                            <li>Utilising phpMyAdmin to store data instances into relational tables in ensuring efficient management and retrieval of structured data</li>
                                        </ul>
                                        <p>Associated with the National University of Malaysia.</p>
                                    </>
                                }
                                images={["group.jpg", "sams.jpg"]}
                            />
                        </div>
                    </div>
                </section>

                <section id="tech-stack-gallery" className="py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center">
                            Technology Expertise
                        </h2>
                        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                            Technical skills across different tech categories, based on years of experience.
                        </p>
                        <TechStackGallery />
                    </div>
                </section>

                {/* <section id="skills" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center">
              Technical Proficiency
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Detailed breakdown of my technical expertise and proficiency levels.
            </p>
            <TechStack />
          </div>
        </section> */}

                {/* <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center">Tech Stack</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Technical expertise and proficiency levels across various technologies and tools.
            </p>
            <TechStack /> */}
                {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <HashIcon className="w-12 h-12 mb-2" />
                <span className="text-muted-foreground">HTML</span>
              </div>
              <div className="flex flex-col items-center">
                <CodepenIcon className="w-12 h-12 mb-2" />
                <span className="text-muted-foreground">CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <CodepenIcon className="w-12 h-12 mb-2" />
                <span className="text-muted-foreground">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <CodepenIcon className="w-12 h-12 mb-2" />
                <span className="text-muted-foreground">React</span>
              </div>
              <div className="flex flex-col items-center">
                <NetworkIcon className="w-12 h-12 mb-2" />
                <span className="text-muted-foreground">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <XIcon className="w-12 h-12 mb-2" />
                <span className="text-muted-foreground">Express</span>
              </div>
              <div className="flex flex-col items-center">
                <DatabaseIcon className="w-12 h-12 mb-2" />
                <span className="text-muted-foreground">MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <GitGraphIcon className="w-12 h-12 mb-2" />
                <span className="text-muted-foreground">Git</span>
              </div>
            </div> */}
                {/* </div>
        </section> */}

                <section id="soft-skills" className="py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center">
                            Soft Skills & Languages
                        </h2>
                        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                            Beyond technical skills, qualities and languages enhance the work.
                        </p>
                        <SoftSkillsLanguages />
                    </div>
                </section>

                {/* <section id="contact" className="py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-center mb-12">
                Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
              </p>
              <ContactForm />
            </div>
          </div>
        </section> */}


            </main>

            <footer className="border-t bg-muted/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
                    <div>
                        <div className="text-lg font-semibold">Mifzal</div>
                        <p className="text-sm text-muted-foreground">Entry-Level Web & Systems Developer</p>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                        <Link className="text-sm hover:text-primary transition-colors" href="#about">
                            About
                        </Link>
                        <Link className="text-sm hover:text-primary transition-colors" href="#experience">
                            Experience
                        </Link>
                        <Link className="text-sm hover:text-primary transition-colors" href="#education">
                            Education
                        </Link>
                        <Link className="text-sm hover:text-primary transition-colors" href="#education">
                            Achievements
                        </Link>
                        <Link className="text-sm hover:text-primary transition-colors" href="#projects">
                            Projects
                        </Link>
                        <Link className="text-sm hover:text-primary transition-colors" href="#tech-stack-gallery">
                            Tech
                        </Link>
                        <Link className="text-sm hover:text-primary transition-colors" href="#soft-skills">
                            Skills
                        </Link>

                        {/* <Link className="text-sm hover:text-primary transition-colors" href="#contact">
                            Contact
                        </Link> */}
                    </div>
                    <div className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Mifzal. All rights reserved.
                    </div>
                </div>
            </footer>

            <ResumeModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onPreview={handlePreview}
                onDownload={handleDownload}
            />
        </div>
    )
}
