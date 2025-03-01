import { ReactNode, useState } from 'react'
import './App.css'

type TextProps = {
  display: string,
  children?: ReactNode,
}
function App() {

  return (
    <>
      <Text display="Hello">
        Hello From Child
      </Text>
    </>
  )
}

function Text({ display,children }:TextProps) {
  return (
    <div>
    <p>{display}</p>
    <p>{children}</p>
    </div>
  );
}

export default App
