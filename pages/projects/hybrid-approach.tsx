import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import {
  RocketLaunchIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon,
  PhotoIcon,
  ClipboardDocumentListIcon,
  ArrowLeftIcon,
  CloudArrowUpIcon,
  CheckCircleIcon,
  PlusIcon
} from '@heroicons/react/24/outline'

export default function HybridApproachProject() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])
  const [hasRequirements, setHasRequirements] = useState(false)

  const availableFiles = [
    { name: 'FSD.md', description: 'Functional Specification Document', category: 'documentation' },
    { name: 'TSD.md', description: 'Technical Specification Document', category: 'documentation' },
    { name: 'RTSD.md', description: 'Refined Technical Specification Document', category: 'documentation' },
    { name: 'UXD/', description: 'UX Design files (images or Figma links)', category: 'design' },
    { name: 'Requirements.txt', description: 'Raw requirements document', category: 'requirements' }
  ]

  const handleFileUpload = (fileName: string) => {
    if (!uploadedFiles.includes(fileName)) {
      setUploadedFiles([...uploadedFiles, fileName])
    }
  }

  const handleRequirementsToggle = () => {
    setHasRequirements(!hasRequirements)
  }

  return (
    <>
      <Head>
        <title>Hybrid Approach - EFTDM Project</title>
        <meta name="description" content="Upload partial documentation and let AI enhance and complete them for optimal project development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100">
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
                <Link href="/projects" className="text-gray-600 hover:text-blue-600 flex items-center">
                  <ArrowLeftIcon className="h-4 w-4 mr-1" />
                  Back to Projects
                </Link>
                <div className="text-sm text-gray-500">
                  Hybrid Approach
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="bg-purple-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <ClipboardDocumentListIcon className="h-12 w-12 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hybrid Approach
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Upload partial documentation and let AI enhance, complete, and optimize them. 
              Perfect for projects that are partially planned or need enhancement.
            </p>
          </div>

          {/* Requirements Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 1: Provide Your Requirements</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <DocumentTextIcon className="h-8 w-8 text-blue-500 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Raw Requirements</h3>
                    <p className="text-sm text-gray-600">Describe your application idea or upload existing requirements</p>
                  </div>
                </div>
                <button
                  onClick={handleRequirementsToggle}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    hasRequirements
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {hasRequirements ? 'Requirements Added' : 'Add Requirements'}
                </button>
              </div>
              
              {hasRequirements && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    ✅ Requirements provided. AI will use these to enhance and complete your documentation.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* File Upload Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 2: Upload Available Documentation</h2>
            <p className="text-gray-600 mb-6">Upload any documentation you already have. AI will enhance and complete what's missing.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {availableFiles.map((file, index) => (
                <div key={index} className={`border-2 border-dashed rounded-lg p-6 ${
                  uploadedFiles.includes(file.name) 
                    ? 'border-purple-300 bg-purple-50' 
                    : 'border-gray-300 bg-gray-50'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {file.category === 'design' ? (
                        <PhotoIcon className="h-8 w-8 text-purple-500 mr-3" />
                      ) : (
                        <DocumentTextIcon className="h-8 w-8 text-blue-500 mr-3" />
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{file.name}</h3>
                        <p className="text-sm text-gray-600">{file.description}</p>
                      </div>
                    </div>
                    {uploadedFiles.includes(file.name) && (
                      <CheckCircleIcon className="h-6 w-6 text-green-500" />
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">
                      {file.category === 'requirements' ? 'Optional' : 'Optional'}
                    </span>
                    <button
                      onClick={() => handleFileUpload(file.name)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        uploadedFiles.includes(file.name)
                          ? 'bg-green-100 text-green-700'
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}
                    >
                      {uploadedFiles.includes(file.name) ? 'Uploaded' : 'Upload'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-purple-50 rounded-lg">
              <p className="text-purple-800 text-sm">
                <strong>AI Enhancement:</strong> AI will analyze your uploaded files and requirements, 
                then generate missing documentation and optimize the project structure accordingly.
              </p>
            </div>
          </div>

          {/* AI Enhancement Process */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Enhancement Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CloudArrowUpIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Analyze</h3>
                <p className="text-gray-600 text-sm">AI analyzes your requirements and uploaded files to understand the project scope.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <PlusIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Enhance</h3>
                <p className="text-gray-600 text-sm">AI enhances existing documentation and fills in missing gaps.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <ClipboardDocumentListIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Complete</h3>
                <p className="text-gray-600 text-sm">AI generates missing documentation components for a complete project.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <ArrowDownTrayIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Optimize</h3>
                <p className="text-gray-600 text-sm">AI creates an optimized project structure ready for development.</p>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Download Enhanced Project</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <ArrowDownTrayIcon className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Project Folder</h3>
                <p className="text-gray-600 mb-4">Get the enhanced project structure with AI-generated improvements</p>
                <button 
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    hasRequirements 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  }`}
                  disabled={!hasRequirements}
                >
                  {hasRequirements ? 'Download Now' : 'Add Requirements First'}
                </button>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <DocumentTextIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Open in Cursor IDE</h3>
                <p className="text-gray-600 mb-4">Extract and open the folder directly in Cursor IDE - enhanced for your requirements</p>
                <button 
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    hasRequirements 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  }`}
                  disabled={!hasRequirements}
                >
                  {hasRequirements ? 'Open in Cursor' : 'Add Requirements First'}
                </button>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Hybrid Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible Input</h3>
                    <p className="text-gray-600 text-sm">Start with any combination of requirements and documentation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">AI Enhancement</h3>
                    <p className="text-gray-600 text-sm">AI improves and completes your existing documentation.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Complete Project</h3>
                    <p className="text-gray-600 text-sm">Get a complete project structure even with partial input.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Optimized for Development</h3>
                    <p className="text-gray-600 text-sm">Project structure is optimized for Cursor AI development workflow.</p>
                  </div>
                </div>
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
