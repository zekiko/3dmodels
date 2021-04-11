import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import AirbusA310 from "../core/AirbusA310"

function App() {
    const ref = useRef()
    return (
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
            <Suspense fallback={null}>
                <Stage controls={ref} contactShadow shadows adjustCamera environment="city">
                    <AirbusA310 />
                </Stage>
            </Suspense>
            <OrbitControls ref={ref} autoRotate />
        </Canvas>
    );
}

export default App;
