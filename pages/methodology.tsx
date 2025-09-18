import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { 
  BookOpenIcon, 
  RocketLaunchIcon, 
  DocumentTextIcon, 
  CodeBracketIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PlayIcon,
  ArrowDownTrayIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function Methodology() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null)

  const phases = [
    {
      id: 1,
      title: "FSD Analysis",
      description: "Comprehensive functional specification analysis with UXD integration",
      duration: "2-4 hours",
      deliverables: [
        "Functional Requirements Analysis",
        "UXD Image Analysis Results", 
        "Figma MCP Integration Report",
        "Mermaid Flow Diagrams",
        "Component Inventory & Mapping",
        "Technical Architecture Overview"
      ],
      qualityGates: [
        "All user stories mapped to components",
        "UXD compliance validated",
        "Technical feasibility confirmed",
        "Component dependencies identified"
      ],
      tools: ["FSD Analyzer", "UXD Image Scanner", "Figma MCP", "Mermaid Generator"]
    },
    {
      id: 2,
      title: "Implementation Planning",
      description: "Technical architecture and development roadmap creation",
      duration: "1-2 hours",
      deliverables: [
        "Technology Stack Selection",
        "Architecture Design Document",
        "Development Timeline",
        "Resource Allocation Plan",
        "Risk Assessment Matrix",
        "Quality Assurance Strategy"
      ],
      qualityGates: [
        "Architecture approved by stakeholders",
        "Timeline realistic and achievable",
        "Risks identified and mitigated",
        "Resources allocated appropriately"
      ],
      tools: ["Architecture Designer", "Timeline Planner", "Risk Assessor", "Resource Calculator"]
    },
    {
      id: 3,
      title: "Project Setup",
      description: "Development environment and project structure initialization",
      duration: "1-3 hours",
      deliverables: [
        "Repository Structure",
        "CI/CD Pipeline Configuration",
        "Development Environment Setup",
        "Code Quality Tools Integration",
        "Testing Framework Installation",
        "Documentation Structure"
      ],
      qualityGates: [
        "Repository follows best practices",
        "CI/CD pipeline functional",
        "Development environment ready",
        "All tools integrated and tested"
      ],
      tools: ["Repo Generator", "CI/CD Builder", "Environment Setup", "Tool Integrator"]
    },
    {
      id: 4,
      title: "Backend Implementation",
      description: "Server-side development with API and database setup",
      duration: "8-16 hours",
      deliverables: [
        "Database Schema Design",
        "API Endpoints Implementation",
        "Authentication System",
        "Security Middleware",
        "Data Validation Layer",
        "Error Handling System"
      ],
      qualityGates: [
        "All API endpoints functional",
        "Security measures implemented",
        "Database schema optimized",
        "Error handling comprehensive"
      ],
      tools: ["API Builder", "Database Designer", "Security Scanner", "Validation Generator"]
    },
    {
      id: 5,
      title: "Frontend Implementation",
      description: "User interface development with real-time validation",
      duration: "12-24 hours",
      deliverables: [
        "Component Library Development",
        "UXD Design Implementation",
        "Responsive Layout System",
        "State Management Setup",
        "API Integration Layer",
        "Real-time UI Validation"
      ],
      qualityGates: [
        "Pixel-perfect UXD compliance",
        "Responsive design validated",
        "All components functional",
        "Real-time validation working"
      ],
      tools: ["Component Builder", "UXD Validator", "Responsive Tester", "Live Validator"]
    },
    {
      id: 6,
      title: "Integration & Testing",
      description: "End-to-end testing and system integration",
      duration: "4-8 hours",
      deliverables: [
        "Frontend-Backend Integration",
        "End-to-End Test Suite",
        "Performance Testing Results",
        "Security Testing Report",
        "User Journey Validation",
        "Cross-browser Compatibility"
      ],
      qualityGates: [
        "All integrations functional",
        "Test coverage > 90%",
        "Performance benchmarks met",
        "Security vulnerabilities resolved"
      ],
      tools: ["Integration Tester", "E2E Test Builder", "Performance Profiler", "Security Scanner"]
    },
    {
      id: 7,
      title: "Deployment & Optimization",
      description: "Production deployment and performance optimization",
      duration: "2-4 hours",
      deliverables: [
        "Production Environment Setup",
        "Performance Optimization Report",
        "Monitoring & Analytics Setup",
        "Documentation Completion",
        "User Training Materials",
        "Maintenance Guidelines"
      ],
      qualityGates: [
        "Production deployment successful",
        "Performance targets achieved",
        "Monitoring systems active",
        "Documentation complete and accurate"
      ],
      tools: ["Deployment Manager", "Performance Optimizer", "Monitoring Setup", "Doc Generator"]
    }
  ]

  const methodologies = [
    {
      title: "Traditional Waterfall",
      duration: "3-6 months",
      issues: ["No early feedback", "Late testing", "Rigid requirements", "High risk"]
    },
    {
      title: "Agile Scrum",
      duration: "2-4 months", 
      issues: ["Scope creep", "Technical debt", "Inconsistent quality", "Team dependency"]
    },
    {
      title: "EFTDM",
      duration: "1-2 weeks",
      benefits: ["Early validation", "Continuous testing", "Quality gates", "Automated workflows"]
    }
  ]

  return (
    <>
      <Head>
        <title>EFTDM Methodology - Enhanced Fast-Track Development Process</title>
        <meta name="description" content="Learn the complete 7-phase Enhanced Fast-Track Development Methodology with quality gates, automated validation, and real-time testing." />
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
                    <Link href="/methodology" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                      Methodology
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              EFTDM Methodology
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              A comprehensive 7-phase development process with Cursor AI integration, 
              quality gates, automated validation, and real-time testing for production-ready applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/test" className="btn-primary text-lg px-8 py-3">
                <PlayIcon className="h-5 w-5 inline mr-2" />
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

      {/* Comparison Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why EFTDM?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare traditional development approaches with our enhanced methodology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodologies.map((method, index) => (
              <div key={index} className={`card ${method.title === 'EFTDM' ? 'ring-2 ring-primary-500' : ''}`}>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <div className="text-2xl font-bold text-primary-600 mb-4">{method.duration}</div>
                  
                  {method.issues ? (
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">Common Issues:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {method.issues.map((issue, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">Key Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {method.benefits?.map((benefit, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phases Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7-Phase Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each phase includes specific deliverables, quality gates, and automated tools 
              to ensure consistent, high-quality results.
            </p>
          </div>

          <div className="space-y-6">
            {phases.map((phase, index) => (
              <div key={phase.id} className="card">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setExpandedPhase(expandedPhase === index ? null : index)}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      {phase.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        Duration: {phase.duration}
                      </div>
                    </div>
                  </div>
                  {expandedPhase === index ? (
                    <ChevronDownIcon className="h-6 w-6 text-gray-400" />
                  ) : (
                    <ChevronRightIcon className="h-6 w-6 text-gray-400" />
                  )}
                </div>

                {expandedPhase === index && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <DocumentTextIcon className="h-5 w-5 mr-2 text-blue-500" />
                          Deliverables
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {phase.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500" />
                          Quality Gates
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {phase.qualityGates.map((gate, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                              {gate}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CodeBracketIcon className="h-5 w-5 mr-2 text-purple-500" />
                          Tools & Automation
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {phase.tools.map((tool, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex gap-4">
                      <Link href={`/test?phase=${phase.id}`} className="btn-primary">
                        <PlayIcon className="h-4 w-4 mr-2" />
                        Test This Phase
                      </Link>
                      <Link href={`/templates#phase-${phase.id}`} className="btn-secondary">
                        <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                        Download Templates
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Gates Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Gates & Validation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automated quality gates ensure each phase meets production standards before proceeding
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpenIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm">Complete documentation validation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Functionality</h3>
              <p className="text-gray-600 text-sm">All features working as specified</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CodeBracketIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Code Quality</h3>
              <p className="text-gray-600 text-sm">Clean, maintainable code standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RocketLaunchIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600 text-sm">Performance benchmarks met</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Implement EFTDM?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Start with our interactive demo, download templates, and begin your 
              fast-track development journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/test" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                <PlayIcon className="h-5 w-5 inline mr-2" />
                Try Interactive Demo
              </Link>
              <Link href="/templates" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                <ArrowDownTrayIcon className="h-5 w-5 inline mr-2" />
                Download Complete Package
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
