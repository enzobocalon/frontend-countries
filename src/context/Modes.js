import React, { createContext, useState } from 'react'

export const ModeContext = createContext()

const ModeProvider = ({children}) => {
    const [mode, setMode] = useState(true)

    const providerValue = {
        mode, setMode
    }

  return (
    <ModeContext.Provider value={providerValue}>
        {children}
    </ModeContext.Provider>
  )
}

export default ModeProvider