import { useRef } from "react"
import useCursor from "../hooks/useCursor"

interface Props {
    isHover: boolean
}

function Cursor({isHover}: Props) {

    const cursorRef = useRef<HTMLDivElement>(null)
    const tCursorRef = useRef<HTMLDivElement>(null)
    useCursor(cursorRef, tCursorRef, isHover)

    return (
        <>
            <div
                ref={cursorRef}
                style={{
                    top: '-12px',
                    left: '-12px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '10000px',
                    background: 'rgba(0,0,0,0)',
                    position: 'fixed',
                    pointerEvents: 'none'
                }}
            />

            <div
                ref={tCursorRef}
                style={{
                    top: '-12px',
                    left: '-12px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '10000px',
                    background: 'rgba(0,0,0,0.25)',
                    position: 'fixed',
                    pointerEvents: 'none'
                }}
            />
        </>
    )
}

export default Cursor