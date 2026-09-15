'use client';

import React, { useEffect, useRef } from 'react';

export interface CursorFollowerProps {
  /** Primary luxury brand gold for lead dot, trail body & glow (default: #d09554) */
  primaryColor?: string;
  /** Secondary champagne gold for highlights & trail fade (default: #e8c493) */
  accentColor?: string;
  /** Whether to hide native OS cursor on desktop devices with hover support (default: true) */
  hideDefaultCursor?: boolean;
  /** Number of physics nodes in the follower chain (default: 18) */
  trailLength?: number;
  /** Maximum thickness of the ribbon at the cursor head in pixels (default: 4.2) */
  trailWidth?: number;
  /** Diameter of main lead cursor dot in pixels (default: 6.5) */
  dotSize?: number;
  /** Diameter of interactive target ring in pixels (default: 34) */
  ringSize?: number;
  /** Additional custom CSS classes */
  className?: string;
}

interface Point2D {
  x: number;
  y: number;
}

/**
 * Parses hex color string to RGB tuple
 */
function hexToRgb(hex: string): [number, number, number] {
  let c = hex.replace(/^#/, '');
  if (c.length === 3) c = c.split('').map((ch) => ch + ch).join('');
  const num = parseInt(c, 16);
  if (isNaN(num)) return [208, 149, 84];
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

/**
 * Super International - Ultra-Smooth Continuous Ribbon Motion Cursor (60-144 FPS)
 * 
 * - Main Cursor: Sharp, instantaneous golden dot tracking the exact mouse position with zero lag
 * - Motion Ribbon: Continuous fluid ribbon polygon generated via inertial chain relaxation
 * - Perfectly Rounded Curvature: Zero polygonal edges or joint notches on circular or vertical motions
 * - Speed-Responsive Elongation: Stretches gracefully at high speed, tightens at low speed
 * - Smooth Contraction & Dissolve: Elastically reels into the cursor dot on pause over ~300ms
 * - Seamless Continuity: Resuming motion immediately extends the ribbon without jumps
 * - High-FPS Performance: Single Canvas 2D fill path with hardware-accelerated GPU translation
 * - Non-Interfering: pointer-events: none, disabled on touch/mobile, respects prefers-reduced-motion
 */
export default function CursorFollower({
  primaryColor = '#d09554',
  accentColor = '#e8c493',
  hideDefaultCursor = true,
  trailLength = 18,
  trailWidth = 4.2,
  dotSize = 6.5,
  ringSize = 34,
  className = '',
}: CursorFollowerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Guard against SSR, touch devices, and reduced motion
    if (typeof window === 'undefined') return;

    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 768;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      if (containerRef.current) {
        containerRef.current.style.display = 'none';
      }
      return;
    }

    // 2. Hide native desktop cursor if requested
    let styleTag: HTMLStyleElement | null = null;
    if (hideDefaultCursor) {
      styleTag = document.createElement('style');
      styleTag.setAttribute('data-super-cursor-style', 'true');
      styleTag.textContent = `
        @media (pointer: fine) and (hover: hover) {
          *, html, body, a, button, input, textarea, select, [role="button"], [role="link"], .cursor-pointer, [data-cursor="pointer"] {
            cursor: none !important;
          }
        }
      `;
      document.head.appendChild(styleTag);
    }

    // 3. Setup High-DPI Canvas
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // 4. Physics Chain State
    const primaryRgb = hexToRgb(primaryColor);
    const accentRgb = hexToRgb(accentColor);

    const N = Math.max(12, Math.min(26, trailLength));
    const mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Initialize all follower chain nodes to initial mouse position
    const chain: Point2D[] = Array.from({ length: N }, () => ({
      x: mousePos.x,
      y: mousePos.y,
    }));

    let lastMoveTime = performance.now();
    let isVisible = false;
    let hasMoved = false;
    let isHoveringInteractive = false;
    let isMouseDown = false;

    let tailOpacity = 0;
    let currentRingScale = 0;
    let currentRingOpacity = 0;
    let currentDotScale = 1;

    let rafId: number | null = null;
    let lastFrameTime = performance.now();

    // 5. Event Listeners
    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      lastMoveTime = performance.now();

      if (!hasMoved) {
        hasMoved = true;
        // Snap chain immediately on first movement to avoid initial slide
        for (let i = 0; i < N; i++) {
          chain[i].x = e.clientX;
          chain[i].y = e.clientY;
        }
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        return;
      }

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
    };

    const onMouseEnter = () => {
      if (hasMoved) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
      }
    };

    const onMouseDown = () => {
      isMouseDown = true;
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = Boolean(
        target.closest(
          'a, button, input, textarea, select, [role="button"], [role="link"], [data-cursor="pointer"], .cursor-pointer, label'
        ) || (target && window.getComputedStyle(target).cursor === 'pointer')
      );

      isHoveringInteractive = interactive;
    };

    const onPointerOut = (e: PointerEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (!related) {
        isHoveringInteractive = false;
        return;
      }

      const stillInteractive = Boolean(
        related.closest(
          'a, button, input, textarea, select, [role="button"], [role="link"], [data-cursor="pointer"], .cursor-pointer, label'
        ) || (related && window.getComputedStyle(related).cursor === 'pointer')
      );

      isHoveringInteractive = stillInteractive;
    };

    // 6. High-Performance Animation Loop (60-144 FPS)
    const animate = (currentTime: number) => {
      const frameDelta = Math.min(0.04, Math.max(0.001, (currentTime - lastFrameTime) / 1000));
      lastFrameTime = currentTime;

      const isMoving = currentTime - lastMoveTime < 40;

      // Lead node stays locked to exact mouse position with instant response
      chain[0].x = mousePos.x;
      chain[0].y = mousePos.y;

      // Frame-rate independent physics for follower nodes
      if (isMoving) {
        // Active motion: follow previous node smoothly with gentle spring relaxation
        const followFactor = 1 - Math.exp(-42 * frameDelta);
        for (let i = 1; i < N; i++) {
          chain[i].x += (chain[i - 1].x - chain[i].x) * followFactor;
          chain[i].y += (chain[i - 1].y - chain[i].y) * followFactor;
        }
        // Rapid ramp up to full opacity
        tailOpacity += (1 - tailOpacity) * (1 - Math.exp(-18 * frameDelta));
      } else {
        // Stopped motion: elastically contract nodes into the cursor dot
        const idleContractFactor = 1 - Math.exp(-48 * frameDelta);
        for (let i = 1; i < N; i++) {
          chain[i].x += (chain[i - 1].x - chain[i].x) * idleContractFactor;
          chain[i].y += (chain[i - 1].y - chain[i].y) * idleContractFactor;
        }
        // Progressively dissolve tail over ~300ms
        tailOpacity += (0 - tailOpacity) * (1 - Math.exp(-9 * frameDelta));
      }

      // Interactive hover animation (dot & ring)
      const targetRingScale = isHoveringInteractive ? (isMouseDown ? 0.88 : 1) : 0;
      const targetRingOpacity = isHoveringInteractive ? 1 : 0;
      const targetDotScale = isHoveringInteractive
        ? (isMouseDown ? 0.75 : 1.2)
        : (isMouseDown ? 0.82 : 1);

      currentRingScale += (targetRingScale - currentRingScale) * (1 - Math.exp(-14 * frameDelta));
      currentRingOpacity += (targetRingOpacity - currentRingOpacity) * (1 - Math.exp(-16 * frameDelta));
      currentDotScale += (targetDotScale - currentDotScale) * (1 - Math.exp(-16 * frameDelta));

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) scale(${currentDotScale.toFixed(3)})`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) scale(${currentRingScale.toFixed(3)})`;
        ringRef.current.style.opacity = currentRingOpacity.toFixed(3);
      }

      // --- Ribbon Rendering (Continuous Bezier Polygon) ---
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Measure total physical curve length
      let totalLength = 0;
      for (let i = 1; i < N; i++) {
        totalLength += Math.hypot(chain[i].x - chain[i - 1].x, chain[i].y - chain[i - 1].y);
      }

      // Only draw if there is active displacement and visible opacity
      if (isVisible && totalLength > 2.5 && tailOpacity > 0.02) {
        const currentAlpha = tailOpacity * (isHoveringInteractive ? 0.4 : 0.95);

        // Compute smooth centered normals along the chain
        const leftEdges: Point2D[] = [];
        const rightEdges: Point2D[] = [];
        const normalVecs: Point2D[] = [];

        for (let i = 0; i < N; i++) {
          let dx = 0;
          let dy = 0;
          if (i === 0) {
            dx = chain[1].x - chain[0].x;
            dy = chain[1].y - chain[0].y;
          } else if (i === N - 1) {
            dx = chain[N - 1].x - chain[N - 2].x;
            dy = chain[N - 1].y - chain[N - 2].y;
          } else {
            dx = chain[i + 1].x - chain[i - 1].x;
            dy = chain[i + 1].y - chain[i - 1].y;
          }

          const len = Math.hypot(dx, dy) || 1;
          const nx = -dy / len;
          const ny = dx / len;
          normalVecs.push({ x: nx, y: ny });

          // Smooth cosine width taper from max thickness at cursor head down to 0 at tail tip
          const t = 1 - i / (N - 1); // 1 at head, 0 at tail
          const width = trailWidth * Math.sin((t * Math.PI) / 2);

          leftEdges.push({
            x: chain[i].x + nx * width * 0.5,
            y: chain[i].y + ny * width * 0.5,
          });
          rightEdges.push({
            x: chain[i].x - nx * width * 0.5,
            y: chain[i].y - ny * width * 0.5,
          });
        }

        ctx.save();
        ctx.beginPath();

        // 1. Trace down the right edge using continuous midpoint quadratic Bezier curves
        ctx.moveTo(rightEdges[0].x, rightEdges[0].y);
        for (let i = 0; i < N - 1; i++) {
          const midX = (rightEdges[i].x + rightEdges[i + 1].x) * 0.5;
          const midY = (rightEdges[i].y + rightEdges[i + 1].y) * 0.5;
          ctx.quadraticCurveTo(rightEdges[i].x, rightEdges[i].y, midX, midY);
        }

        // 2. Smoothly cap the tail tip
        ctx.lineTo(chain[N - 1].x, chain[N - 1].y);

        // 3. Trace back up the left edge using continuous midpoint quadratic Bezier curves
        for (let i = N - 1; i > 0; i--) {
          const midX = (leftEdges[i].x + leftEdges[i - 1].x) * 0.5;
          const midY = (leftEdges[i].y + leftEdges[i - 1].y) * 0.5;
          ctx.quadraticCurveTo(leftEdges[i].x, leftEdges[i].y, midX, midY);
        }

        // 4. Smoothly connect to the head left edge and close path
        ctx.lineTo(leftEdges[0].x, leftEdges[0].y);
        ctx.closePath();

        // 5. Single Continuous Gradient Fill (Tail -> Head)
        const gradient = ctx.createLinearGradient(
          chain[N - 1].x,
          chain[N - 1].y,
          chain[0].x,
          chain[0].y
        );
        gradient.addColorStop(0, `rgba(${primaryRgb[0]}, ${primaryRgb[1]}, ${primaryRgb[2]}, 0)`);
        gradient.addColorStop(
          0.25,
          `rgba(${primaryRgb[0]}, ${primaryRgb[1]}, ${primaryRgb[2]}, ${(0.35 * currentAlpha).toFixed(3)})`
        );
        gradient.addColorStop(
          0.65,
          `rgba(220, 172, 115, ${(0.75 * currentAlpha).toFixed(3)})`
        );
        gradient.addColorStop(
          1,
          `rgba(${accentRgb[0]}, ${accentRgb[1]}, ${accentRgb[2]}, ${(0.95 * currentAlpha).toFixed(3)})`
        );

        ctx.fillStyle = gradient;
        // Atmospheric gold bloom (single GPU composited pass)
        ctx.shadowColor = `rgba(${primaryRgb[0]}, ${primaryRgb[1]}, ${primaryRgb[2]}, ${(0.55 * currentAlpha).toFixed(3)})`;
        ctx.shadowBlur = 8;
        ctx.fill();

        ctx.restore();
      }

      rafId = requestAnimationFrame(animate);
    };

    // Attach listeners
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('pointerover', onPointerOver, { passive: true });
    window.addEventListener('pointerout', onPointerOut, { passive: true });

    rafId = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('pointerover', onPointerOver);
      window.removeEventListener('pointerout', onPointerOut);

      if (styleTag && styleTag.parentNode) {
        styleTag.parentNode.removeChild(styleTag);
      }
    };
  }, [hideDefaultCursor, primaryColor, accentColor, trailLength, trailWidth]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-[99999] overflow-hidden select-none ${className}`}
    >
      {/* 1. Fullscreen High-DPI Canvas for Continuous Spline Motion Ribbon */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ width: '100vw', height: '100vh', pointerEvents: 'none' }}
      />

      {/* 2. Interactive Expanding Luxury Gold Target Ring */}
      <div
        ref={ringRef}
        className="fixed left-0 top-0 pointer-events-none rounded-full will-change-transform flex items-center justify-center"
        style={{
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          marginLeft: `-${ringSize / 2}px`,
          marginTop: `-${ringSize / 2}px`,
          border: `1.5px solid ${primaryColor}`,
          backgroundColor: 'rgba(208, 149, 84, 0.12)',
          boxShadow: `0 0 16px rgba(208, 149, 84, 0.35), inset 0 0 8px rgba(208, 149, 84, 0.15)`,
          backdropFilter: 'blur(0.5px)',
          transform: 'scale(0)',
          opacity: 0,
        }}
      />

      {/* 3. High-Precision Instantaneous Lead Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 pointer-events-none rounded-full will-change-transform"
        style={{
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          marginLeft: `-${dotSize / 2}px`,
          marginTop: `-${dotSize / 2}px`,
          background: `radial-gradient(circle, ${accentColor} 30%, ${primaryColor} 100%)`,
          boxShadow: `0 0 10px rgba(208, 149, 84, 0.8), 0 0 3px ${accentColor}`,
          opacity: 0,
          transition: 'opacity 0.2s ease',
        }}
      />
    </div>
  );
}
