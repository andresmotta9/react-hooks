import { useEffect, useState } from "react"


export const Message = () => {

  const [coords, setCoords] = useState({x: 0, y: 0})

  useEffect(() => {
    const onMouseMoove = ({x , y}) => {
      // const coords = {x, y}
      setCoords({x, y})
    }

    window.addEventListener('mousemove', onMouseMoove)
  
    return () => {
      window.removeEventListener('mousemove', onMouseMoove)
    }
  }, [])
  
  return (
    <>
      <h3>The user already exists.</h3>
      {JSON.stringify(coords)}
    </>
  )
}
