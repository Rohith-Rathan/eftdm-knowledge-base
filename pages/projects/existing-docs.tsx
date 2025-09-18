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
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function ExistingDocsProject() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])

  const requiredFiles = [
    { name: 'FSD.md', description: 'Functional Specification Document', required: true },
    { name: 'TSD.md', description: 'Technical Specification Document', required: true },
    { name: 'RTSD.md', description: 'Refined Technical Specification Document', required: true },
    { name: 'UXD/', description: 'UX Design files (images or Figma links)', required: false }
  ]

  const handleFileUpload = (fileName: string) => {
    if (!uploadedFiles.includes(fileName)) {
      setUploadedFiles([...uploadedFiles, fileName])
    }
  }

  return (
    <>
      <Head>
        <title>Existing Documentation - EFTDM Project</title>
        <meta name="description" content="Upload your existing FSD, TSD, RTSD, UXD files and get an optimized project structure for Cursor IDE." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
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
                  Existing Documentation
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="bg-green-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <DocumentTextIcon className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Existing Documentation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Upload your existing FSD, TSD, RTSD, and UXD files. AI will analyze and validate them, 
              then generate an optimized project structure ready for Cursor IDE.
            </p>
          </div>

          {/* File Upload Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Your Documentation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requiredFiles.map((file, index) => (
                <div key={index} className={`border-2 border-dashed rounded-lg p-6 ${
                  uploadedFiles.includes(file.name) 
                    ? 'border-green-300 bg-green-50' 
                    : 'border-gray-300 bg-gray-50'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {file.name.includes('UXD') ? (
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
                    <span className={`text-sm font-medium ${
                      file.required ? 'text-red-600' : 'text-gray-500'
                    }`}>
                      {file.required ? 'Required' : 'Optional'}
                    </span>
                    <button
                      onClick={() => handleFileUpload(file.name)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        uploadedFiles.includes(file.name)
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {uploadedFiles.includes(file.name) ? 'Uploaded' : 'Upload'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Supported formats:</strong> .md files for documentation, .jpg/.png/.pdf for UXD images, 
                or Figma links for design files.
              </p>
            </div>
          </div>

          {/* AI Analysis Process */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Analysis Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CloudArrowUpIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Upload & Validate</h3>
                <p className="text-gray-600 text-sm">AI validates your documents and checks for completeness and consistency.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <ClipboardDocumentListIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Analyze & Optimize</h3>
                <p className="text-gray-600 text-sm">AI analyzes your requirements and optimizes the project structure accordingly.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <ArrowDownTrayIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Generate Project</h3>
                <p className="text-gray-600 text-sm">AI creates an optimized project structure ready for Cursor IDE development.</p>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Download Optimized Project</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <ArrowDownTrayIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Project Folder</h3>
                <p className="text-gray-600 mb-4">Get the optimized project structure based on your existing documentation</p>
                <button 
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    uploadedFiles.length >= 3 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  }`}
                  disabled={uploadedFiles.length < 3}
                >
                  {uploadedFiles.length >= 3 ? 'Download Now' : 'Upload Required Files First'}
                </button>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <DocumentTextIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Open in Cursor IDE</h3>
                <p className="text-gray-600 mb-4">Extract and open the folder directly in Cursor IDE - optimized for your requirements</p>
                <button 
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    uploadedFiles.length >= 3 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  }`}
                  disabled={uploadedFiles.length < 3}
                >
                  {uploadedFiles.length >= 3 ? 'Open in Cursor' : 'Upload Required Files First'}
                </button>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Using Existing Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Faster Setup</h3>
                    <p className="text-gray-600 text-sm">Skip the documentation creation phase and jump straight to development.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Optimized Structure</h3>
                    <p className="text-gray-600 text-sm">AI analyzes your specific requirements to create the most efficient project structure.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Validation & Enhancement</h3>
                    <p className="text-gray-600 text-sm">AI validates your documents and suggests improvements for better development.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Ready for Cursor IDE</h3>
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
