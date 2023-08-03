import React, { useState } from 'react'

const useInput = (initialValue : string = "") => {
  const [value, setValue] = useState(initialValue)

  const handleInput = (event : React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return [value,handleInput] as const
}

export default useInput