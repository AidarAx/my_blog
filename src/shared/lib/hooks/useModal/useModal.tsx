import { useCallback, useEffect, useRef, useState } from 'react'

interface ModalProps {
  isOpen?: boolean
  onClose?: () => void
  animationDelay?: number
}

export const useModal = ({ onClose, isOpen, animationDelay }: ModalProps) => {
  const [isClosing, setIsClosing] = useState<boolean>(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, animationDelay)
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent | React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      close()
    }
  }, [close])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return {
    isClosing,
    close
  }
}
