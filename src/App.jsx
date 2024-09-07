import { Canvas } from '@react-three/fiber'
import React from 'react'
import MacContainer from './MacContainer'
import "./style.css"
import { Environment, ScrollControls } from '@react-three/drei'

const App = () => {
  return (
   <div className='w-full h-full'>
    <div className="absolute text-white top-32 left-1/2 -translate-x-1/2 font-[poppins]">
    <h3 className='text-6xl tracking-tighter font-[600]'>Develop By Aamir Almani.</h3>
    </div>
     <Canvas camera={{ fov:12,position:[0,-10,220] }}>
      <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']}/>
      <ScrollControls pages={3}>
      <MacContainer/>
      </ScrollControls>
    </Canvas>
   </div>
  )
}

export default App