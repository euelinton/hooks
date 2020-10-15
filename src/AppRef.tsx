import React, { useRef } from 'react'
  
const AppRef: React.FC = () => {

  const inputRef = useRef<HTMLInputElement>(null)
  
  const onButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }
  
  return (
    <form action="">
      <input type="text" ref={inputRef} />
      <button onClick={onButtonClick}>Focus no Input</button>
    </form>
  )
}
  
export default AppRef
  