"use client"

import Link from "next/link"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Menu, X } from "lucide-react"

export default function Home() {
  const [showArrow, setShowArrow] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleArrowClick = () => {
    setShowArrow(false)
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center px-6 py-3 max-w-6xl">
          <Link href="#" className="text-lg font-bold">
            Mauro Tapia
          </Link>
          <nav className="hidden md:flex items-center space-x-6 ml-auto">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="md:ml-4">
              {/* <ThemeToggle /> */}
            </div>
            <button
              className="md:hidden text-muted-foreground hover:text-foreground"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-gray-800 py-4">
            <nav className="flex flex-col space-y-4 px-6">
              <Link
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                href="#experience"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Experience
              </Link>
              <Link
                href="#skills"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 text-transparent bg-clip-text mb-4">
          Mauro Tapia
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">Backend Engineer</h2>
        <p className="max-w-xl text-base text-muted-foreground mb-6">
          Passionate about creating impactful user experiences through innovative software solutions. Currently building
          amazing products at Hiberus.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Badge
            variant="outline"
            className="py-2 px-4 flex items-center gap-2 bg-blue-950/30 border-blue-800 text-blue-500 transition-transform transform hover:scale-110 hover:bg-blue-900/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-blue-500"
            >
              <path d="m18 16 4-4-4-4"></path>
              <path d="m6 8-4 4 4 4"></path>
              <path d="m14.5 4-5 16"></path>
            </svg>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Complete software development
            </span>
          </Badge>

          <Badge
            variant="outline"
            className="py-2 px-4  flex items-center gap-2 bg-green-950/30 border-green-800 text-green-500 transition-transform transform hover:scale-110 hover:bg-green-900/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-green-500"
            >
              <path d="m18 16 4-4-4-4"></path>
              <path d="m6 8-4 4 4 4"></path>
              <path d="m14.5 4-5 16"></path>
            </svg>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
              2+ Years Experience
            </span>
          </Badge>

          <Badge
            variant="outline"
            className="py-2 px-4 flex items-center gap-2 bg-orange-950/30 border-orange-800 text-orange-500 transition-transform transform hover:scale-110 hover:bg-orange-900/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-orange-500"
            >
              <path d="m18 16 4-4-4-4"></path>
              <path d="m6 8-4 4 4 4"></path>
              <path d="m14.5 4-5 16"></path>
            </svg>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
              Hybrid Work
            </span>
          </Badge>
        </div>

        <a
          target="_blank"
          className="inline-flex h-12 animate-background-shine items-center justify-center rounded-lg border border-white/20 
                    bg-[linear-gradient(90deg,#00FF0000,45%,#8c5ead,80%,#00FF0000)] bg-[length:200%_100%] 
                    px-6 font-medium text-white/80 transition-colors hover:opacity-80"
          href="https://github.com/MauroTapia"
          rel="noreferrer"
        >
          📖 My projects
        </a>

        {/* Scroll Down Button */}
        {showArrow && (
          <button
            onClick={handleArrowClick}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 h-10 w-10 animate-bounce flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-down h-6 w-6"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </button>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="w-full bg-[hsl(0,0%,14.9%,0.1)] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          {/* About Me - Left */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I am a passionate software developer focused on creating efficient and user-centric solutions. With more
              than three years of experience in the IT sector, I have worked on both backend and frontend, bridging
              business needs with technology. I thrive in dynamic environments, continuously learning and embracing new
              challenges.
            </p>
          </div>

          {/* Quick Facts - Right */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Quick Facts</h2>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>📍 Based in CABA, Argentina</li>
              <li>🌐 Intermediate English</li>
              <li>🎓 Computer Engineering degree at Universidad Nacional de La Matanza</li>
              <li>🎓 Certified Tech Developer at Digital House by Mercado Libre/Globant</li>
              <li>🎓Microservices training at Hiberus University</li>
              <li>💻 Experience working in SMEs and corporations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Experience</h2>
          <div className="space-y-5">
            {/* Experience Item - Software Engineer */}
            <div className="border border-gray-000 bg-gray-900/10 rounded-lg p-5 flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h3 className="text-lg font-semibold">Software Engineer</h3>
                <p className="text-sm text-muted-foreground mb-2">Hiberus</p>
                <p className="text-sm text-muted-foreground">
                  Working in the microservice area using Java, Spring Boot, Kafka, Mongo, Jira, etc.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Construction, development and maintenance of architecture.
                </p>
              </div>
              <div className="text-left md:text-right mt-2 md:mt-0">
                <p className="text-sm text-muted-foreground">Dec. 2024 - Present</p>
                <span className="text-xs font-semibold text-white-400 px-2 py-1 rounded-lg">Full time</span>
              </div>
            </div>

            {/* Experience Item - Backend Developer */}
            <div className="border border-gray-000 bg-gray-900/10 rounded-lg p-5 flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h3 className="text-lg font-semibold">Backend Developer</h3>
                <p className="text-sm text-muted-foreground mb-2">Armaferro SA</p>
                <p className="text-sm text-muted-foreground">
                  API building and management, database management.
                </p>
                <p className="text-sm text-muted-foreground mt-2">Using Java, Spring Boot, MySQL, ReactJs</p>
              </div>
              <div className="text-left md:text-right mt-2 md:mt-0">
                <p className="text-sm text-muted-foreground">Nov. 2022 - Dec. 2024</p>
                <span className="text-xs font-semibold text-white-400 px-2 py-1 rounded-lg">Full time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full bg-[hsl(0,0%,14.9%,0.1)] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>React.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>CSS</Badge>
                <Badge>Sass</Badge>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Java</Badge>
                <Badge>Python</Badge>
                <Badge>Spring boot</Badge>
                <Badge>Microservices</Badge>
                <Badge>Kafka</Badge>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Databases</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>SQL</Badge>
                <Badge>MongoDB</Badge>
                <Badge>Postgres</Badge>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Tools & Practices</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Git</Badge>
                <Badge>CI/CD</Badge>
                <Badge>Linux</Badge>
                <Badge>Scrum</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Contact</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Email */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col">
              <h3 className="text-base font-semibold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-gray-400"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Email
              </h3>
              <a
                href="mailto:maurotapiadev@gmail.com"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 break-all"
              >
                maurotapiadev@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col">
              <h3 className="text-base font-semibold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-gray-400"
                >
                  <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z"></path>
                  <circle cx="12" cy="9" r="2"></circle>
                </svg>
                Location
              </h3>
              <p className="text-muted-foreground text-sm">CABA, Argentina</p>
            </div>

            {/* LinkedIn */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col">
              <h3 className="text-base font-semibold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-gray-400"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v6"></path>
                  <rect width="4" height="12" x="2" y="10"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </h3>
              <a
                href="https://www.linkedin.com/in/maurotapia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 truncate"
              >
                linkedin.com/in/maurotapia
              </a>
            </div>

            {/* GitHub */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col">
              <h3 className="text-base font-semibold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-gray-400"
                >
                  <path d="M9 19c-5 2-5-3-7-4"></path>
                  <path d="M15 22v-4.87a2.87 2.87 0 0 0-.78-2.08c3.92-.44 8.03-1.92 8.03-8.63a6.6 6.6 0 0 0-1.75-4.6 6.07 6.07 0 0 0-.11-4.65s-1.47-.44-4.86 1.75a16.73 16.73 0 0 0-8.82 0C2.47 1.24 1 1.69 1 1.69a6.07 6.07 0 0 0-.11 4.65A6.6 6.6 0 0 0 0 11.42c0 6.71 4.11 8.19 8.03 8.63a2.87 2.87 0 0 0-.78 2.08V22"></path>
                </svg>
                GitHub
              </h3>
              <a
                href="https://www.github.com/maurotapia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 truncate"
              >
                github.com/MauroTapia
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

