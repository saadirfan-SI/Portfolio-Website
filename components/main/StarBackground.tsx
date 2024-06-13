"use client";

// Importing required libraries and components
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

// Functional component for rendering star background
const StarBackground = (props: any) => {
  // Ref for accessing the Points component
  const ref: any = useRef();
  // State for storing sphere data
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // Function for animating the star background
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10; // Rotation around x-axis
    ref.current.rotation.y -= delta / 15; // Rotation around y-axis
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}> {/* Group for rotation */}
      {/* Points component for rendering stars */}
      <Points
        ref={ref} // Assigning ref to access Points component
        positions={sphere} // Positions of stars
        stride={3} // Stride for positions
        frustumCulled // Optimization for performance
        {...props}
      >
        {/* Material for rendering stars */}
        <PointMaterial
          transparent // Transparent material
          color="$fff" // Color of stars
          size={0.002} // Size of stars
          sizeAttenuation={true} // Size attenuation
          dethWrite={false} // Depth write
        />
      </Points>
    </group>
  );
};

// Functional component for rendering stars canvas
const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    {/* Canvas for rendering 3D scene */}
    <Canvas camera={{ position: [0, 0, 1] }}>
      {/* Suspense for handling loading state */}
      <Suspense fallback={null}>
        {/* Rendering star background */}
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas; // Exporting StarsCanvas component
