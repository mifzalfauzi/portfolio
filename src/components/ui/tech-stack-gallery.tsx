"use client"
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Database,
  Server,
  Terminal,
  GitBranch,
  Users,
  FileJson,
  FileCode,
  Braces,
  Layers,
  Globe,
  LayoutGrid,
  Workflow,
  FileType,
  FileType2,
  Hash,
  Cpu,
  Github,
  GitFork,
  ClipboardList,
  Book,
  Axis3D,
  Shovel,
  Wind,
  MoveHorizontal,
} from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import type { JSX } from "react"

interface Technology {
  name: string
  icon: JSX.Element
  years: number
}

interface TechCategory {
  name: string
  icon: JSX.Element
  technologies: Technology[]
}

const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    icon: <Code className="h-5 w-5" />,
    technologies: [
      { name: "HTML", icon: <FileCode className="h-10 w-10 text-orange-500" />, years: 4 },
      { name: "CSS", icon: <FileType className="h-10 w-10 text-blue-500" />, years: 4 },
      { name: "JavaScript", icon: <Braces className="h-10 w-10 text-yellow-500" />, years: 4 },
      { name: "Razor Pages", icon: <FileType2 className="h-10 w-10 text-purple-500" />, years: 1 },
      { name: "Django Views", icon: <LayoutGrid className="h-10 w-10 text-green-600" />, years: 1 },
      { name: "NextJS", icon: <Layers className="h-10 w-10 text-gray-800 dark:text-gray-200" />, years: 1 },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    technologies: [
      { name: ".NET MVC", icon: <Globe className="h-10 w-10 text-purple-600" />, years: 1 },
      { name: ".NET Web API", icon: <Server className="h-10 w-10 text-blue-600" />, years: 1 },
      { name: "RESTful APIs", icon: <Workflow className="h-10 w-10 text-green-500" />, years: 4 },
      { name: "Django", icon: <LayoutGrid className="h-10 w-10 text-green-600" />, years: 1 },
      { name: "FastAPI", icon: <Cpu className="h-10 w-10 text-teal-500" />, years: 1 },
    ],
  },
  {
    name: "Database",
    icon: <Database className="h-5 w-5" />,
    technologies: [
      { name: "Microsoft SQL Server", icon: <Database className="h-10 w-10 text-red-600" />, years: 1 },
      { name: "MySQL", icon: <Database className="h-10 w-10 text-blue-600" />, years: 3 },
    ],
  },
  {
    name: "Libaries",
    icon: <Book className="h-5 w-5" />,
    technologies: [
      { name: "Bootstrap", icon: <Shovel className="h-10 w-10 text-blue-600" />, years: 3 },
      { name: "Tailwind", icon: <Wind className="h-10 w-10 text-blue-600" />, years: 3 },
      { name: "Axios", icon: <Axis3D className="h-10 w-10 text-red-600" />, years: 1 },
    ],
  },
  {
    name: "Programming Languages",
    icon: <Terminal className="h-5 w-5" />,
    technologies: [
      { name: "C#", icon: <Hash className="h-10 w-10 text-purple-600" />, years: 1 },
      { name: "Python", icon: <FileCode className="h-10 w-10 text-yellow-600" />, years: 1 },
      { name: "Java", icon: <Cpu className="h-10 w-10 text-red-500" />, years: 2 },
      { name: "PHP", icon: <FileJson className="h-10 w-10 text-indigo-500" />, years: 2 },
    ],
  },
  {
    name: "DevOps",
    icon: <GitBranch className="h-5 w-5" />,
    technologies: [
      { name: "Git", icon: <GitBranch className="h-10 w-10 text-orange-600" />, years: 1 },
      { name: "GitHub", icon: <Github className="h-10 w-10 text-gray-800 dark:text-gray-200" />, years: 1 },
      { name: "Sourcetree", icon: <GitFork className="h-10 w-10 text-blue-500" />, years: 1 },
    ],
  },
  {
    name: "Methodologies",
    icon: <Users className="h-5 w-5" />,
    technologies: [
      { name: "Agile", icon: <Workflow className="h-10 w-10 text-blue-500" />, years: 4 },
      { name: "Scrum Framework", icon: <ClipboardList className="h-10 w-10 text-green-500" />, years: 3 },
    ],
  },
]

