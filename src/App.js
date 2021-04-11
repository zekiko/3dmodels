import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Line, QuadraticBezierLine } from '@react-three/drei'
import Monkey from "./components/Monkey"



function App() {
  return (
    <Canvas camera={{
      position: [5, 5, 5]
    }}
      pixelRatio={window.devicePixelRatio}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />

      <OrbitControls />
      <Suspense fallback={null}>
        <Monkey />
      </Suspense>
    </Canvas>
  );
}

export default App;
