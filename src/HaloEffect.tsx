import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from './ThemeContext';

const glassMaterial = (isLight: boolean) => ({
  metalness: 0.15,
  roughness: 0.05,
  transmission: 0.9,
  thickness: 1.2,
  ior: 1.45,
  envMapIntensity: isLight ? 1.5 : 2.5,
  clearcoat: 1,
  clearcoatRoughness: 0.05,
  transparent: true,
  opacity: 0.9,
  side: THREE.DoubleSide as THREE.Side,
  attenuationColor: isLight ? '#a78bfa' : '#8b5cf6',
  attenuationDistance: 2,
});

// Main object — bottom right
const MainObject = ({ isLight }: { isLight: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.2 + 0.3;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={meshRef} position={[2.5, -1.5, 0]} scale={1.6}>
        <torusKnotGeometry args={[1, 0.35, 128, 32, 2, 3]} />
        <meshPhysicalMaterial
          color={isLight ? '#9575e6' : '#7c5cc4'}
          {...glassMaterial(isLight)}
        />
      </mesh>
    </Float>
  );
};

// Secondary object — top left
const SecondaryObject = ({ isLight }: { isLight: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.004;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      meshRef.current.rotation.z += 0.002;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[-4, 2.5, -1]} scale={0.9}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color={isLight ? '#7c8cf6' : '#6d5cc4'}
          {...glassMaterial(isLight)}
        />
      </mesh>
    </Float>
  );
};

const Stars = ({ count, isLight }: { count: number; isLight: boolean }) => {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = -3 - Math.random() * 20;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.005;
      ref.current.rotation.x = state.clock.elapsedTime * 0.003;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={isLight ? 0.035 : 0.05}
        color={isLight ? '#7c3aed' : '#ffffff'}
        transparent
        opacity={isLight ? 0.35 : 0.7}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = ({ isLight }: { isLight: boolean }) => (
  <>
    <color attach="background" args={[isLight ? '#fbfaff' : '#08070f']} />

    <ambientLight intensity={isLight ? 0.4 : 0.2} />
    <directionalLight position={[5, 5, 5]} intensity={isLight ? 1.2 : 0.8} color={isLight ? '#ffffff' : '#c4b5fd'} />
    <directionalLight position={[-3, -2, 4]} intensity={0.3} color="#22d3ee" />
    <pointLight position={[3, -1, 3]} intensity={isLight ? 0.5 : 0.8} color="#8b5cf6" />
    <pointLight position={[-4, 2, 2]} intensity={0.3} color="#22d3ee" />

    <MainObject isLight={isLight} />
    <Stars count={isLight ? 80 : 250} isLight={isLight} />

    <Suspense fallback={null}>
      <Environment preset="night" />
    </Suspense>

    <fog attach="fog" args={[isLight ? '#fbfaff' : '#08070f', 8, 20]} />
  </>
);

const HaloEffect: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      data-no-theme-transition
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: isLight ? 1.2 : 1.5,
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
        frameloop="always"
        performance={{ min: 0.5 }}
      >
        <Scene isLight={isLight} />
      </Canvas>
    </div>
  );
};

export default HaloEffect;
