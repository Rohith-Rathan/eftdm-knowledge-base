import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { 
  BookOpenIcon, 
  RocketLaunchIcon, 
  DocumentTextIcon, 
  CodeBracketIcon,
  ArrowDownTrayIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  StarIcon,
  FolderIcon,
  DocumentIcon
} from '@heroicons/react/24/outline'

export default function Templates() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [downloading, setDownloading] = useState<string | null>(null)

  const templateCategories = [
    {
      id: 'core-templates',
      title: 'Core EFTDM Templates',
      description: 'Essential templates for the EFTDM methodology',
      icon: DocumentTextIcon,
      templates: [
        {
          name: 'Enhanced FSD Template',
          description: 'Comprehensive Functional Specification Document with Mermaid diagrams',
          size: '45KB',
          files: ['FSD_Template.md', 'Mermaid_Examples.md', 'Validation_Checklist.md'],
          features: ['Mermaid Integration', 'UXD Analysis', 'Component Mapping', 'Quality Gates']
        },
        {
          name: 'Technical Specification Template',
          description: 'Complete TSD template with architecture and implementation details',
          size: '38KB',
          files: ['TSD_Template.md', 'Architecture_Guide.md', 'API_Specifications.md'],
          features: ['Architecture Design', 'API Documentation', 'Database Schema', 'Security Specs']
        },
        {
          name: 'Refined TSD Template',
          description: 'Post-UXD refinement template with design integration',
          size: '42KB',
          files: ['RTSD_Template.md', 'UXD_Integration.md', 'Design_System.md'],
          features: ['UXD Integration', 'Design System', 'Component Refinement', 'Traceability Matrix']
        }
      ]
    },
    {
      id: 'phase-templates',
      title: 'Phase-Specific Templates',
      description: 'Templates for each EFTDM development phase',
      icon: RocketLaunchIcon,
      templates: [
        {
          name: 'Phase 1: FSD Analysis',
          description: 'Templates for functional specification analysis and UXD integration',
          size: '28KB',
          files: ['FSD_Analysis.md', 'UXD_Analysis_Framework.md', 'Component_Mapping.md'],
          features: ['UXD Image Analysis', 'Figma MCP Integration', 'Component Inventory', 'Quality Gates']
        },
        {
          name: 'Phase 2: Implementation Planning',
          description: 'Architecture design and project planning templates',
          size: '32KB',
          files: ['Architecture_Design.md', 'Timeline_Planning.md', 'Resource_Allocation.md'],
          features: ['Technology Stack', 'Architecture Patterns', 'Timeline Estimation', 'Risk Assessment']
        },
        {
          name: 'Phase 3: Project Setup',
          description: 'Development environment and project structure templates',
          size: '25KB',
          files: ['Project_Setup.md', 'CI_CD_Configuration.md', 'Environment_Setup.md'],
          features: ['Repository Structure', 'CI/CD Pipeline', 'Development Tools', 'Quality Tools']
        },
        {
          name: 'Phase 4: Backend Implementation',
          description: 'Server-side development templates and patterns',
          size: '35KB',
          files: ['Backend_Architecture.md', 'API_Design.md', 'Database_Schema.md'],
          features: ['API Development', 'Database Design', 'Authentication', 'Security Implementation']
        },
        {
          name: 'Phase 5: Frontend Implementation',
          description: 'UI/UX development templates with real-time validation',
          size: '40KB',
          files: ['Frontend_Architecture.md', 'Component_Library.md', 'UXD_Implementation.md'],
          features: ['Component Development', 'UXD Compliance', 'Responsive Design', 'State Management']
        },
        {
          name: 'Phase 6: Integration & Testing',
          description: 'Testing strategies and integration templates',
          size: '30KB',
          files: ['Testing_Strategy.md', 'Integration_Guide.md', 'Quality_Assurance.md'],
          features: ['E2E Testing', 'Integration Testing', 'Performance Testing', 'Security Testing']
        },
        {
          name: 'Phase 7: Deployment & Optimization',
          description: 'Production deployment and optimization templates',
          size: '22KB',
          files: ['Deployment_Guide.md', 'Performance_Optimization.md', 'Monitoring_Setup.md'],
          features: ['Production Deployment', 'Performance Tuning', 'Monitoring', 'Documentation']
        }
      ]
    },
    {
      id: 'automation-scripts',
      title: 'Automation Scripts',
      description: 'Automated workflows and generation scripts',
      icon: CodeBracketIcon,
      templates: [
        {
          name: 'Mermaid Diagram Generator',
          description: 'Automated Mermaid diagram generation from requirements',
          size: '15KB',
          files: ['generate_mermaid.py', 'diagram_templates/', 'validation_scripts/'],
          features: ['User Journey Diagrams', 'System Flow Charts', 'Decision Trees', 'Gantt Charts']
        },
        {
          name: 'UXD Analysis Automation',
          description: 'Automated UXD image analysis and design extraction',
          size: '18KB',
          files: ['analyze_uxd.py', 'image_processing/', 'design_extraction/'],
          features: ['Layout Analysis', 'Component Detection', 'Design System Extraction', 'Compliance Validation']
        },
        {
          name: 'Figma MCP Integration',
          description: 'Figma design analysis and specification extraction',
          size: '20KB',
          files: ['figma_mcp.py', 'design_parser/', 'spec_generator/'],
          features: ['Dev Mode Analysis', 'Design System Export', 'Component Mapping', 'Specification Generation']
        },
        {
          name: 'Project Generator',
          description: 'Complete project structure generation with all templates',
          size: '25KB',
          files: ['project_generator.py', 'template_engine/', 'structure_builder/'],
          features: ['Project Scaffolding', 'Template Integration', 'File Generation', 'Structure Validation']
        }
      ]
    },
    {
      id: 'examples',
      title: 'Real-World Examples',
      description: 'Complete project examples using EFTDM methodology',
      icon: StarIcon,
      templates: [
        {
          name: 'Employee Time Tracking App',
          description: 'Complete timesheet application built with EFTDM',
          size: '2.1MB',
          files: ['Complete_Project/', 'FSD_Example.md', 'Implementation_Guide.md'],
          features: ['Full Stack Application', 'AI/OCR Integration', 'Real-time Validation', 'Production Ready']
        },
        {
          name: 'E-commerce Platform',
          description: 'Modern e-commerce solution with EFTDM methodology',
          size: '3.2MB',
          files: ['Ecommerce_Project/', 'Architecture_Diagrams/', 'Deployment_Guide.md'],
          features: ['Microservices Architecture', 'Payment Integration', 'Inventory Management', 'Scalable Design']
        },
        {
          name: 'SaaS Dashboard',
          description: 'Enterprise SaaS dashboard with analytics and reporting',
          size: '2.8MB',
          files: ['SaaS_Dashboard/', 'Analytics_Module/', 'Reporting_System/'],
          features: ['Multi-tenant Architecture', 'Real-time Analytics', 'Custom Dashboards', 'API Integration']
        }
      ]
    }
  ]

  const handleDownload = async (templateName: string, category: string) => {
    setDownloading(templateName)
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real implementation, this would trigger actual file download
    console.log(`Downloading ${templateName} from ${category}`)
    
    setDownloading(null)
    
    // Show success message
    alert(`${templateName} downloaded successfully!`)
  }

  const handleDownloadAll = async () => {
    setDownloading('complete-package')
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    setDownloading(null)
    alert('Complete EFTDM Package downloaded successfully!')
  }

  return (
    <>
      <Head>
        <title>EFTDM Templates - Download Complete Development Templates</title>
        <meta name="description" content="Download comprehensive EFTDM templates, automation scripts, and real-world examples for fast-track development." />
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
                <Link href="/templates" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
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
              EFTDM Templates
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Download comprehensive templates, automation scripts, and real-world examples 
              to accelerate your development process with EFTDM methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleDownloadAll}
                disabled={downloading === 'complete-package'}
                className="btn-primary text-lg px-8 py-3 disabled:opacity-50"
              >
                {downloading === 'complete-package' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    <ArrowDownTrayIcon className="h-5 w-5 inline mr-2" />
                    Download Complete Package
                  </>
                )}
              </button>
              <Link href="/test" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                <PlayIcon className="h-5 w-5 inline mr-2" />
                Try Interactive Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Template Categories */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Template Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive collection of templates, scripts, and examples
            </p>
          </div>

          <div className="space-y-8">
            {templateCategories.map((category, index) => (
              <div key={category.id} className="card">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                >
                  <div className="flex items-center">
                    <category.icon className="h-8 w-8 text-primary-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  {expandedCategory === category.id ? (
                    <ChevronDownIcon className="h-6 w-6 text-gray-400" />
                  ) : (
                    <ChevronRightIcon className="h-6 w-6 text-gray-400" />
                  )}
                </div>

                {expandedCategory === category.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.templates.map((template, templateIndex) => (
                        <div key={templateIndex} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center">
                              <DocumentIcon className="h-5 w-5 text-gray-400 mr-2" />
                              <h4 className="font-semibold text-gray-900">{template.name}</h4>
                            </div>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {template.size}
                            </span>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                          
                          <div className="mb-4">
                            <h5 className="text-xs font-semibold text-gray-700 mb-2">Files Included:</h5>
                            <div className="space-y-1">
                              {template.files.map((file, fileIndex) => (
                                <div key={fileIndex} className="flex items-center text-xs text-gray-600">
                                  <FolderIcon className="h-3 w-3 mr-1" />
                                  {file}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <h5 className="text-xs font-semibold text-gray-700 mb-2">Key Features:</h5>
                            <div className="flex flex-wrap gap-1">
                              {template.features.map((feature, featureIndex) => (
                                <span key={featureIndex} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <button
                            onClick={() => handleDownload(template.name, category.id)}
                            disabled={downloading === template.name}
                            className="w-full btn-primary text-sm py-2 disabled:opacity-50"
                          >
                            {downloading === template.name ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Downloading...
                              </>
                            ) : (
                              <>
                                <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                                Download
                              </>
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Start Guide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with EFTDM in just a few steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Templates</h3>
              <p className="text-gray-600 text-sm">Get the complete EFTDM template package</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customize for Your Project</h3>
              <p className="text-gray-600 text-sm">Adapt templates to your specific requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Run Automation Scripts</h3>
              <p className="text-gray-600 text-sm">Generate project structure and documentation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Development</h3>
              <p className="text-gray-600 text-sm">Begin building with EFTDM methodology</p>
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
              Download our complete EFTDM package and start building production-ready 
              applications with our proven methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleDownloadAll}
                disabled={downloading === 'complete-package'}
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg disabled:opacity-50"
              >
                {downloading === 'complete-package' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-600 mr-2"></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    <ArrowDownTrayIcon className="h-5 w-5 inline mr-2" />
                    Download Complete Package
                  </>
                )}
              </button>
              <Link href="/examples" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                <StarIcon className="h-5 w-5 inline mr-2" />
                View Examples
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
