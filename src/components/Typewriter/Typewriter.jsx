
import { useEffect, useRef, useState } from "react"


export default function TypewriterText({ text, className = "", speed = 100 }) {
  const containerRef = useRef(null)
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length && isTyping) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    } else {
      setIsTyping(false)
    }
  }, [currentIndex, text, speed, isTyping])

  return (
    <div ref={containerRef} className={`typewriter-container ${className}`}>
      <span className="typewriter-text">{displayText}</span>
      {isTyping && <span className="typewriter-cursor">|</span>}
    </div>
  )
}
