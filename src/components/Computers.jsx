import React, { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion-3d"
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Computers = ({ isMobile, setIsHovered }) => {
  const computer = useGLTF("/portfolio/desktop_pc/scene.gltf");

  return (
    <motion.mesh
          whileHover={{ scale: 1.1 }}
          onPointerOver={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
        >
          <hemisphereLight intensity={3} groundColor='black' />
          <spotLight
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={5}
            castShadow
            shadow-mapSize={1024}
          />
          <pointLight position={[10, 10, 10]} intensity={4} />
          
          <primitive
            object={computer.scene}
            scale={isMobile ? 0.5 : 0.75}
            position={isMobile ? [0, -3, -1] : [0, -3, -1.5]}
            rotation={[-0.01, -0.2, -0.1]}
          />
        </motion.mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={isHovered ? 0.2 : 3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} setIsHovered={setIsHovered} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
