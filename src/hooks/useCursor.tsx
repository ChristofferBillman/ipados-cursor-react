import { useEffect, useRef, useState } from "react";

export default function useCursor(cursorRef: React.RefObject<HTMLElement>, tCursorRef: React.RefObject<HTMLElement>, isHover) {
    const [mousePos, setMousePos] = useState({x: 0, y: 0, tx: 0, ty: 0})
    
    const animationFrame = useRef<number | null>(null)

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e
          setMousePos(prevState => ({
            ...prevState,
            x: clientX,
            y: clientY,
          }))
        }
    
        const moveCursor = () => {
          setMousePos(prevState => {
            const diffX = prevState.x - prevState.tx
            const diffY = prevState.y - prevState.ty

            return {
                ...prevState,
                tx: prevState.tx + diffX / 5,
                ty: prevState.ty + diffY / 5,
            }
          })

          if(!cursorRef.current) return
    
          cursorRef.current.style.transform = `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
          if(!tCursorRef.current) return

          tCursorRef.current.style.transform = `translate3d(${mousePos.tx}px, ${mousePos.ty}px, 0)`
          if(isHover) {
            tCursorRef.current.style.transform = 'scale(0)'
            return
          }
          
          animationFrame.current = requestAnimationFrame(moveCursor)
        }
    
        document.addEventListener('mousemove', onMouseMove)
        animationFrame.current = requestAnimationFrame(moveCursor)
    
        return () => {
          document.removeEventListener('mousemove', onMouseMove)
          cancelAnimationFrame(animationFrame.current!)
        }
      }, [mousePos, cursorRef])
}