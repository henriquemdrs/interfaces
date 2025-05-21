import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EscopoReduz from './componentes/EscopoReduz'
import Escopo from './componentes/Escopo'
import Contador from './componentes/contador'
import Props from './componentes/Props'

function App() {
  let valor = "adrei borboleta"
  return (
    <>
      <Props nome={valor} newname={"testeetdstts"}/>
    </>
  )
}

export default App
