import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { 
  BookOpenIcon, 
  RocketLaunchIcon, 
  DocumentTextIcon, 
  CodeBracketIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  StarIcon,
  FolderIcon,
  ExternalLinkIcon
} from '@heroicons/react/24/outline'

export default function Examples() {
  const [expandedExample, setExpandedExample] = useState<number | null>(null)

  const examples = [
    {
      id: 1,
      title: "Employee Time Tracking Application",
      description: "Complete timesheet application built with EFTDM methodology",
      category: "Enterprise SaaS",
      complexity: "Medium",
      duration: "2 weeks",
      technologies: ["Vue.js 3", "Node.js", "PostgreSQL", "AI/OCR"],
      features: [
        "AI-powered document parsing",
        "Real-time validation",
        "Multi-format file support",
        "Dashboard analytics",
        "Role-based access control"
      ],
      phases: [
        {
          phase: 1,
          title: "FSD Analysis",
          deliverables: ["Complete FSD with UXD analysis", "Mermaid user journey diagrams", "Component mapping"],
          duration: "4 hours"
        },
        {
          phase: 2,
          title: "Implementation Planning", 
          deliverables: ["Technical architecture", "Technology stack selection", "Development timeline"],
          duration: "2 hours"
        },
        {
          phase: 3,
          title: "Project Setup",
          deliverables: ["Repository structure", "CI/CD pipeline", "Development environment"],
          duration: "3 hours"
        },
        {
          phase: 4,
          title: "Backend Implementation",
          deliverables: ["REST API endpoints", "Database schema", "Authentication system"],
          duration: "16 hours"
        },
        {
          phase: 5,
          title: "Frontend Implementation",
          deliverables: ["Vue.js components", "UXD-compliant UI", "Real-time validation"],
          duration: "20 hours"
        },
        {
          phase: 6,
          title: "Integration & Testing",
          deliverables: ["E2E test suite", "Performance testing", "Security validation"],
          duration: "6 hours"
        },
        {
          phase: 7,
          title: "Deployment & Optimization",
          deliverables: ["Production deployment", "Performance optimization", "Monitoring setup"],
          duration: "3 hours"
        }
      ],
      metrics: {
        linesOfCode: "15,000+",
        testCoverage: "92%",
        performanceScore: "95/100",
        accessibilityScore: "98/100"
      },
      files: [
        "Complete_Project/",
        "FSD_Document.md",
        "Technical_Specification.md",
        "UXD_Analysis_Report.md",
        "Implementation_Guide.md",
        "Deployment_Guide.md"
      ]
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with microservices architecture",
      category: "E-commerce",
      complexity: "High",
      duration: "3 weeks",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
      features: [
        "Microservices architecture",
        "Payment gateway integration",
        "Inventory management",
        "Real-time notifications",
        "Advanced analytics"
      ],
      phases: [
        {
          phase: 1,
          title: "FSD Analysis",
          deliverables: ["E-commerce FSD", "User journey mapping", "Service architecture"],
          duration: "6 hours"
        },
        {
          phase: 2,
          title: "Implementation Planning",
          deliverables: ["Microservices design", "API gateway setup", "Database strategy"],
          duration: "4 hours"
        },
        {
          phase: 3,
          title: "Project Setup",
          deliverables: ["Multi-service structure", "Docker configuration", "Kubernetes setup"],
          duration: "4 hours"
        },
        {
          phase: 4,
          title: "Backend Implementation",
          deliverables: ["User service", "Product service", "Order service", "Payment service"],
          duration: "24 hours"
        },
        {
          phase: 5,
          title: "Frontend Implementation",
          deliverables: ["React components", "State management", "Payment integration"],
          duration: "28 hours"
        },
        {
          phase: 6,
          title: "Integration & Testing",
          deliverables: ["Service integration", "Load testing", "Security testing"],
          duration: "8 hours"
        },
        {
          phase: 7,
          title: "Deployment & Optimization",
          deliverables: ["Kubernetes deployment", "Performance tuning", "Monitoring"],
          duration: "4 hours"
        }
      ],
      metrics: {
        linesOfCode: "25,000+",
        testCoverage: "88%",
        performanceScore: "92/100",
        accessibilityScore: "95/100"
      },
      files: [
        "Ecommerce_Project/",
        "Microservices_Architecture.md",
        "API_Documentation.md",
        "Database_Design.md",
        "Deployment_Guide.md"
      ]
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      description: "Enterprise SaaS dashboard with analytics and reporting",
      category: "SaaS Platform",
      complexity: "High",
      duration: "4 weeks",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "AWS"],
      features: [
        "Multi-tenant architecture",
        "Real-time analytics",
        "Custom dashboards",
        "API integration",
        "Advanced reporting"
      ],
      phases: [
        {
          phase: 1,
          title: "FSD Analysis",
          deliverables: ["SaaS FSD", "Multi-tenant design", "Analytics requirements"],
          duration: "8 hours"
        },
        {
          phase: 2,
          title: "Implementation Planning",
          deliverables: ["Multi-tenant architecture", "Analytics pipeline", "AWS infrastructure"],
          duration: "6 hours"
        },
        {
          phase: 3,
          title: "Project Setup",
          deliverables: ["Next.js structure", "AWS configuration", "Database setup"],
          duration: "5 hours"
        },
        {
          phase: 4,
          title: "Backend Implementation",
          deliverables: ["Multi-tenant API", "Analytics engine", "Reporting system"],
          duration: "32 hours"
        },
        {
          phase: 5,
          title: "Frontend Implementation",
          deliverables: ["Dashboard components", "Analytics visualization", "Custom widgets"],
          duration: "36 hours"
        },
        {
          phase: 6,
          title: "Integration & Testing",
          deliverables: ["Multi-tenant testing", "Analytics validation", "Performance testing"],
          duration: "10 hours"
        },
        {
          phase: 7,
          title: "Deployment & Optimization",
          deliverables: ["AWS deployment", "Analytics optimization", "Monitoring setup"],
          duration: "6 hours"
        }
      ],
      metrics: {
        linesOfCode: "35,000+",
        testCoverage: "90%",
        performanceScore: "94/100",
        accessibilityScore: "96/100"
      },
      files: [
        "SaaS_Dashboard/",
        "Multi_Tenant_Architecture.md",
        "Analytics_Design.md",
        "AWS_Infrastructure.md",
        "Deployment_Guide.md"
      ]
    }
  ]

  const categories = [
    { name: "All", count: examples.length },
    { name: "Enterprise SaaS", count: examples.filter(e => e.category === "Enterprise SaaS").length },
    { name: "E-commerce", count: examples.filter(e => e.category === "E-commerce").length },
    { name: "SaaS Platform", count: examples.filter(e => e.category === "SaaS Platform").length }
  ]

  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredExamples = selectedCategory === "All" 
    ? examples 
    : examples.filter(example => example.category === selectedCategory)

  return (
    <>
      <Head>
        <title>EFTDM Examples - Real-World Project Examples</title>
        <meta name="description" content="Explore real-world project examples built with EFTDM methodology, including complete implementations and case studies." />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <RocketLaunchIcon className="h-8 w-8 text-primary-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">EFTDM</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/methodology" className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                  Methodology
                </Link>
                <Link href="/templates" className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                  Templates
                </Link>
                <Link href="/examples" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World Examples
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Explore complete project examples built with EFTDM methodology, 
              including implementations, case studies, and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/test" className="btn-primary text-lg px-8 py-3">
                <EyeIcon className="h-5 w-5 inline mr-2" />
                Try Interactive Demo
              </Link>
              <Link href="/templates" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                <ArrowDownTrayIcon className="h-5 w-5 inline mr-2" />
                Download Templates
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.name
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Examples Grid */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Examples</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete implementations showcasing EFTDM methodology in action
            </p>
          </div>

          <div className="space-y-8">
            {filteredExamples.map((example, index) => (
              <div key={example.id} className="card">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setExpandedExample(expandedExample === example.id ? null : example.id)}
                >
                  <div className="flex items-center">
                    <StarIcon className="h-8 w-8 text-yellow-500 mr-4" />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">{example.title}</h3>
                      <p className="text-gray-600">{example.description}</p>
                      <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{example.category}</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">{example.complexity}</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">{example.duration}</span>
                      </div>
                    </div>
                  </div>
                  {expandedExample === example.id ? (
                    <ChevronDownIcon className="h-6 w-6 text-gray-400" />
                  ) : (
                    <ChevronRightIcon className="h-6 w-6 text-gray-400" />
                  )}
                </div>

                {expandedExample === example.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Project Details */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Project Details</h4>
                        
                        <div className="mb-6">
                          <h5 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h5>
                          <div className="flex flex-wrap gap-2">
                            {example.technologies.map((tech, i) => (
                              <span key={i} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h5>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {example.features.map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h5 className="text-sm font-semibold text-gray-700 mb-2">Project Metrics:</h5>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-600">Lines of Code:</span>
                              <div className="font-semibold text-gray-900">{example.metrics.linesOfCode}</div>
                            </div>
                            <div>
                              <span className="text-gray-600">Test Coverage:</span>
                              <div className="font-semibold text-gray-900">{example.metrics.testCoverage}</div>
                            </div>
                            <div>
                              <span className="text-gray-600">Performance:</span>
                              <div className="font-semibold text-gray-900">{example.metrics.performanceScore}</div>
                            </div>
                            <div>
                              <span className="text-gray-600">Accessibility:</span>
                              <div className="font-semibold text-gray-900">{example.metrics.accessibilityScore}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* EFTDM Phases */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">EFTDM Implementation</h4>
                        <div className="space-y-3">
                          {example.phases.map((phase, i) => (
                            <div key={i} className="border border-gray-200 rounded-lg p-3">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-semibold text-gray-900">Phase {phase.phase}: {phase.title}</h5>
                                <span className="text-xs text-gray-500">{phase.duration}</span>
                              </div>
                              <ul className="text-xs text-gray-600 space-y-1">
                                {phase.deliverables.map((deliverable, j) => (
                                  <li key={j} className="flex items-start">
                                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-2"></span>
                                    {deliverable}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Files & Actions */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Project Files</h4>
                        <div className="mb-6">
                          <ul className="space-y-2 text-sm text-gray-600">
                            {example.files.map((file, i) => (
                              <li key={i} className="flex items-center">
                                <FolderIcon className="h-4 w-4 text-gray-400 mr-2" />
                                {file}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <button className="w-full btn-primary">
                            <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                            Download Project
                          </button>
                          <button className="w-full btn-secondary">
                            <ExternalLinkIcon className="h-4 w-4 mr-2" />
                            View Live Demo
                          </button>
                          <button className="w-full btn-secondary">
                            <EyeIcon className="h-4 w-4 mr-2" />
                            View Case Study
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Use these examples as inspiration and download our complete EFTDM package 
              to start building your own production-ready application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/templates" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                <ArrowDownTrayIcon className="h-5 w-5 inline mr-2" />
                Download Templates
              </Link>
              <Link href="/test" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                <EyeIcon className="h-5 w-5 inline mr-2" />
                Try Interactive Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
