import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { 
  BookOpenIcon, 
  RocketLaunchIcon, 
  DocumentTextIcon, 
  CodeBracketIcon,
  PlayIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DocumentIcon,
  EyeIcon,
  CogIcon
} from '@heroicons/react/24/outline'

export default function Test() {
  const [activePhase, setActivePhase] = useState(1)
  const [testResults, setTestResults] = useState<{[key: string]: boolean}>({})
  const [isRunning, setIsRunning] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const phases = [
    {
      id: 1,
      title: "FSD Analysis",
      description: "Test functional specification analysis with UXD integration",
      icon: DocumentTextIcon,
      tests: [
        {
          name: "UXD Image Analysis",
          description: "Analyze uploaded UXD images for layout and component extraction",
          status: "pending",
          steps: [
            "Upload UXD image",
            "Extract layout structure", 
            "Identify UI components",
            "Generate component mapping",
            "Validate design compliance"
          ]
        },
        {
          name: "Figma MCP Integration",
          description: "Test Figma design analysis and specification extraction",
          status: "pending",
          steps: [
            "Connect to Figma project",
            "Extract Dev Mode specs",
            "Parse design system",
            "Generate component specs",
            "Validate implementation"
          ]
        },
        {
          name: "Mermaid Diagram Generation",
          description: "Generate flow diagrams from requirements",
          status: "pending",
          steps: [
            "Parse requirements text",
            "Identify user journeys",
            "Generate flow diagrams",
            "Create decision trees",
            "Export diagram files"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Implementation Planning",
      description: "Test architecture design and project planning",
      icon: CogIcon,
      tests: [
        {
          name: "Technology Stack Selection",
          description: "Test automated technology stack recommendation",
          status: "pending",
          steps: [
            "Analyze project requirements",
            "Evaluate technology options",
            "Generate recommendations",
            "Validate compatibility",
            "Create stack documentation"
          ]
        },
        {
          name: "Architecture Design",
          description: "Test system architecture generation",
          status: "pending",
          steps: [
            "Define system boundaries",
            "Design component architecture",
            "Create data flow diagrams",
            "Validate scalability",
            "Generate architecture docs"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Project Setup",
      description: "Test development environment setup",
      icon: RocketLaunchIcon,
      tests: [
        {
          name: "Repository Structure",
          description: "Test automated project structure generation",
          status: "pending",
          steps: [
            "Generate folder structure",
            "Create configuration files",
            "Setup package management",
            "Initialize version control",
            "Validate structure"
          ]
        },
        {
          name: "CI/CD Pipeline",
          description: "Test continuous integration setup",
          status: "pending",
          steps: [
            "Configure build pipeline",
            "Setup testing automation",
            "Configure deployment",
            "Setup monitoring",
            "Validate pipeline"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Backend Implementation",
      description: "Test server-side development components",
      icon: CodeBracketIcon,
      tests: [
        {
          name: "API Endpoint Generation",
          description: "Test automated API endpoint creation",
          status: "pending",
          steps: [
            "Parse API specifications",
            "Generate endpoint code",
            "Create validation logic",
            "Setup error handling",
            "Test endpoints"
          ]
        },
        {
          name: "Database Schema",
          description: "Test database design and migration",
          status: "pending",
          steps: [
            "Design database schema",
            "Generate migration files",
            "Create seed data",
            "Setup relationships",
            "Validate schema"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Frontend Implementation",
      description: "Test UI/UX development with real-time validation",
      icon: EyeIcon,
      tests: [
        {
          name: "Component Generation",
          description: "Test automated component creation",
          status: "pending",
          steps: [
            "Parse component specs",
            "Generate component code",
            "Apply styling",
            "Setup state management",
            "Test component"
          ]
        },
        {
          name: "UXD Compliance",
          description: "Test design compliance validation",
          status: "pending",
          steps: [
            "Compare with UXD designs",
            "Validate layout",
            "Check typography",
            "Verify colors",
            "Test responsiveness"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Integration & Testing",
      description: "Test system integration and quality assurance",
      icon: CheckCircleIcon,
      tests: [
        {
          name: "End-to-End Testing",
          description: "Test complete user journey validation",
          status: "pending",
          steps: [
            "Define test scenarios",
            "Create test scripts",
            "Execute tests",
            "Validate results",
            "Generate reports"
          ]
        },
        {
          name: "Performance Testing",
          description: "Test application performance validation",
          status: "pending",
          steps: [
            "Setup performance tests",
            "Execute load tests",
            "Measure metrics",
            "Identify bottlenecks",
            "Optimize performance"
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Deployment & Optimization",
      description: "Test production deployment and optimization",
      icon: RocketLaunchIcon,
      tests: [
        {
          name: "Production Deployment",
          description: "Test automated deployment process",
          status: "pending",
          steps: [
            "Configure production environment",
            "Setup deployment pipeline",
            "Execute deployment",
            "Validate deployment",
            "Setup monitoring"
          ]
        },
        {
          name: "Performance Optimization",
          description: "Test application optimization",
          status: "pending",
          steps: [
            "Analyze performance metrics",
            "Identify optimization opportunities",
            "Apply optimizations",
            "Measure improvements",
            "Document changes"
          ]
        }
      ]
    }
  ]

  const runTest = async (phaseId: number, testIndex: number) => {
    setIsRunning(true)
    setCurrentStep(0)
    
    const test = phases[phaseId - 1].tests[testIndex]
    const testKey = `${phaseId}-${testIndex}`
    
    // Simulate test execution
    for (let i = 0; i < test.steps.length; i++) {
      setCurrentStep(i)
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
    
    // Simulate test result
    const success = Math.random() > 0.2 // 80% success rate
    setTestResults(prev => ({ ...prev, [testKey]: success }))
    
    setIsRunning(false)
    setCurrentStep(0)
  }

  const runAllTests = async () => {
    setIsRunning(true)
    
    for (let phaseId = 1; phaseId <= phases.length; phaseId++) {
      const phase = phases[phaseId - 1]
      for (let testIndex = 0; testIndex < phase.tests.length; testIndex++) {
        await runTest(phaseId, testIndex)
      }
    }
    
    setIsRunning(false)
  }

  const getTestStatus = (phaseId: number, testIndex: number) => {
    const testKey = `${phaseId}-${testIndex}`
    return testResults[testKey]
  }

  return (
    <>
      <Head>
        <title>EFTDM Test Components - Interactive Development Testing</title>
        <meta name="description" content="Test EFTDM methodology components interactively with real-time validation and quality gates." />
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
                    <Link href="/getting-started" className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                      Getting Started
                    </Link>
                    <Link href="/templates" className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                      Templates
                    </Link>
                    <Link href="/examples" className="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                      Examples
                    </Link>
                    <Link href="/test" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
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
              Interactive Test Components
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Test EFTDM methodology components interactively with real-time validation, 
              quality gates, and automated testing workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={runAllTests}
                disabled={isRunning}
                className="btn-primary text-lg px-8 py-3 disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Running All Tests...
                  </>
                ) : (
                  <>
                    <PlayIcon className="h-5 w-5 inline mr-2" />
                    Run All Tests
                  </>
                )}
              </button>
              <Link href="/templates" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                <DocumentIcon className="h-5 w-5 inline mr-2" />
                Download Templates
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Test Dashboard */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Test Dashboard</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select a phase to test individual components or run comprehensive tests
            </p>
          </div>

          {/* Phase Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activePhase === phase.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Phase {phase.id}: {phase.title}
              </button>
            ))}
          </div>

          {/* Active Phase Tests */}
          <div className="card">
            <div className="flex items-center mb-6">
              {React.createElement(phases[activePhase - 1].icon, { className: "h-8 w-8 text-primary-600 mr-4" })}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Phase {activePhase}: {phases[activePhase - 1].title}
                </h3>
                <p className="text-gray-600">{phases[activePhase - 1].description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {phases[activePhase - 1].tests.map((test, testIndex) => {
                const testKey = `${activePhase}-${testIndex}`
                const testResult = testResults[testKey]
                const isTestRunning = isRunning && currentStep < test.steps.length
                
                return (
                  <div key={testIndex} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <DocumentIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <h4 className="font-semibold text-gray-900">{test.name}</h4>
                      </div>
                      <div className="flex items-center">
                        {testResult === true && <CheckCircleIcon className="h-5 w-5 text-green-500" />}
                        {testResult === false && <XCircleIcon className="h-5 w-5 text-red-500" />}
                        {testResult === undefined && !isTestRunning && (
                          <ClockIcon className="h-5 w-5 text-gray-400" />
                        )}
                        {isTestRunning && (
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-600"></div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{test.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="text-xs font-semibold text-gray-700 mb-2">Test Steps:</h5>
                      <div className="space-y-1">
                        {test.steps.map((step, stepIndex) => (
                          <div 
                            key={stepIndex}
                            className={`flex items-center text-xs ${
                              isTestRunning && stepIndex <= currentStep
                                ? 'text-primary-600 font-medium'
                                : 'text-gray-600'
                            }`}
                          >
                            {isTestRunning && stepIndex <= currentStep ? (
                              <CheckCircleIcon className="h-3 w-3 text-primary-600 mr-2" />
                            ) : (
                              <div className="w-3 h-3 border border-gray-300 rounded-full mr-2"></div>
                            )}
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => runTest(activePhase, testIndex)}
                      disabled={isRunning}
                      className="w-full btn-primary text-sm py-2 disabled:opacity-50"
                    >
                      {isTestRunning ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Running...
                        </>
                      ) : (
                        <>
                          <PlayIcon className="h-4 w-4 mr-2" />
                          Run Test
                        </>
                      )}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Test Results Summary */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Test Results Summary</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Overview of all test results across EFTDM phases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {Object.values(testResults).filter(result => result === true).length}
              </div>
              <div className="text-gray-600">Passed Tests</div>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">
                {Object.values(testResults).filter(result => result === false).length}
              </div>
              <div className="text-gray-600">Failed Tests</div>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl font-bold text-gray-600 mb-2">
                {Object.keys(testResults).length}
              </div>
              <div className="text-gray-600">Total Tests Run</div>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {Object.values(testResults).length > 0 
                  ? Math.round((Object.values(testResults).filter(result => result === true).length / Object.values(testResults).length) * 100)
                  : 0}%
              </div>
              <div className="text-gray-600">Success Rate</div>
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
              After testing the components, download our complete template package 
              and start building with EFTDM methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/templates" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                <DocumentIcon className="h-5 w-5 inline mr-2" />
                Download Templates
              </Link>
              <Link href="/examples" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                <EyeIcon className="h-5 w-5 inline mr-2" />
                View Examples
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
