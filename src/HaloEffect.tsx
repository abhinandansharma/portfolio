import React, { useEffect, useRef } from 'react';

const HaloEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Halo effect parameters
    const halos: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      speed: number;
      phase: number;
      side: 'left' | 'right';
    }> = [];

    // Create halos on left and right sides, not center
    const haloCount = 6;
    const isMobile = canvas.width < 768; // Responsive breakpoint
    
    for (let i = 0; i < haloCount; i++) {
      const side = i % 2 === 0 ? 'left' : 'right';
      
      // Adjust positioning for mobile vs desktop
      let x: number;
      if (isMobile) {
        // On mobile, position halos further out and make them smaller
        x = side === 'left'
          ? canvas.width * 0.1 + Math.random() * canvas.width * 0.15
          : canvas.width * 0.75 + Math.random() * canvas.width * 0.15;
      } else {
        // Desktop positioning
        x = side === 'left'
          ? canvas.width * 0.18 + Math.random() * canvas.width * 0.12
          : canvas.width * 0.7 + Math.random() * canvas.width * 0.12;
      }
      
      halos.push({
        x,
        y: canvas.height * (0.75 + Math.random() * 0.2), // Position even lower, near bottom
        radius: isMobile ? 120 + Math.random() * 100 : 220 + Math.random() * 180,
        opacity: isMobile ? 0.15 + Math.random() * 0.15 : 0.25 + Math.random() * 0.25,
        speed: 0.3 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2,
        side,
      });
    }

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Subtle gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(147, 51, 234, 0.04)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0.01)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw halos (left and right, not center)
      halos.forEach((halo, index) => {
        // Animate halo position (gentle upward drift to simulate rising)
        const drift = Math.sin(time * halo.speed + halo.phase) * 20;
        const x = halo.x;
        const y = halo.y + drift - Math.sin(time * 0.5) * 5; // Slight upward trend

        // Create halo gradient
        const haloGradient = ctx.createRadialGradient(
          x, y, 0,
          x, y, halo.radius
        );
        const baseOpacity = halo.opacity * (0.8 + 0.2 * Math.sin(time * 2 + index));
        haloGradient.addColorStop(0, `rgba(147, 51, 234, ${baseOpacity * 1.2})`);
        haloGradient.addColorStop(0.3, `rgba(147, 51, 234, ${baseOpacity * 0.6})`);
        haloGradient.addColorStop(0.6, `rgba(147, 51, 234, ${baseOpacity * 0.3})`);
        haloGradient.addColorStop(1, 'rgba(147, 51, 234, 0)');

        // Draw halo
        ctx.beginPath();
        ctx.arc(x, y, halo.radius, 0, Math.PI * 2);
        ctx.fillStyle = haloGradient;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(x, y, halo.radius * 1.2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(147, 51, 234, ${baseOpacity * 0.2})`;
        ctx.lineWidth = 3;
        ctx.stroke();
      });

      // Floating particles (keep them away from center)
      const isMobile = canvas.width < 768;
      const particleCount = isMobile ? 12 : 18; // Fewer particles on mobile
      
      for (let i = 0; i < particleCount; i++) {
        const side = i % 2 === 0 ? 'left' : 'right';
        const angle = (i / particleCount) * Math.PI * 2 + time * 0.5;
        
        // Adjust particle positioning for mobile
        let baseRadius: number;
        if (isMobile) {
          baseRadius = side === 'left'
            ? canvas.width * 0.15
            : canvas.width * 0.85;
        } else {
          baseRadius = side === 'left'
            ? canvas.width * 0.22
            : canvas.width * 0.78;
        }
        
        const radius = isMobile ? 50 + Math.sin(time * 1.5 + i) * 20 : 80 + Math.sin(time * 1.5 + i) * 30;
        const x = baseRadius + Math.cos(angle) * radius;
        const y = canvas.height * 0.8 + Math.sin(angle) * (canvas.height * 0.1); // Position particles even lower
        
        ctx.beginPath();
        ctx.arc(x, y, isMobile ? 1.5 : 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${0.4 + 0.3 * Math.sin(time * 2 + i)})`;
        ctx.fill();
      }

      time += 0.01;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ 
        opacity: 0.9,
        zIndex: 0 
      }}
    />
  );
};

export default HaloEffect; 