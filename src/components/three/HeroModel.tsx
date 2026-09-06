import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export interface HeroModelProps {
  modelPath: string;
  scale?: number | [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  autoRotate?: boolean;
  interactive?: boolean;
}

// Procedural high-end luxury cosmetic packaging jar component (rendered when custom GLB is loading or unavailable)
function ProceduralLuxuryPackaging({
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  autoRotate = true,
}: {
  scale?: number | [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  autoRotate?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * 0.35;
      // Gentle breathing float
      groupRef.current.position.y = (Array.isArray(position) ? position[1] : 0) + Math.sin(state.clock.elapsedTime * 1.2) * 0.08;
    }
  });

  const parsedScale: [number, number, number] = Array.isArray(scale)
    ? scale
    : [scale, scale, scale];

  return (
    <group
      ref={groupRef}
      scale={parsedScale}
      position={position}
      rotation={rotation}
      dispose={null}
    >
      {/* 1. Outer Acrylic Clear/Frosted Double Wall Jar */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[1.35, 1.3, 1.4, 48, 1, false]} />
        <meshPhysicalMaterial
          color="#234D77"
          roughness={0.08}
          metalness={0.12}
          transmission={0.7}
          thickness={1.2}
          ior={1.49}
          reflectivity={0.9}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          attenuationColor="#649DCF"
          attenuationDistance={1.4}
        />
      </mesh>

      {/* 2. Inner Opaque Cream/Skincare Core Formula */}
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[1.05, 1.0, 1.15, 36]} />
        <meshStandardMaterial
          color="#F9F6F0"
          roughness={0.25}
          metalness={0.05}
        />
      </mesh>

      {/* 3. Electroplated Gold Accent Collar Ring */}
      <mesh castShadow position={[0, 0.72, 0]}>
        <cylinderGeometry args={[1.32, 1.32, 0.12, 48]} />
        <meshStandardMaterial
          color="#D09554"
          roughness={0.18}
          metalness={0.92}
        />
      </mesh>

      {/* 4. Luxury Mirror Polished Cap with Chamfered Edge */}
      <mesh castShadow receiveShadow position={[0, 1.02, 0]}>
        <cylinderGeometry args={[1.34, 1.34, 0.48, 48]} />
        <meshStandardMaterial
          color="#234D77"
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>

      {/* 5. Cap Crown Inset Disc with Gold Medallion */}
      <mesh position={[0, 1.27, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.03, 48]} />
        <meshStandardMaterial
          color="#E8C493"
          roughness={0.12}
          metalness={0.95}
        />
      </mesh>

      {/* 6. Subtle Base Ring with Gold Trim */}
      <mesh position={[0, -0.72, 0]}>
        <cylinderGeometry args={[1.28, 1.25, 0.08, 48]} />
        <meshStandardMaterial
          color="#D09554"
          roughness={0.25}
          metalness={0.88}
        />
      </mesh>
    </group>
  );
}

// Custom GLB Loader Component
function LoadedGLBModel({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  autoRotate = true,
}: HeroModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const gltf = useGLTF(modelPath);

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          const mesh = child as THREE.Mesh;
          if (mesh.material) {
            // Enhance lighting responsiveness while preserving blender textures
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((mat) => {
                mat.needsUpdate = true;
              });
            } else {
              mesh.material.needsUpdate = true;
            }
          }
        }
      });
    }
  }, [gltf]);

  useFrame((state, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * 0.35;
      groupRef.current.position.y = (Array.isArray(position) ? position[1] : 0) + Math.sin(state.clock.elapsedTime * 1.2) * 0.08;
    }
  });

  const parsedScale: [number, number, number] = Array.isArray(scale)
    ? scale
    : [scale, scale, scale];

  return (
    <group
      ref={groupRef}
      scale={parsedScale}
      position={position}
      rotation={rotation}
      dispose={null}
    >
      <primitive object={gltf.scene} />
    </group>
  );
}

// Error Boundary to prevent any unhandled 3D model parsing or network exceptions from crashing Canvas
interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ModelErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn(
      'Hero 3D Model file unavailable or invalid. Rendering procedural precision specimen instead:',
      error?.message || error
    );
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Error Boundary & Dispatcher for HeroModel
export default function HeroModel({
  modelPath = '/models/hero-model.glb',
  scale = 1.8,
  position = [0, -0.4, 0],
  rotation = [0.15, 0.45, 0],
  autoRotate = true,
}: HeroModelProps) {
  const [isValidGLB, setIsValidGLB] = useState<boolean | null>(null);

  useEffect(() => {
    let isCancelled = false;

    // If no path is provided, immediately fall back
    if (!modelPath || typeof modelPath !== 'string') {
      setIsValidGLB(false);
      return;
    }

    // Verify whether the file actually exists and contains real glTF/GLB binary/JSON data,
    // rather than the Vite SPA fallback index.html which causes JSON parse errors.
    fetch(modelPath, { method: 'GET' })
      .then(async (res) => {
        if (isCancelled) return;

        // Check HTTP response status
        if (!res.ok || res.status === 404) {
          setIsValidGLB(false);
          return;
        }

        // Vite and SPA servers return status 200 with text/html when static assets are missing
        const contentType = res.headers.get('content-type') || '';
        if (contentType.includes('text/html') || contentType.includes('application/xhtml+xml')) {
          setIsValidGLB(false);
          return;
        }

        // Inspect the first few bytes to guarantee it's a valid GLB or glTF JSON
        try {
          const buffer = await res.arrayBuffer();
          if (buffer.byteLength < 4) {
            setIsValidGLB(false);
            return;
          }

          const header = new Uint8Array(buffer, 0, 4);
          // GLB binary magic number is 0x46546C67 ('glTF')
          const isGlb =
            (header[0] === 0x67 || header[0] === 0x47) && // 'g' or 'G'
            (header[1] === 0x6c || header[1] === 0x4c) && // 'l' or 'L'
            (header[2] === 0x54 || header[2] === 0x74) && // 'T' or 't'
            (header[3] === 0x46 || header[3] === 0x66);   // 'F' or 'f'

          // glTF JSON format starts with '{' (ASCII 0x7B)
          const isGltfJson = header[0] === 0x7b;

          if (!isGlb && !isGltfJson) {
            setIsValidGLB(false);
            return;
          }

          setIsValidGLB(true);
        } catch {
          if (!isCancelled) setIsValidGLB(false);
        }
      })
      .catch(() => {
        if (!isCancelled) {
          setIsValidGLB(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [modelPath]);

  const proceduralFallback = (
    <ProceduralLuxuryPackaging
      scale={scale}
      position={position}
      rotation={rotation}
      autoRotate={autoRotate}
    />
  );

  // If validation failed or is pending, show procedural packaging directly without triggering useGLTF
  if (!isValidGLB) {
    return proceduralFallback;
  }

  return (
    <ModelErrorBoundary fallback={proceduralFallback}>
      <React.Suspense fallback={proceduralFallback}>
        <LoadedGLBModel
          modelPath={modelPath}
          scale={scale}
          position={position}
          rotation={rotation}
          autoRotate={autoRotate}
        />
      </React.Suspense>
    </ModelErrorBoundary>
  );
}
