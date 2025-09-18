import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { 
  BookOpenIcon, 
  RocketLaunchIcon, 
  DocumentTextIcon, 
  CodeBracketIcon,
  PlayIcon,
  ArrowDownTrayIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  const [activePhase, setActivePhase] = useState(0)

  const phases = [
    {
      id: 1,
      title: "FSD Analysis",
      description: "Comprehensive functional specification analysis with UXD integration",
      features: ["UXD Image Analysis", "Figma MCP Integration", "Mermaid Diagrams", "Component Mapping"]
    },
    {
      id: 2,
      title: "Implementation Planning",
      description: "Technical architecture and development roadmap creation",
      features: ["Technology Stack Selection", "Architecture Design", "Resource Planning", "Timeline Estimation"]
    },
    {
      id: 3,
      title: "Project Setup",
      description: "Development environment and project structure initialization",
      features: ["Repository Setup", "CI/CD Pipeline", "Development Tools", "Environment Configuration"]
    },
    {
      id: 4,
      title: "Backend Implementation",
      description: "Server-side development with API and database setup",
      features: ["API Development", "Database Design", "Authentication", "Security Implementation"]
    },
    {
      id: 5,
      title: "Frontend Implementation",
      description: "User interface development with real-time validation",
      features: ["Component Development", "UXD Compliance", "Responsive Design", "Interactive Testing"]
    },
    {
      id: 6,
      title: "Integration & Testing",
      description: "End-to-end testing and system integration",
      features: ["API Integration", "User Journey Testing", "Performance Testing", "Quality Gates"]
    },
    {
      id: 7,
      title: "Deployment & Optimization",
      description: "Production deployment and performance optimization",
      features: ["Production Deployment", "Performance Optimization", "Monitoring Setup", "Documentation"]
    }
  ]

  const features = [
    {
      icon: BookOpenIcon,
      title: "Comprehensive Documentation",
      description: "Complete methodology documentation with templates, examples, and best practices"
    },
    {
      icon: RocketLaunchIcon,
      title: "Fast-Track Development",
      description: "Accelerated development process with automated workflows and quality gates"
    },
    {
      icon: DocumentTextIcon,
      title: "Template Generator",
      description: "Generate complete project templates with all necessary EFTDM documents"
    },
    {
      icon: CodeBracketIcon,
      title: "Interactive Testing",
      description: "Test components and workflows before implementing in your project"
    }
  ]

  const stats = [
    { label: "Development Phases", value: "7" },
    { label: "Quality Gates", value: "21" },
    { label: "Templates Available", value: "15+" },
    { label: "Success Rate", value: "95%" }
  ]

  return (
    <>
      <Head>
        <title>EFTDM Knowledge Base - Enhanced Fast-Track Development Methodology</title>
        <meta name="description" content="Comprehensive knowledge base for the Enhanced Fast-Track Development Methodology (EFTDM) with templates, examples, and interactive testing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <RocketLaunchIcon className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">EFTDM</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/methodology" className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                  Methodology
                </Link>
                        <Link href="/how-it-works" className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                          How It Works
                        </Link>
                        <Link href="/getting-started" className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                          Getting Started
                        </Link>
                <Link href="/templates" className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                  Templates
                </Link>
                <Link href="/examples" className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                  Examples
                </Link>
                <Link href="/test" className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                  Test Components
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              EFTDM Knowledge Base
            </h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                      Just provide your requirements and get a complete, production-ready application in 1-2 weeks. 
                      AI-powered development with Cursor AI integration.
                    </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/how-it-works" className="btn-primary text-lg px-8 py-3">
                <RocketLaunchIcon className="h-5 w-5 inline mr-2" />
                How It Works
              </Link>
              <Link href="/getting-started" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                <BookOpenIcon className="h-5 w-5 inline mr-2" />
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🚀 Super Simple: Just Tell Us What You Want!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              No complex setup, no overwhelming documentation. Just provide your requirements and get a complete application.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Example: Timesheet App</h3>
              <div className="text-left">
                <p className="text-gray-700 mb-2"><strong>What you say:</strong></p>
                <p className="text-gray-600 mb-4 italic">"I need a timesheet app where employees can upload files, fill forms, and get manager approval."</p>
                
                <p className="text-gray-700 mb-2"><strong>What AI creates:</strong></p>
                <ul className="text-gray-600 space-y-1">
                  <li>✅ Complete project with frontend, backend, database</li>
                  <li>✅ User authentication and file upload system</li>
                  <li>✅ Manager approval workflow</li>
                  <li>✅ Dashboard with analytics</li>
                  <li>✅ All documentation and tests</li>
                </ul>
                
                <p className="text-gray-700 mt-4"><strong>Time:</strong> <span className="text-green-600 font-semibold">1-2 weeks instead of 2-3 months!</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EFTDM?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our methodology combines proven development practices with modern AI-assisted workflows 
              to deliver production-ready applications faster than ever.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <feature.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Methodology Overview */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7-Phase Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each phase includes quality gates, automated validation, and real-time testing 
              to ensure consistent, high-quality deliverables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {phases.map((phase, index) => (
                <div 
                  key={phase.id}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    activePhase === index 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setActivePhase(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        activePhase === index ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {phase.id}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">{phase.title}</h3>
                        <p className="text-gray-600">{phase.description}</p>
                      </div>
                    </div>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Phase {phases[activePhase].id}: {phases[activePhase].title}
              </h3>
              <p className="text-gray-600 mb-6">{phases[activePhase].description}</p>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                {phases[activePhase].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href={`/methodology#phase-${phases[activePhase].id}`} className="btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Accelerate Your Development?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Download our complete EFTDM package with templates, examples, and automation scripts. 
              Start building production-ready applications today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/templates" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                <ArrowDownTrayIcon className="h-5 w-5 inline mr-2" />
                Download Templates
              </Link>
              <Link href="/examples" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                <StarIcon className="h-5 w-5 inline mr-2" />
                View Examples
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <RocketLaunchIcon className="h-8 w-8 text-primary-400" />
                <span className="ml-2 text-xl font-bold">EFTDM</span>
              </div>
              <p className="text-gray-400">
                Enhanced Fast-Track Development Methodology for modern software development.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/methodology" className="hover:text-white">Methodology</Link></li>
                <li><Link href="/templates" className="hover:text-white">Templates</Link></li>
                <li><Link href="/examples" className="hover:text-white">Examples</Link></li>
                <li><Link href="/test" className="hover:text-white">Test Components</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/community" className="hover:text-white">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/github" className="hover:text-white">GitHub</Link></li>
                <li><Link href="/twitter" className="hover:text-white">Twitter</Link></li>
                <li><Link href="/linkedin" className="hover:text-white">LinkedIn</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EFTDM Knowledge Base. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
