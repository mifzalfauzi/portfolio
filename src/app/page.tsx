'use client'

import { Button } from "@/components/ui/button"
// import { Typewriter } from "react-simple-typewriter"
import { CodepenIcon, DatabaseIcon, GitGraphIcon, Github, HashIcon, Instagram, Linkedin, Mail, NetworkIcon, Twitter, XIcon, ChevronDown, Menu, X, GraduationCap, Trophy, Briefcase, Code2, Layers, Brain } from "lucide-react"
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
import { useCallback, useState } from "react"
import { ResumeModal } from "@/components/ui/resume-modal"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { motion, useScroll, useTransform, useAnimationControls } from "framer-motion"

const AnimatedSection = ({ children, id }: { children: React.ReactNode, id: string }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="py-12 md:py-24 lg:py-32 min-h-screen flex items-center"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full"
            >
                {children}
            </motion.div>
        </motion.section>
    )
}

const AnimatedHeading = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}

const FloatingScrollIcon = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    return (
        <motion.div
            style={{ opacity }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
            initial={{ y: -20 }}
            animate={{ y: [0, 10, 0] }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
        </motion.div>
    );
};

const MobileNav = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = window.innerHeight / 2 - element.offsetHeight / 2;
            const targetPosition = element.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            onClose();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "-100%" }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-y-0 left-0 w-64 bg-background border-r z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className="p-4">
                <button onClick={onClose} className="absolute top-4 right-4">
                    <X className="h-5 w-5" />
                </button>
                <nav className="mt-8 space-y-3">
                    <button
                        onClick={() => scrollToSection('education')}
                        className="flex items-center w-full text-left px-4 py-2 hover:bg-muted rounded-md transition-colors text-sm"
                    >
                        <GraduationCap className="h-4 w-4 mr-3" />
                        Education
                    </button>
                    <button
                        onClick={() => scrollToSection('education')}
                        className="flex items-center w-full text-left px-4 py-2 hover:bg-muted rounded-md transition-colors text-sm"
                    >
                        <Trophy className="h-4 w-4 mr-3" />
                        Achievements
                    </button>
                    <button
                        onClick={() => scrollToSection('experience')}
                        className="flex items-center w-full text-left px-4 py-2 hover:bg-muted rounded-md transition-colors text-sm"
                    >
                        <Briefcase className="h-4 w-4 mr-3" />
                        Experience
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="flex items-center w-full text-left px-4 py-2 hover:bg-muted rounded-md transition-colors text-sm"
                    >
                        <Code2 className="h-4 w-4 mr-3" />
                        Projects
                    </button>
                    <button
                        onClick={() => scrollToSection('tech-stack-gallery')}
                        className="flex items-center w-full text-left px-4 py-2 hover:bg-muted rounded-md transition-colors text-sm"
                    >
                        <Layers className="h-4 w-4 mr-3" />
                        Tech
                    </button>
                    <button
                        onClick={() => scrollToSection('soft-skills')}
                        className="flex items-center w-full text-left px-4 py-2 hover:bg-muted rounded-md transition-colors text-sm"
                    >
                        <Brain className="h-4 w-4 mr-3" />
                        Skills
                    </button>
                </nav>
            </div>
        </motion.div>
    );
};

