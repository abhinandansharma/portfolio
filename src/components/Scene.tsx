import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

function Studio() {
  const { gl, scene } = useThree();
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = env;
    return () => {
      scene.environment = null;
      env.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);
  return null;
}

function Knot({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    g.rotation.y += (pointer.current.x * 0.4 + t * 0.14 - g.rotation.y) * 0.05;
    g.rotation.x += (-pointer.current.y * 0.3 + Math.sin(t * 0.3) * 0.15 - g.rotation.x) * 0.05;
  });
  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.7}>
        <mesh scale={1.1}>
          <torusKnotGeometry args={[1, 0.34, 220, 40, 2, 3]} />
          <MeshDistortMaterial color="#141414" metalness={0.55} roughness={0.18} clearcoat={1} clearcoatRoughness={0.1} envMapIntensity={1.4} distort={0.18} speed={1.3} />
        </mesh>
      </Float>
    </group>
  );
}

function Loop({ active }: { active: boolean }) {
  const { invalidate } = useThree();
  useEffect(() => {
    if (!active) return;
    let id = 0;
    const tick = () => {
      invalidate();
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [active, invalidate]);
  return null;
}

export default function Scene() {
  const pointer = useRef({ x: 0, y: 0 });
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { threshold: 0.05 });
    if (wrap.current) io.observe(wrap.current);
    return () => {
      window.removeEventListener('pointermove', onMove);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={wrap} className="stage-canvas" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.6], fov: 38 }}
        dpr={[1, 1.5]}
        frameloop="demand"
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.1;
        }}
      >
        <Studio />
        <Loop active={active} />
        <directionalLight position={[4, 6, 5]} intensity={2} color="#fff1ea" />
        <pointLight position={[-4, -2, 4]} intensity={50} color="#ff2a33" />
        <pointLight position={[3, 3, -3]} intensity={25} color="#ff2a33" />
        <Knot pointer={pointer} />
      </Canvas>
    </div>
  );
}
