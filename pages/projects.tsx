import Head from 'next/head'
import Link from 'next/link'
import {
  RocketLaunchIcon,
  DocumentTextIcon,
  FolderIcon,
  ArrowRightIcon,
  CodeBracketIcon,
  ClipboardDocumentListIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'

export default function Projects() {
  const projects = [
    {
      id: 'from-scratch',
      title: 'Start from Scratch',
      description: 'I have raw requirements and want to generate everything from scratch',
      icon: RocketLaunchIcon,
      color: 'blue',
      features: [
        'Provide raw requirements in plain language',
        'AI generates FSD, TSD, RTSD automatically',
        'Creates complete project structure',
        'Ready to open in Cursor IDE'
      ],
      requirements: 'Just your application idea and requirements',
      timeToStart: '5 minutes',
      link: '/projects/from-scratch'
    },
    {
      id: 'existing-docs',
      title: 'Existing Documentation',
      description: 'I already have FSD, TSD, RTSD, UXD files and want to proceed with development',
      icon: DocumentTextIcon,
      color: 'green',
      features: [
        'Upload your existing FSD, TSD, RTSD files',
        'Upload UXD images or Figma links',
        'AI analyzes and validates documents',
        'Generates optimized project structure'
      ],
      requirements: 'FSD.md, TSD.md, RTSD.md, UXD files',
      timeToStart: '10 minutes',
      link: '/projects/existing-docs'
    },
    {
      id: 'hybrid-approach',
      title: 'Hybrid Approach',
      description: 'I have some documents but want AI to enhance and complete them',
      icon: FolderIcon,
      color: 'purple',
      features: [
        'Upload partial documentation',
        'AI fills gaps and enhances existing docs',
        'Generates missing components',
        'Creates comprehensive project structure'
      ],
      requirements: 'Any combination of FSD, TSD, RTSD, UXD',
      timeToStart: '15 minutes',
      link: '/projects/hybrid-approach'
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          icon: 'text-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700',
          text: 'text-blue-800'
        }
      case 'green':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          icon: 'text-green-600',
          button: 'bg-green-600 hover:bg-green-700',
          text: 'text-green-800'
        }
      case 'purple':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          icon: 'text-purple-600',
          button: 'bg-purple-600 hover:bg-purple-700',
          text: 'text-purple-800'
        }
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          icon: 'text-gray-600',
          button: 'bg-gray-600 hover:bg-gray-700',
          text: 'text-gray-800'
        }
    }
  }

  return (
    <>
      <Head>
        <title>EFTDM Projects - Choose Your Development Path</title>
        <meta name="description" content="Choose from three EFTDM project approaches: Start from Scratch, Existing Documentation, or Hybrid Approach." />
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
                  Projects
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
              Choose Your EFTDM Project Path
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Select the approach that best fits your current situation. Each path leads to a complete, 
              production-ready application using the EFTDM methodology.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => {
              const colors = getColorClasses(project.color)
              return (
                <div key={project.id} className={`${colors.bg} ${colors.border} border-2 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300`}>
                  <div className="flex items-center mb-6">
                    <div className={`${colors.bg} ${colors.border} border rounded-full p-4 mr-4`}>
                      <project.icon className={`h-8 w-8 ${colors.icon}`} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${colors.text} mb-2`}>{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className={`font-semibold ${colors.text} mb-3`}>What you get:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <ArrowRightIcon className="h-4 w-4 text-green-500 mr-2 mt-1" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Requirements:</span>
                      <span className="text-sm text-gray-500">{project.requirements}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Time to start:</span>
                      <span className="text-sm text-gray-500">{project.timeToStart}</span>
                    </div>
                  </div>

                  <Link href={project.link} className={`${colors.button} text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center`}>
                    <span>Start This Project</span>
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Project Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-3 px-4 font-semibold text-blue-600">From Scratch</th>
                    <th className="text-center py-3 px-4 font-semibold text-green-600">Existing Docs</th>
                    <th className="text-center py-3 px-4 font-semibold text-purple-600">Hybrid</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Document Generation</td>
                    <td className="text-center py-3 px-4">✅ Full AI Generation</td>
                    <td className="text-center py-3 px-4">❌ Uses Existing</td>
                    <td className="text-center py-3 px-4">🔄 AI Enhancement</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Project Structure</td>
                    <td className="text-center py-3 px-4">✅ Complete</td>
                    <td className="text-center py-3 px-4">✅ Optimized</td>
                    <td className="text-center py-3 px-4">✅ Enhanced</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Cursor IDE Ready</td>
                    <td className="text-center py-3 px-4">✅ Yes</td>
                    <td className="text-center py-3 px-4">✅ Yes</td>
                    <td className="text-center py-3 px-4">✅ Yes</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Setup Time</td>
                    <td className="text-center py-3 px-4">⚡ Fastest</td>
                    <td className="text-center py-3 px-4">⚡ Fast</td>
                    <td className="text-center py-3 px-4">⚡ Medium</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Best For</td>
                    <td className="text-center py-3 px-4">New Projects</td>
                    <td className="text-center py-3 px-4">Existing Projects</td>
                    <td className="text-center py-3 px-4">Partial Projects</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Start Guide */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Start Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Path</h3>
                <p className="text-gray-600 text-sm">Select the project approach that matches your current situation and requirements.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Project</h3>
                <p className="text-gray-600 text-sm">Get the complete EFTDM project template with all necessary files and structure.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Open in Cursor</h3>
                <p className="text-gray-600 text-sm">Extract the project and open it in Cursor IDE to start building your application.</p>
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