export default function TechStackGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [userScrolling, setUserScrolling] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null)
  const userScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const categoryTabsRef = useRef<HTMLDivElement>(null)

  const activeCategory = techCategories[activeIndex]


  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }


    checkScreenSize()


    window.addEventListener('resize', checkScreenSize)


    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])


  const hasEnoughToScroll = isMobile
    ? activeCategory.technologies.length > 2
    : activeCategory.technologies.length > 3


  const shouldAutoScrollMobile = isMobile && activeCategory.technologies.length > 2

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current || !hasEnoughToScroll) return

    setUserScrolling(true)

    if (userScrollTimeoutRef.current) {
      clearTimeout(userScrollTimeoutRef.current)
    }

    userScrollTimeoutRef.current = setTimeout(() => {
      setUserScrolling(false)
    }, 2000)

    const container = scrollContainerRef.current
    const scrollAmount = direction === "left" ? -240 : 240

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const container = scrollContainerRef.current

    if (!container || !hasEnoughToScroll) return

    const autoScroll = () => {
      if (isPaused || userScrolling) return

      const currentScroll = container.scrollLeft
      const maxScroll = container.scrollWidth - container.clientWidth

      if (currentScroll >= maxScroll - 10) {
        container.scrollLeft = 0
      } else {
        container.scrollBy({
          left: 1,
          behavior: "auto",
        })
      }
    }

    const scrollInterval = setInterval(autoScroll, 20)
    autoScrollRef.current = scrollInterval


    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }
    }
  }, [isPaused, userScrolling, activeIndex, hasEnoughToScroll])

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0
    }
    setUserScrolling(false)
  }, [activeIndex])

  useEffect(() => {
    if (categoryTabsRef.current) {
      const tabsContainer = categoryTabsRef.current
      const activeTab = tabsContainer.children[activeIndex] as HTMLElement

      if (activeTab) {
        const containerWidth = tabsContainer.offsetWidth
        const tabLeft = activeTab.offsetLeft
        const tabWidth = activeTab.offsetWidth

        const scrollLeft = tabLeft - containerWidth / 2 + tabWidth / 2

        tabsContainer.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        })
      }
    }
  }, [activeIndex])


  const displayTechnologies = hasEnoughToScroll
    ? [...activeCategory.technologies, ...activeCategory.technologies]
    : activeCategory.technologies

  return (
    <div className="w-full overflow-hidden">

      <div className="relative mb-12">
        {isMobile &&  (
          <div className="text-center text-muted-foreground text-sm mb-4 flex items-center justify-center gap-2">
            <MoveHorizontal className="h-4 w-4" />
            <span>Swipe to see more</span>
          </div>
        )}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
          <button
            onClick={() => setActiveIndex((prev) => (prev === 0 ? techCategories.length - 1 : prev - 1))}
            className="bg-background/80 backdrop-blur-sm text-foreground p-2 rounded-r-lg shadow-md hover:bg-background transition-all"
            aria-label="Previous category"
          >
            <ChevronLeft className="h-5 w-5 cursor-pointer" />
          </button>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
          <button
            onClick={() => setActiveIndex((prev) => (prev === techCategories.length - 1 ? 0 : prev + 1))}
            className="bg-background/80 backdrop-blur-sm text-foreground p-2 rounded-l-lg shadow-md hover:bg-background transition-all"
            aria-label="Next category"
          >
            <ChevronRight className="h-5 w-5 cursor-pointer" />
          </button>
        </div>

        <div
  className="overflow-x-auto py-2 px-4 md:px-16"
  style={
    isMobile
      ? {
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE 10+
          WebkitOverflowScrolling: 'touch',
          overflowX: 'scroll',
        }
      : undefined
  }
  ref={(el) => {
    if (isMobile && el) {
      el.style.setProperty('scrollbar-width', 'none'); // Firefox
      el.style.setProperty('-ms-overflow-style', 'none'); // IE
      // Chrome/Safari scrollbar hiding can't be done inline, this is best-effort
    }
  }}
>
  <div
    ref={categoryTabsRef}
    className="flex space-x-2 min-w-max justify-start md:justify-center"
  >
    {techCategories.map((category, index) => (
      <button
        key={index}
        onClick={() => setActiveIndex(index)}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer",
          activeIndex === index
            ? "bg-primary text-primary-foreground shadow-md"
            : "bg-muted hover:bg-muted/80 text-foreground",
        )}
      >
        <div className="flex items-center gap-2">
          {category.icon}
          <span>{category.name}</span>
        </div>
      </button>
    ))}
  </div>
</div>

      </div>

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
          {activeCategory.icon}
          <span>{activeCategory.name}</span>
        </h3>
        <p className="text-muted-foreground mt-2">
          {activeCategory.technologies.length} technologies •{" "}
          {activeCategory.technologies.reduce((sum, tech) => sum + tech.years, 0)} years of combined experience
        </p>
      </div>


      <div
        className="relative mx-auto max-w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {hasEnoughToScroll && !isMobile && (
          <>
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm text-foreground p-2 rounded-r-lg shadow-md hover:bg-background transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 cursor-pointer" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm text-foreground p-2 rounded-l-lg shadow-md hover:bg-background transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 cursor-pointer" />
            </button>
          </>
        )}


        {isMobile && hasEnoughToScroll && (
          <div className="text-center text-muted-foreground text-sm mb-4 flex items-center justify-center gap-2">
            <MoveHorizontal className="h-4 w-4" />
            <span>Swipe to see more</span>
          </div>
        )}


        <div
          ref={scrollContainerRef}
          className={cn(
            "flex overflow-x-auto gap-4 md:gap-6 pb-4 pt-2 px-4 md:px-12 no-scrollbar",

            (isMobile && !hasEnoughToScroll) ? "justify-center" : "",

            (!isMobile && !hasEnoughToScroll) ? "justify-center" : "",
          )}
          style={{ scrollbarWidth: "none" }}
        >
          {displayTechnologies.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 transition-all duration-300"
              style={{ width: isMobile ? "160px" : "180px" }}
            >
              <div className="rounded-lg bg-background shadow-sm border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full flex flex-col items-center justify-center p-4 md:p-6 group">
                {/* Icon */}
                <div className="mb-4 flex items-center justify-center p-3 rounded-full bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300">
                  <div className="transform transition-transform duration-300 group-hover:scale-110">{tech.icon}</div>
                </div>


                <h4 className="font-medium text-base text-center mb-2">{tech.name}</h4>


                <div className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {tech.years} {tech.years === 1 ? "year" : "years"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="flex justify-center mt-6 md:mt-8 space-x-2">
        {techCategories.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-2 md:w-2.5 h-2 md:h-2.5 rounded-full transition-all duration-300 cursor-pointer",
              activeIndex === index ? "bg-primary w-5 md:w-6" : "bg-muted hover:bg-primary/50",
            )}
            aria-label={`Go to category ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}