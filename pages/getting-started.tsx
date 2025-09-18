import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { 
  BookOpenIcon, 
  RocketLaunchIcon, 
  DocumentTextIcon, 
  CodeBracketIcon,
  PlayIcon,
  ArrowDownTrayIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  UserIcon,
  CogIcon,
  LightBulbIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

export default function GettingStarted() {
  const [activeStep, setActiveStep] = useState<number>(1)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const getStepFiles = (stepId: number) => {
    const stepFiles: { [key: number]: Array<{ name: string; path: string }> } = {
      1: [
        { name: 'README.md', path: '/templates/step-1-understand-eftdm/README.md' },
        { name: 'EFTDM_METHODOLOGY_GUIDE.md', path: '/templates/step-1-understand-eftdm/EFTDM_METHODOLOGY_GUIDE.md' },
        { name: 'QUALITY_GATES_CHECKLIST.md', path: '/templates/step-1-understand-eftdm/QUALITY_GATES_CHECKLIST.md' },
        { name: 'BENEFITS_COMPARISON.md', path: '/templates/step-1-understand-eftdm/BENEFITS_COMPARISON.md' },
        { name: 'CORE_PRINCIPLES.md', path: '/templates/step-1-understand-eftdm/CORE_PRINCIPLES.md' }
      ],
      2: [
        { name: 'README.md', path: '/templates/step-2-download-templates/README.md' },
        { name: 'INDUSTRY_STANDARD_FSD_TEMPLATE.md', path: '/templates/INDUSTRY_STANDARD_FSD_TEMPLATE.md' },
        { name: 'INDUSTRY_STANDARD_TSD_TEMPLATE.md', path: '/templates/INDUSTRY_STANDARD_TSD_TEMPLATE.md' },
        { name: 'INDUSTRY_STANDARD_RTSD_TEMPLATE.md', path: '/templates/INDUSTRY_STANDARD_RTSD_TEMPLATE.md' },
        { name: 'CURSOR_AI_PROMPT_LIBRARY.md', path: '/templates/CURSOR_AI_PROMPT_LIBRARY.md' }
      ],
      3: [
        { name: 'README.md', path: '/templates/step-3-prepare-project/README.md' },
        { name: 'CURSOR_AI_SETUP_GUIDE.md', path: '/templates/step-3-prepare-project/CURSOR_AI_SETUP_GUIDE.md' },
        { name: 'PROJECT_STRUCTURE_TEMPLATE/', path: '/templates/step-3-prepare-project/PROJECT_STRUCTURE_TEMPLATE/' },
        { name: 'GIT_WORKFLOW.md', path: '/templates/step-3-prepare-project/GIT_WORKFLOW.md' },
        { name: 'ENVIRONMENT_SETUP.md', path: '/templates/step-3-prepare-project/ENVIRONMENT_SETUP.md' }
      ],
      4: [
        { name: 'README.md', path: '/templates/step-4-create-fsd/README.md' },
        { name: 'INDUSTRY_STANDARD_FSD_TEMPLATE.md', path: '/templates/INDUSTRY_STANDARD_FSD_TEMPLATE.md' },
        { name: 'UXD_ANALYSIS_GUIDE.md', path: '/templates/step-4-create-fsd/UXD_ANALYSIS_GUIDE.md' },
        { name: 'FIGMA_INTEGRATION_GUIDE.md', path: '/templates/step-4-create-fsd/FIGMA_INTEGRATION_GUIDE.md' },
        { name: 'MERMAID_DIAGRAM_EXAMPLES.md', path: '/templates/step-4-create-fsd/MERMAID_DIAGRAM_EXAMPLES.md' }
      ],
      5: [
        { name: 'README.md', path: '/templates/step-5-generate-specs/README.md' },
        { name: 'INDUSTRY_STANDARD_TSD_TEMPLATE.md', path: '/templates/INDUSTRY_STANDARD_TSD_TEMPLATE.md' },
        { name: 'INDUSTRY_STANDARD_RTSD_TEMPLATE.md', path: '/templates/INDUSTRY_STANDARD_RTSD_TEMPLATE.md' },
        { name: 'ARCHITECTURE_DESIGN_GUIDE.md', path: '/templates/step-5-generate-specs/ARCHITECTURE_DESIGN_GUIDE.md' },
        { name: 'TECHNOLOGY_STACK_RECOMMENDATIONS.md', path: '/templates/step-5-generate-specs/TECHNOLOGY_STACK_RECOMMENDATIONS.md' }
      ],
      6: [
        { name: 'README.md', path: '/templates/step-6-execute-development/README.md' },
        { name: 'PHASE_1_FSD_ANALYSIS.md', path: '/templates/step-6-execute-development/PHASE_1_FSD_ANALYSIS.md' },
        { name: 'PHASE_2_IMPLEMENTATION_PLANNING.md', path: '/templates/step-6-execute-development/PHASE_2_IMPLEMENTATION_PLANNING.md' },
        { name: 'PHASE_3_PROJECT_SETUP.md', path: '/templates/step-6-execute-development/PHASE_3_PROJECT_SETUP.md' },
        { name: 'PHASE_4_BACKEND_IMPLEMENTATION.md', path: '/templates/step-6-execute-development/PHASE_4_BACKEND_IMPLEMENTATION.md' },
        { name: 'PHASE_5_FRONTEND_IMPLEMENTATION.md', path: '/templates/step-6-execute-development/PHASE_5_FRONTEND_IMPLEMENTATION.md' },
        { name: 'PHASE_6_INTEGRATION_TESTING.md', path: '/templates/step-6-execute-development/PHASE_6_INTEGRATION_TESTING.md' },
        { name: 'PHASE_7_DEPLOYMENT_OPTIMIZATION.md', path: '/templates/step-6-execute-development/PHASE_7_DEPLOYMENT_OPTIMIZATION.md' }
      ],
      7: [
        { name: 'README.md', path: '/templates/step-7-deploy-monitor/README.md' },
        { name: 'DEPLOYMENT_GUIDE.md', path: '/templates/step-7-deploy-monitor/DEPLOYMENT_GUIDE.md' },
        { name: 'MONITORING_SETUP.md', path: '/templates/step-7-deploy-monitor/MONITORING_SETUP.md' },
        { name: 'PERFORMANCE_OPTIMIZATION.md', path: '/templates/step-7-deploy-monitor/PERFORMANCE_OPTIMIZATION.md' },
        { name: 'SECURITY_MONITORING.md', path: '/templates/step-7-deploy-monitor/SECURITY_MONITORING.md' }
      ]
    }
    return stepFiles[stepId] || []
  }

  const steps = [
    {
      id: 1,
      title: "Understand EFTDM",
      description: "Learn the methodology fundamentals",
      icon: BookOpenIcon,
      duration: "15 minutes",
      details: [
        "Read the 7-phase development process",
        "Understand quality gates and validation",
        "Learn about automation and real-time testing",
        "Review the benefits over traditional methods"
      ]
    },
    {
      id: 2,
      title: "Download Templates",
      description: "Get the complete EFTDM package",
      icon: ArrowDownTrayIcon,
      duration: "5 minutes",
      details: [
        "Download FSD template with Mermaid integration",
        "Get TSD and RTSD templates",
        "Access automation scripts",
        "Review real-world examples"
      ]
    },
    {
      id: 3,
      title: "Prepare Your Project",
      description: "Set up your development environment with Cursor AI",
      icon: CogIcon,
      duration: "30 minutes",
      details: [
        "Install Cursor AI IDE and required tools (Node.js, Git, etc.)",
        "Configure Cursor AI with EFTDM prompts and templates",
        "Set up version control and project structure",
        "Prepare your team workspace with Cursor AI collaboration"
      ]
    },
    {
      id: 4,
      title: "Create Your FSD",
      description: "Define your project requirements with Cursor AI assistance",
      icon: DocumentTextIcon,
      duration: "2-4 hours",
      details: [
        "Use the enhanced FSD template in Cursor AI",
        "Include UXD images or Figma links for AI analysis",
        "Generate Mermaid diagrams using Cursor AI prompts",
        "Define user stories and acceptance criteria with AI assistance"
      ]
    },
    {
      id: 5,
      title: "Generate Technical Specs",
      description: "Create TSD and RTSD documents with Cursor AI",
      icon: CodeBracketIcon,
      duration: "1-2 hours",
      details: [
        "Run automated TSD generation using Cursor AI prompts",
        "Create RTSD with UXD integration via AI analysis",
        "Define architecture and technology stack with AI assistance",
        "Plan microservices and APIs using Cursor AI recommendations"
      ]
    },
    {
      id: 6,
      title: "Execute Development",
      description: "Follow the 7-phase process with Cursor AI",
      icon: RocketLaunchIcon,
      duration: "1-2 weeks",
      details: [
        "Phase 1: FSD Analysis & Design Integration with Cursor AI",
        "Phase 2: Implementation Planning using AI recommendations",
        "Phase 3: Project Setup with automated Cursor AI workflows",
        "Phase 4: Backend Implementation with AI-assisted coding",
        "Phase 5: Frontend Implementation with real-time AI validation",
        "Phase 6: Integration & Testing with AI-powered test generation",
        "Phase 7: Deployment & Optimization using Cursor AI insights"
      ]
    },
    {
      id: 7,
      title: "Deploy & Monitor",
      description: "Launch and maintain your application",
      icon: StarIcon,
      duration: "Ongoing",
      details: [
        "Deploy to production environment",
        "Set up monitoring and alerting",
        "Configure CI/CD pipelines",
        "Plan for scaling and maintenance"
      ]
    }
  ]

  const quickStartGuides = [
    {
      title: "For Product Managers",
      icon: UserIcon,
      description: "Learn how to define requirements and manage EFTDM projects",
      steps: [
        "Understand the 7-phase process",
        "Learn to create effective FSDs",
        "Master quality gate management",
        "Track project progress"
      ],
      duration: "45 minutes"
    },
    {
      title: "For Developers",
      icon: CodeBracketIcon,
      description: "Get hands-on with EFTDM development workflow using Cursor AI",
      steps: [
        "Set up Cursor AI development environment",
        "Use EFTDM automation scripts and AI prompts",
        "Implement quality gates with AI assistance",
        "Deploy with confidence using Cursor AI insights"
      ],
      duration: "60 minutes"
    },
    {
      title: "For Teams",
      icon: UserIcon,
      description: "Coordinate team efforts with EFTDM methodology and Cursor AI",
      steps: [
        "Establish team roles and Cursor AI collaboration protocols",
        "Set up shared Cursor AI workspace and prompts",
        "Define communication protocols with AI assistance",
        "Implement review processes using Cursor AI features"
      ],
      duration: "30 minutes"
    }
  ]

  const commonWorkflows = [
    {
      title: "New Project Setup",
      description: "Starting a brand new application from scratch",
      phases: ["FSD Creation", "Architecture Design", "Team Setup", "Development"],
      estimatedTime: "2-3 weeks",
      complexity: "Medium"
    },
    {
      title: "Feature Addition",
      description: "Adding new features to existing applications",
      phases: ["Feature Analysis", "Impact Assessment", "Implementation", "Testing"],
      estimatedTime: "3-5 days",
      complexity: "Low"
    },
    {
      title: "Legacy Modernization",
      description: "Modernizing existing legacy systems",
      phases: ["Assessment", "Migration Planning", "Incremental Updates", "Validation"],
      estimatedTime: "4-6 weeks",
      complexity: "High"
    },
    {
      title: "MVP Development",
      description: "Building Minimum Viable Products quickly",
      phases: ["Core Feature Definition", "Rapid Prototyping", "User Testing", "Iteration"],
      estimatedTime: "1-2 weeks",
      complexity: "Low"
    }
  ]

  return (
    <>
      <Head>
        <title>Getting Started with EFTDM - Complete Guide</title>
        <meta name="description" content="Learn how to use the Enhanced Fast-Track Development Methodology from start to finish with our comprehensive getting started guide." />
        <link rel="icon" href="/favicon.ico" />
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
                <Link href="/getting-started" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
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
              Getting Started with EFTDM
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Your complete step-by-step guide to implementing the Enhanced Fast-Track Development Methodology from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setActiveStep(1)}
                className="btn-primary text-lg px-8 py-3"
              >
                <PlayIcon className="h-5 w-5 inline mr-2" />
                Start Your Journey
              </button>
              <Link href="/templates" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                <ArrowDownTrayIcon className="h-5 w-5 inline mr-2" />
                Download Templates
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Guide */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete EFTDM Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these 7 steps to successfully implement EFTDM in your project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Steps List */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  className={`card cursor-pointer transition-all duration-200 ${
                    activeStep === step.id ? 'ring-2 ring-primary-500 bg-primary-50' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4 ${
                      activeStep === step.id ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step.id}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        Duration: {step.duration}
                      </div>
                    </div>
                    <ChevronRightIcon className="h-6 w-6 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>

            {/* Active Step Details */}
            <div className="card">
              <div className="flex items-center mb-6">
                {React.createElement(steps[activeStep - 1].icon, { className: "h-8 w-8 text-primary-600 mr-4" })}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Step {activeStep}: {steps[activeStep - 1].title}
                  </h3>
                  <p className="text-gray-600">{steps[activeStep - 1].description}</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    Estimated Time: {steps[activeStep - 1].duration}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">What you'll do:</h4>
                <ul className="space-y-2">
                  {steps[activeStep - 1].details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Download Required Files:</h4>
                <div className="space-y-2">
                  {getStepFiles(activeStep).map((file, index) => (
                    <a
                      key={index}
                      href={file.path}
                      download
                      className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                    >
                      <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                      {file.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex space-x-4">
                  {activeStep > 1 && (
                    <button 
                      onClick={() => setActiveStep(activeStep - 1)}
                      className="btn-secondary"
                    >
                      Previous Step
                    </button>
                  )}
                  {activeStep < steps.length && (
                    <button 
                      onClick={() => setActiveStep(activeStep + 1)}
                      className="btn-primary"
                    >
                      Next Step
                    </button>
                  )}
                  {activeStep === steps.length && (
                    <Link href="/test" className="btn-primary">
                      Try Interactive Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Guides */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Role-Specific Quick Start</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored guides based on your role and experience level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickStartGuides.map((guide, index) => (
              <div key={index} className="card">
                <div className="text-center mb-6">
                  <guide.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {guide.duration}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Learning Path:</h4>
                  <ul className="space-y-2">
                    {guide.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start text-sm">
                        <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 mt-2"></span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <button className="w-full btn-primary">
                    Start {guide.title} Guide
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cursor AI Integration Section */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cursor AI Integration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage Cursor AI's powerful features to accelerate your EFTDM implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-center mb-6">
                <CodeBracketIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Assisted Coding</h3>
                <p className="text-gray-600 text-sm">Generate code faster with Cursor AI's intelligent suggestions</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  Real-time code completion and suggestions
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  Automated refactoring and optimization
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  Context-aware code generation
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="text-center mb-6">
                <DocumentTextIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Document Analysis</h3>
                <p className="text-gray-600 text-sm">Analyze UXD images and Figma designs with AI</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  Extract design specifications from images
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  Generate component mappings automatically
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  Create Mermaid diagrams from requirements
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="text-center mb-6">
                <RocketLaunchIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Workflows</h3>
                <p className="text-gray-600 text-sm">Streamline development with AI-powered automation</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  Automated test generation and validation
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  Intelligent error detection and fixes
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  Performance optimization suggestions
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-100 border-l-4 border-blue-400 text-blue-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Cursor AI Setup for EFTDM</h3>
            <p className="mb-4">
              Configure Cursor AI with EFTDM-specific prompts and templates for maximum efficiency.
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>1. Install Cursor AI:</strong> Download from cursor.sh and set up your workspace</p>
              <p><strong>2. Import EFTDM Prompts:</strong> Use our pre-built prompt library for each phase</p>
              <p><strong>3. Configure AI Models:</strong> Set up Claude, GPT-4, or other models for optimal results</p>
              <p><strong>4. Enable Features:</strong> Turn on code completion, chat, and document analysis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Common Workflows */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Development Workflows</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the workflow that best matches your project type and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonWorkflows.map((workflow, index) => (
              <div key={index} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{workflow.title}</h3>
                    <p className="text-gray-600 text-sm">{workflow.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Time</div>
                    <div className="font-semibold text-gray-900">{workflow.estimatedTime}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700 mr-2">Complexity:</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      workflow.complexity === 'Low' ? 'bg-green-100 text-green-800' :
                      workflow.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {workflow.complexity}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Phases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {workflow.phases.map((phase, phaseIndex) => (
                      <span key={phaseIndex} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                        {phase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full btn-secondary">
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                    Follow This Workflow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Learning */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your EFTDM Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Choose your path and begin building production-ready applications with our proven methodology.
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <RocketLaunchIcon className="h-8 w-8 text-primary-400" />
                <span className="ml-2 text-xl font-bold">EFTDM</span>
              </div>
              <p className="text-gray-400">Enhanced Fast-Track Development Methodology for modern software development.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/methodology" className="hover:text-white">Methodology</Link></li>
                <li><Link href="/getting-started" className="hover:text-white">Getting Started</Link></li>
                <li><Link href="/templates" className="hover:text-white">Templates</Link></li>
                <li><Link href="/examples" className="hover:text-white">Examples</Link></li>
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
            <p>© 2024 EFTDM Knowledge Base. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
