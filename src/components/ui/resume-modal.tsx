"use client"

import { useState, useEffect } from "react"
import { X, FileText, Download, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
  onPreview: () => void
  onDownload: () => void
}

export function ResumeModal({ isOpen, onClose, onPreview, onDownload }: ResumeModalProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Only run client-side
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Handle animation states
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
    } else {
      // Add a small delay before stopping animation
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 300) // Match this with your transition duration
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Don't render anything on server or if not mounted
  if (!isMounted) return null

  // Don't render if not open and not animating
  if (!isOpen && !isAnimating) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0",
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClose()
      }}
    >
      <div
        className={cn(
          "w-full max-w-md transform rounded-xl bg-white shadow-2xl transition-all duration-300 dark:bg-gray-800",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Resume Options</h2>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-5">
          <div className="mb-6 flex items-center rounded-lg bg-gray-50 p-4 text-sm text-gray-600 dark:bg-gray-700/50 dark:text-gray-300">
            <FileText className="mr-3 h-5 w-5 text-gray-400" />
            <p>Choose how you'd like to access the resume document</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation()
                onPreview()
              }}
              className="group flex flex-col items-center justify-center rounded-lg border border-gray-200 p-4 transition-all hover:border-transparent hover:bg-blue-50 hover:shadow-md dark:border-gray-700 dark:hover:bg-blue-900/20"
            >
              <div className="mb-2 rounded-full bg-blue-100 p-2 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                <ExternalLink className="h-5 w-5" />
              </div>
              <span className="font-medium text-gray-900 dark:text-white">Preview</span>
              <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">Open in new tab</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                onDownload()
              }}
              className="group flex flex-col items-center justify-center rounded-lg border border-gray-200 p-4 transition-all hover:border-transparent hover:bg-green-50 hover:shadow-md dark:border-gray-700 dark:hover:bg-green-900/20"
            >
              <div className="mb-2 rounded-full bg-green-100 p-2 text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white dark:bg-green-900/30 dark:text-green-400 dark:group-hover:bg-green-600 dark:group-hover:text-white">
                <Download className="h-5 w-5" />
              </div>
              <span className="font-medium text-gray-900 dark:text-white">Download</span>
              <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">Save to your device</span>
            </button>
          </div>
        </div>

        <div className="flex justify-end border-t border-gray-100 px-6 py-4 dark:border-gray-700">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
