import { NextApiRequest, NextApiResponse } from 'next'
import archiver from 'archiver'
import fs from 'fs'
import path from 'path'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Set headers for file download
    res.setHeader('Content-Type', 'application/zip')
    res.setHeader('Content-Disposition', 'attachment; filename="eftdm-project-template.zip"')

    // Create archive
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression
    })

    // Handle archive errors
    archive.on('error', (err) => {
      console.error('Archive error:', err)
      res.status(500).json({ error: 'Failed to create archive' })
    })

    // Pipe archive to response
    archive.pipe(res)

    // Add all template files to archive
    const templatePath = path.join(process.cwd(), 'public', 'templates', 'eftdm-project-template')
    
    // Add root files
    const rootFiles = [
      'FSD.md',
      'TSD.md', 
      'RTSD.md',
      'Mermaid_Diagrams.md',
      'README.md',
      '.gitignore',
      '.env.example'
    ]

    for (const file of rootFiles) {
      const filePath = path.join(templatePath, file)
      if (fs.existsSync(filePath)) {
        archive.file(filePath, { name: file })
      }
    }

    // Add directories
    const directories = ['frontend', 'backend', 'database', 'docs']
    
    for (const dir of directories) {
      const dirPath = path.join(templatePath, dir)
      if (fs.existsSync(dirPath)) {
        archive.directory(dirPath, dir)
      }
    }

    // Finalize archive
    await archive.finalize()

  } catch (error) {
    console.error('Download error:', error)
    res.status(500).json({ error: 'Failed to generate download' })
  }
}