export default function Page() {

    const [showModal, setShowModal] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const controls = useAnimationControls();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = window.innerHeight / 2 - element.offsetHeight / 2;
            const targetPosition = element.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Trigger animation
            controls.start({
                y: [20, 0],
                opacity: [0, 1],
                transition: { duration: 0.5 }
            });
        }
    };

    const handlePreview = useCallback(() => {
        window.open("/resume-v2.pdf", "_blank")

        requestAnimationFrame(() => {
            setShowModal(false)
        })
    }, [])

    const handleDownload = useCallback(() => {
        const link = document.createElement("a")
        link.href = "/resume-v2.pdf"
        link.download = "resume-v2.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        requestAnimationFrame(() => {
            setShowModal(false)
        })
    }, [])

    const handleOpenModal = useCallback(() => {
        setShowModal(true)
    }, [])

    const handleCloseModal = useCallback(() => {
        setShowModal(false)
    }, [])



    return (
        <div className="min-h-screen bg-background">

            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-14 items-center">

                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsMobileNavOpen(true)}
                            className="p-2 hover:bg-muted rounded-md"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                        <ThemeToggle />
                    </div>

                    <div className="mr-4 hidden md:flex cursor-pointer">

                        {/* <button 
                                onClick={() => scrollToSection('about')}
                                className="transition-colors hover:text-foreground/80"
                            >
                                Mifzal Fauzi
                            </button>  */}

                        <nav className="flex items-center space-x-6 text-sm font-medium cursor-pointer">
                            <button
                                onClick={() => scrollToSection('about')}
                                className="transition-colors hover:text-foreground/80 text-sm font-bold cursor-pointer"
                            >
                                Mifzal Fauzi
                            </button>

                            <button
                                onClick={() => scrollToSection('education')}
                                className="transition-colors hover:text-foreground/80 cursor-pointer"
                            >
                                Education
                            </button>
                            <button
                                onClick={() => scrollToSection('education')}
                                className="transition-colors hover:text-foreground/80 cursor-pointer"
                            >
                                Achievements
                            </button>
                            <button
                                onClick={() => scrollToSection('experience')}
                                className="transition-colors hover:text-foreground/80 cursor-pointer"
                            >
                                Experience
                            </button>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="transition-colors hover:text-foreground/80 cursor-pointer"
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => scrollToSection('tech-stack-gallery')}
                                className="transition-colors hover:text-foreground/80 cursor-pointer"
                            >
                                Tech
                            </button>
                            <button
                                onClick={() => scrollToSection('soft-skills')}
                                className="transition-colors hover:text-foreground/80 cursor-pointer"
                            >
                                Skills
                            </button>
                        </nav>
                    </div>

                    <div className="ml-auto flex items-center gap-4">
                        {/* ThemeToggle only appears here on non-mobile screens */}
                        <div className="hidden md:block">
                            <ThemeToggle />
                        </div>
                        <Button variant="outline" className="cursor-pointer" onClick={() => setShowModal(true)}>
                            Detailed Resume
                        </Button>
                    </div>
                </div>
            </header>

            <main className="w-full">
                <FloatingScrollIcon />
                <AnimatedSection id="about">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1 space-y-4">
                                <AnimatedHeading>
                                    <h2 className="text-xl font-semibold tracking-tight text-muted-foreground">Mifzal Fauzi | SWE | YTM Future Leaders Scholar</h2>
                                </AnimatedHeading>
                                <AnimatedHeading>
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
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
                                </AnimatedHeading>
                                <AnimatedHeading>
                                    <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Building digital experiences with modern technologies. Focused on creating elegant solutions to complex problems.
                                    </p>
                                </AnimatedHeading>
                                <motion.div
                                    className="flex flex-wrap gap-4 justify-center md:justify-start"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
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
                                </motion.div>
                            </div>
                            <motion.div
                                className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Image
                                    src="/mifzal.jpg?height=400&width=400"
                                    alt="Profile Photo"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </div>
                </AnimatedSection>


                <AnimatedSection id="education">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <AnimatedHeading>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                                Education & Achievements
                            </h2>
                        </AnimatedHeading>
                        <motion.div
                            className="grid gap-8 md:grid-cols-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <EducationCard />
                            <AchievementsCard />
                        </motion.div>
                    </div>
                </AnimatedSection>
                <AnimatedSection id="experience">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <AnimatedHeading>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                                Experience
                            </h2>
                        </AnimatedHeading>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <WorkExperience />
                        </motion.div>
                    </div>
                </AnimatedSection>

                <AnimatedSection id="projects">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <AnimatedHeading>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center">Projects</h2>
                        </AnimatedHeading>
                        <AnimatedHeading>
                            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                                Selection of recent projects that showcases skills and expertise.
                            </p>
                        </AnimatedHeading>
                        <motion.div
                            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <ProjectCard
                                title="A.I.–Powered Document Analyzer for Corporate Users (Ongoing)"
                                description=" AI platform for corporate users delivering document insights, risk and SWOT analysis, and decision-impact assessment."
                                image="/progress-work.png?height=400&width=600"
                                demoLink="https://www.drop2chat.com/main"
                                link=""
                                tags={["Vue.js", "FastAPI", "Python", "Axios", "SQLAlchemy ORM", "Alembic"]}
                                year="July 2025 - Ongoing"
                                details={
                                    <>
                                        <p>Ongoing project using technologies such as:</p>
                                        <ul className="list-disc list-inside">
                                            <li>Vue.js with App Router for a modular, component-based frontend</li>
                                            <li>FastAPI powering high-performance RESTful APIs and logic</li>
                                            <li>Axios for efficient API communication and data handling</li>
                                            <li>Tailwind CSS enabling clean, responsive, utility-first styling</li>
                                            <li>ShadCN/UI providing accessible, customizable UI components</li>
                                        </ul>
                                        <p>Includes server-side rendering, fully responsive layout, and built-in dark mode.</p>

                                    </>
                                }
                                images={["prototype.png"]}
                            />
                            <ProjectCard
                                title="QuickAid - Smart Campus Helpdesk Platform"
                                description=" Smart campus helpdesk platform built on Microsoft Azure, enabling automated ticketing, request tracking, and actionable insights for students and staff."
                                image="/quickaid_thumbnail.png?height=250&width=400"
                                demoLink="https://quickaid-frontend-hgacdxcvenh7cwcp.southeastasia-01.azurewebsites.net/"
                                link=""
                                tags={["Microsoft Azure"]}
                                year="July 2025 - August 2025"
                                details={
                                    <>

                                        <ul className="list-disc pl-5">
                                            <li>Hands-on Microsoft Azure Capstone Project under the KnowledgeCom MyMahir Programme</li>
                                            <li>Configured Azure Active Directory (single tenant) to enable RBAC for project contributors</li>
                                            <li>Initialized Azure Key Vault to store and retrieve API keys while integrating Azure Cosmos DB and SendGrid with Azure Functions</li>
                                        </ul>

                                    </>
                                }
                                images={["quickaid1.png", "az_kv.png", "az_func.png", "az_backend.png", "quickaid_thumbnail.png"]}
                            />
                            <ProjectCard
                                title="Personal Portfolio"
                                description="Responsive personal portfolio developed purely with Next.js"
                                image="/portfolio.png?height=400&width=600"
                                link="https://github.com/mifzalfauzi/portfolio"
                                demoLink="https://mifzal-dev.vercel.app"
                                tags={["Next.js"]}
                                year="2025"
                                details={
                                    <>
                                        <p>Deployed project using technologies such as:</p>
                                        <ul className="list-disc list-inside">
                                            <li>Next.js 13 with App Router</li>
                                            <li>Tailwind CSS for styling</li>
                                            <li>ShadCN/UI for components</li>
                                        </ul>
                                        <p>Features a responsive web design.</p>
                                    </>
                                }
                            />
                            <ProjectCard
                                title="Music Academy Management System with Chatbot Integration"
                                description="Music academy management system for student registration, attendance, and progress tracking, built as a final-year project."
                                image="/login.png?height=400&width=600"
                                link="https://github.com/mifzalfauzi/fyp-MAMS"
                                // demoLink="https://demo.example.com"
                                tags={["Django", "Django Views", "PythonAnywhere", "SQL"]}
                                year="2024"
                                details={
                                    <>
                                        <p>Final-Year Project for the Bachelor's Degree:</p>
                                        <ul className="list-disc pl-5">
                                            <li>Developed using Python (Django) for server-side development using MVT (Model-View-Template) architecture</li>
                                            <li>Constructed an NLP Voting Classifier Pipeline (Google Colab) utilizing machine learning algorithms and NLTK trained on 1500+ sample datasets for context-based assistant responses in Text Classification</li>
                                            <li>Enhanced chatbot responses functionality by API integration with OpenAI</li>

                                        </ul>
                                        <p>Associated with the National University of Malaysia</p>
                                    </>
                                }
                                images={["front.png", "chatbot.png", "login.png"]}
                            />
                            <ProjectCard
                                title="Student Absenteeism Management System "
                                description="Management system for recording university students' class attendance, designed for lecturers' reference."
                                image="/sams.jpg?height=400&width=600"
                                link="https://github.com/mifzalfauzi/SAMS"

                                tags={["PHP", "MySQL"]}
                                year="2023"
                                details={
                                    <>
                                        <p>This project involved certain methodologies and development technologies such as:</p>
                                        <ul className="list-disc pl-5">
                                            <li>Elected as Scrum Master from a team of five members to monitor progress throughout development within a span of three semesters (TTTU3404)</li>
                                            <li>Identified stakeholders and use cases for clear and concise project direction</li>
                                            <li>Developed with HTML, CSS and JavaScript for client-side and PHP for server-side processes</li>
                                            <li>Designed UI/UX requirements with Figma </li>
                                            <li>Utilising phpMyAdmin to store data instances into relational tables in ensuring efficient management and retrieval of structured data</li>
                                        </ul>
                                        <p>Associated with the National University of Malaysia.</p>
                                    </>
                                }
                                images={["group.jpg", "sams.jpg"]}
                            />
                        </motion.div>
                    </div>
                </AnimatedSection>

                <AnimatedSection id="tech-stack-gallery">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <AnimatedHeading>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center">
                                Technology Expertise
                            </h2>
                        </AnimatedHeading>
                        <AnimatedHeading>
                            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                                Technical skills across different tech categories, based on years of experience.
                            </p>
                        </AnimatedHeading>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <TechStackGallery />
                        </motion.div>
                    </div>
                </AnimatedSection>

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

                <AnimatedSection id="soft-skills">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <AnimatedHeading>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center">
                                Soft Skills & Languages
                            </h2>
                        </AnimatedHeading>
                        <AnimatedHeading>
                            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                                Beyond technical skills, qualities and languages enhance the work.
                            </p>
                        </AnimatedHeading>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <SoftSkillsLanguages />
                        </motion.div>
                    </div>
                </AnimatedSection>

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
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-sm hover:text-primary transition-colors"
                        >
                            About
                        </button>

                        <button
                            onClick={() => scrollToSection('education')}
                            className="text-sm hover:text-primary transition-colors"
                        >
                            Education
                        </button>
                        <button
                            onClick={() => scrollToSection('education')}
                            className="text-sm hover:text-primary transition-colors"
                        >
                            Achievements
                        </button>
                        <button
                            onClick={() => scrollToSection('experience')}
                            className="text-sm hover:text-primary transition-colors"
                        >
                            Experience
                        </button>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="text-sm hover:text-primary transition-colors"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('tech-stack-gallery')}
                            className="text-sm hover:text-primary transition-colors"
                        >
                            Tech
                        </button>
                        <button
                            onClick={() => scrollToSection('soft-skills')}
                            className="text-sm hover:text-primary transition-colors"
                        >
                            Skills
                        </button>

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
                onClose={handleCloseModal}
                onPreview={handlePreview}
                onDownload={handleDownload}
            />

            <MobileNav
                isOpen={isMobileNavOpen}
                onClose={() => setIsMobileNavOpen(false)}
            />
        </div>
    )
}
