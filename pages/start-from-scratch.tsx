import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { 
  RocketLaunchIcon, 
  FolderIcon,
  ArrowDownTrayIcon,
  PlayIcon,
  DocumentTextIcon, 
  CodeBracketIcon,
  CursorArrowRaysIcon
} from '@heroicons/react/24/outline'

export default function StartFromScratch() {
  const [activeStep, setActiveStep] = useState<number>(1)
  const [showProjectStructure, setShowProjectStructure] = useState<boolean>(false)

  const steps = [
    {
      id: 1,
      title: "Provide Your Requirements",
      description: "Just tell us what you want to build",
      icon: DocumentTextIcon,
      content: "Describe your application idea in simple terms. For example: 'I need a timesheet app where employees can upload files, fill forms, and get manager approval.'"
    },
    {
      id: 2,
      title: "AI Generates Complete Project",
      description: "We create everything for you",
      icon: CodeBracketIcon,
      content: "AI analyzes your requirements and creates a complete project structure with frontend, backend, database, documentation, and all configuration files."
    },
    {
      id: 3,
      title: "Download & Open in Cursor IDE",
      description: "Ready to use immediately",
      icon: CursorArrowRaysIcon,
      content: "Download the complete project folder and open it directly in Cursor IDE. Everything is ready to run - no setup required!"
    }
  ]

  const projectStructure = {
    name: "your-project",
    folders: [
      {
        name: "frontend",
        type: "folder",
        children: [
          { name: "src", type: "folder", children: [
            { name: "components", type: "folder" },
            { name: "views", type: "folder" },
            { name: "assets", type: "folder" }
          ]},
          { name: "package.json", type: "file" },
          { name: "vite.config.js", type: "file" }
        ]
      },
      {
        name: "backend",
        type: "folder",
        children: [
          { name: "src", type: "folder", children: [
            { name: "routes", type: "folder" },
            { name: "models", type: "folder" },
            { name: "middleware", type: "folder" }
          ]},
          { name: "package.json", type: "file" },
          { name: "server.ts", type: "file" }
        ]
      },
      {
        name: "database",
        type: "folder",
        children: [
          { name: "migrations", type: "folder" },
          { name: "seeds", type: "folder" },
          { name: "schema.sql", type: "file" }
        ]
      },
      {
        name: "docs",
        type: "folder",
        children: [
          { name: "FSD.md", type: "file" },
          { name: "TSD.md", type: "file" },
          { name: "RTSD.md", type: "file" },
          { name: "README.md", type: "file" }
        ]
      },
      {
        name: "tests",
        type: "folder",
        children: [
          { name: "unit", type: "folder" },
          { name: "integration", type: "folder" },
          { name: "e2e", type: "folder" }
        ]
      }
    ]
  }

  const renderFolderStructure = (items: any[], level = 0) => {
    return items.map((item, index) => (
      <div key={index} className={`ml-${level * 4} flex items-center py-1`}>
        {item.type === 'folder' ? (
          <FolderIcon className="h-4 w-4 text-blue-500 mr-2" />
        ) : (
          <DocumentTextIcon className="h-4 w-4 text-gray-500 mr-2" />
        )}
        <span className="text-sm text-gray-700">{item.name}</span>
        {item.children && (
          <div className="ml-4">
            {renderFolderStructure(item.children, level + 1)}
          </div>
        )}
      </div>
    ))
  }

  return (
    <>
      <Head>
        <title>Start from Scratch - EFTDM</title>
        <meta name="description" content="Start from scratch with requirements and get a complete, ready-to-use project structure for Cursor IDE." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
            <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <RocketLaunchIcon className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-2xl font-bold text-gray-900">EFTDM</span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/" className="text-gray-600 hover:text-blue-600">← Back to Home</Link>
                <div className="text-sm text-gray-500">
                  Start from Scratch
          </div>
        </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Start from Scratch with Requirements
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Just provide your requirements and get a complete, ready-to-use project structure 
              that opens directly in Cursor IDE. No setup, no configuration - just start building!
            </p>
          </div>

          {/* Step-by-Step Process */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={step.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <step.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
        </div>
      </div>
                <p className="text-gray-700">{step.content}</p>
              </div>
            ))}
          </div>

          {/* Project Structure Preview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Project Structure Preview</h2>
              <button
                onClick={() => setShowProjectStructure(!showProjectStructure)}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <FolderIcon className="h-5 w-5 mr-2" />
                {showProjectStructure ? 'Hide' : 'Show'} Structure
              </button>
      </div>

            {showProjectStructure && (
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FolderIcon className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="font-semibold text-gray-900">{projectStructure.name}/</span>
                </div>
                {renderFolderStructure(projectStructure.folders)}
              </div>
            )}
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>What you get:</strong> Complete project with frontend (Vue.js), backend (Node.js), 
                database (PostgreSQL), documentation (FSD, TSD, RTSD), tests, and all configuration files.
              </p>
            </div>
          </div>

          {/* Download Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Download Complete Project</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <ArrowDownTrayIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Project Folder</h3>
                <p className="text-gray-600 mb-4">Get the complete project structure with all files and documentation</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Download Now
                </button>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <CursorArrowRaysIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Open in Cursor IDE</h3>
                <p className="text-gray-600 mb-4">Extract and open the folder directly in Cursor IDE - everything is ready to run</p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Open in Cursor
                </button>
          </div>
        </div>
      </div>

          {/* How It Works - Roleplay Style */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works - Step by Step</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                      </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">You: "I need a timesheet app"</h3>
                  <p className="text-gray-600">You describe what you want to build in simple terms. No technical knowledge required.</p>
                      </div>
                    </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI: "I'll create everything for you"</h3>
                  <p className="text-gray-600">AI analyzes your requirements and generates a complete project structure with all necessary files.</p>
                </div>
            </div>
            
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">You: "Download and open in Cursor IDE"</h3>
                  <p className="text-gray-600">You download the project folder and open it in Cursor IDE. Everything is ready to run immediately.</p>
                  </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI: "Start building with my guidance"</h3>
                  <p className="text-gray-600">AI provides step-by-step guidance through Cursor IDE to help you build your application.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Sections */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. I will explain later</h2>
              <p className="text-gray-600 mb-4">Coming soon...</p>
              <div className="bg-gray-100 rounded-lg p-4">
                <span className="text-gray-500 text-sm">Feature in development</span>
        </div>
      </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. I will explain later</h2>
              <p className="text-gray-600 mb-4">Coming soon...</p>
              <div className="bg-gray-100 rounded-lg p-4">
                <span className="text-gray-500 text-sm">Feature in development</span>
              </div>
          </div>
        </div>
      </div>

      {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <RocketLaunchIcon className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-lg font-bold">EFTDM</span>
              </div>
              <p className="text-gray-400">
              Enhanced Fast-Track Development Methodology with AI Integration
            </p>
          </div>
        </footer>
        </div>
    </>
  )
}