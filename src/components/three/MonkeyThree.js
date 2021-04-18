import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Monkey from "../core/Monkey"
 
function App() {
    const ref = useRef()
    
    return (
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
            <Suspense fallback={null}>
                <Stage controls={ref} contactShadow shadows adjustCamera environment="city">
                    <Monkey />
                </Stage>
            </Suspense>
            <OrbitControls ref={ref} autoRotate autoRotateSpeed={10}/>
        </Canvas>
    );
}

export default App;
