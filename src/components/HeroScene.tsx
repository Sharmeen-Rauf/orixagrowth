"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function Blob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={1.8}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={8}
          thickness={0.8}
          chromaticAberration={0.25}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.5}
          temporalDistortion={0.1}
          iridescence={0.4}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          clearcoat={0.9}
          clearcoatRoughness={0.1}
          color="#8e44ad"
          attenuationColor="#0007bf"
          attenuationDistance={0.5}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <directionalLight position={[-5, -5, -5]} intensity={0.4} />
      <pointLight position={[0, 5, 5]} intensity={0.8} color="#0007bf" />
      <Blob />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
