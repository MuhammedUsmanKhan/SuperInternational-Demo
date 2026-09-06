import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Float, Environment } from '@react-three/drei';
import HeroModel from './HeroModel';
import ModelFallback from './ModelFallback';

interface HeroSceneProps {
  modelPath?: string;
  scale?: number | [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  autoRotate?: boolean;
  interactive?: boolean;
  className?: string;
}

export default function HeroScene({
  modelPath = '/models/hero-model.glb',
  scale = 1.6,
  position = [0, -0.3, 0],
  rotation = [0.15, 0.45, 0],
  autoRotate = true,
  interactive = true,
  className = '',
}: HeroSceneProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!hasMounted) {
    return <ModelFallback label="Initializing Three.js Viewport..." />;
  }

  // Adjust camera distance dynamically based on mobile or desktop
  const cameraZ = isMobile ? 5.8 : 4.4;
  const responsiveScale = isMobile
    ? (typeof scale === 'number' ? scale * 0.85 : [scale[0] * 0.85, scale[1] * 0.85, scale[2] * 0.85] as [number, number, number])
    : scale;

  return (
    <div className={`relative w-full h-full min-h-[380px] lg:min-h-[580px] select-none ${className}`}>
      {/* Subtle radial lighting backdrop */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[450px] h-[450px] rounded-full bg-radial from-[#649DCF]/15 via-[#234D77]/5 to-transparent blur-2xl" />
        <div className="absolute w-[280px] h-[280px] rounded-full bg-[#D09554]/10 blur-3xl translate-y-12" />
      </div>

      <Canvas
        camera={{
          position: [0, 0.4, cameraZ],
          fov: 45,
          near: 0.1,
          far: 100,
        }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          {/* Studio Lighting System with Brand Harmonics */}
          <ambientLight intensity={0.7} color="#F9F6F0" />

          {/* Primary Key Light - Crisp Warm White */}
          <directionalLight
            position={[4, 6, 5]}
            intensity={1.8}
            color="#FFFFFF"
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />

          {/* Fill Light - Deep Brand Navy & Secondary Cyan */}
          <directionalLight
            position={[-5, 2, -3]}
            intensity={0.9}
            color="#649DCF"
          />

          {/* Gold Accent Rim Light - Highlights Edges and Chamfers */}
          <directionalLight
            position={[0, -4, -4]}
            intensity={1.2}
            color="#D09554"
          />

          {/* Top-down soft rim highlight */}
          <pointLight position={[0, 4, 0]} intensity={0.6} color="#E8C493" />

          {/* Neutral studio environment reflections */}
          <Environment preset="city" />

          {/* Model with Float and Shadows */}
          <Float
            speed={isMobile ? 1.0 : 1.6}
            rotationIntensity={isMobile ? 0.1 : 0.25}
            floatIntensity={isMobile ? 0.2 : 0.4}
          >
            <HeroModel
              modelPath={modelPath}
              scale={responsiveScale}
              position={position}
              rotation={rotation}
              autoRotate={autoRotate}
              interactive={interactive}
            />
          </Float>

          {/* Grounding Contact Shadow */}
          <ContactShadows
            position={[0, -1.35, 0]}
            opacity={0.65}
            scale={6.5}
            blur={2.4}
            far={3.5}
            color="#0b1724"
          />

          {/* Damped, restrained Orbit Controls for luxury feel */}
          {interactive && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 3.2}
              maxPolarAngle={Math.PI / 1.8}
              minAzimuthAngle={-Math.PI / 3}
              maxAzimuthAngle={Math.PI / 3}
              rotateSpeed={0.5}
              dampingFactor={0.06}
              autoRotate={false}
            />
          )}
        </Suspense>
      </Canvas>

      {/* Interactive Micro-badge Overlay */}
      <div className="absolute bottom-3 right-3 lg:bottom-4 lg:right-4 z-10 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#173554]/75 border border-[#D09554]/30 backdrop-blur-md text-[11px] text-[#E8C493] tracking-wide">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D09554] animate-pulse" />
        <span>360° Interactive Precision Specimen</span>
      </div>
    </div>
  );
}
