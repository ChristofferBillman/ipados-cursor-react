import MenuIcon from "../assets/svgs/MenuIcon"

interface Props {
    isHover: boolean
    setIsHover: React.Dispatch<React.SetStateAction<boolean>>
}

function RoundButton({isHover, setIsHover}: Props) {
  return (
        <>
            <MenuIcon size={64}/>
            <div
                style={{
                    position: 'absolute',
                    transform: isHover ? 'scale(0)' : 'scale(1)',
                    background: 'rgba(0,0,0,0.5)',
                    width: '64px',
                    height: '64px'
                }}
            />
        </>
  )
}

export default RoundButton