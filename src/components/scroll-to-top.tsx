'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { Button } from './ui/button'

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  function toggleVisibility() {
    window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false)
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    isVisible && (
      <Button
        onClick={() => scrollToTop()}
        size="icon"
        className="fixed bottom-5 right-5 z-50"
      >
        <FaArrowUp />
      </Button>
    )
  )
}
