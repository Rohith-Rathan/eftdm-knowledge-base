import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import {
  RocketLaunchIcon,
  BookOpenIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  LightBulbIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(1)

  const steps = [
    {
      id: 1,
      title: "Provide Your Requirements",
      description: "Just tell us what you want to build",
      duration: "5 minutes",
      icon: RocketLaunchIcon,
      details: [
        "Describe your application idea",
        "List key features you need",
        "Specify any design preferences",
        "Mention target users and use cases"
      ],
      example: {
        input: "I need a timesheet app where employees can upload files, fill forms, and get manager approval.",
        output: "Complete project structure with authentication, file upload, approval workflow, and dashboard"
      }
    },
    {
      id: 2,
      title: "AI Generates Everything",
      description: "We create complete project structure and documentation",
      duration: "2-4 hours",
      icon: CogIcon,
      details: [
        "Complete FSD, TSD, RTSD documents",
        "Mermaid diagrams for user journeys",
        "Project structure with frontend/backend",
        "All configuration files and templates"
      ],
      example: {
        input: "Raw requirements and business needs",
        output: "Production-ready project skeleton with all documentation"
      }
    },
    {
      id: 3,
      title: "Download and Start Building",
      description: "Get your complete project and start development",
      duration: "1-2 weeks",
      icon: ArrowDownTrayIcon,
      details: [
        "Download complete project package",
        "Follow AI-guided development process",
        "Use provided templates and prompts",
        "Deploy with confidence"
      ],
      example: {
        input: "Downloaded project with all files",
        output: "Fully functional application ready for production"
      }
    }
  ]

  const benefits = [
    {
      title: "Super Fast",
      description: "1-2 weeks instead of 2-3 months",
      icon: ClockIcon,
      metric: "75% faster"
    },
    {
      title: "Complete Package",
      description: "Everything you need in one download",
      icon: ArrowDownTrayIcon,
      metric: "100% ready"
    },
    {
      title: "AI-Powered",
      description: "Intelligent code generation and optimization",
      icon: LightBulbIcon,
      metric: "95% accuracy"
    },
    {
      title: "Production Ready",
      description: "Built with best practices and quality gates",
      icon: CheckCircleIcon,
      metric: "Enterprise grade"
    }
  ]

  return (
    <>
      <Head>
        <title>How EFTDM Works - Simple 3-Step Process</title>
        <meta name="description" content="Learn how EFTDM works with our simple 3-step process. Just provide requirements and get a complete application in 1-2 weeks." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                <Link href="/how-it-works" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How EFTDM Works
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Super Simple: Just provide your requirements and get a complete, 
              production-ready application in 1-2 weeks with AI assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/getting-started" className="btn-primary text-lg px-8 py-3">
                <RocketLaunchIcon className="h-5 w-5 inline mr-2" />
                Get Started Now
              </Link>
              <Link href="/test" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                <BookOpenIcon className="h-5 w-5 inline mr-2" />
                Try Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Step Process */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🚀 Super Simple: Just Tell Us What You Want!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No complex setup, no overwhelming documentation. Just provide your requirements and get a complete application.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="card text-center h-full">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <step.icon className="h-8 w-8 text-primary-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Step {step.id}: {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="text-sm text-primary-600 font-medium mb-4">
                    Duration: {step.duration}
                  </div>
                  
                  <div className="text-left mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">What you do:</h4>
                    <ul className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 text-left">
                    <div className="mb-2">
                      <span className="text-sm font-medium text-gray-700">Input:</span>
                      <p className="text-sm text-gray-600 italic">{step.example.input}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Output:</span>
                      <p className="text-sm text-gray-600">{step.example.output}</p>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowTopRightOnSquareIcon className="h-6 w-6 text-primary-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose EFTDM?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of software development with AI-powered automation, 
              real-time validation, and production-ready results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <benefit.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-primary-600">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Just provide your requirements and get a complete application in 1-2 weeks. 
            No complex setup, no overwhelming documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/getting-started" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              <RocketLaunchIcon className="h-5 w-5 inline mr-2" />
              Get Started Now
            </Link>
            <Link href="/test" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              <BookOpenIcon className="h-5 w-5 inline mr-2" />
              Try Live Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <RocketLaunchIcon className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold">EFTDM</span>
            </div>
            <p className="text-gray-400 mb-4">
              Enhanced Fast-Track Development Methodology with AI Integration
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/how-it-works" className="text-gray-400 hover:text-white">
                How It Works
              </Link>
              <Link href="/getting-started" className="text-gray-400 hover:text-white">
                Get Started
              </Link>
              <Link href="/templates" className="text-gray-400 hover:text-white">
                Templates
              </Link>
              <Link href="/examples" className="text-gray-400 hover:text-white">
                Examples
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
