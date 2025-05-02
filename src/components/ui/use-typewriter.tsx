"use client"

import { useState, useEffect, useCallback } from "react"

export function useTypewriter({
  words = [""],
  typeSpeed = 70,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  loop = true,
}) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const typeText = useCallback(() => {
    const currentWord = words[currentIndex]

    if (isDeleting) {
      // Deleting text
      setDisplayedText(currentWord.substring(0, displayedText.length - 1))

      // When deletion is complete
      if (displayedText.length === 1) {
        setIsDeleting(false)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
      }
    } else {
      // Typing text
      setDisplayedText(currentWord.substring(0, displayedText.length + 1))

      // When typing is complete
      if (displayedText.length === currentWord.length) {
        // Only set deleting to true if we're looping or not on the last word
        if (loop || currentIndex < words.length - 1) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords)
        }
      }
    }
  }, [currentIndex, delayBetweenWords, displayedText, isDeleting, loop, words])

  useEffect(() => {
    const timer = setTimeout(typeText, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, typeText, typeSpeed, deleteSpeed])

  return { text: displayedText, cursor: true }
}

export default function TypewriterComponent({
  words = ["Entry-Level Web Developer", "Systems Developer", "Aspiring Software Engineer"],
  typeSpeed = 70,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  loop = true,
}) {
  const { text } = useTypewriter({
    words,
    typeSpeed,
    deleteSpeed,
    delayBetweenWords,
    loop,
  })

  return (
    <>
      {text}
      <span className="animate-pulse">|</span>
    </>
  )
}
