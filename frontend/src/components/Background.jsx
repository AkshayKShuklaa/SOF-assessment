import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Canvas size
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Scattered color palettes for spiral arms and cursor sparkles
    const colorsBlue = [
      "rgba(37, 99, 235, alpha)",   // Blue-600
      "rgba(59, 130, 246, alpha)",  // Blue-500
      "rgba(29, 78, 216, alpha)",   // Blue-700
      "rgba(96, 165, 250, alpha)",  // Blue-400
    ];

    const colorsMagenta = [
      "rgba(219, 39, 119, alpha)",  // Pink-600
      "rgba(236, 72, 153, alpha)",  // Pink-500
      "rgba(168, 85, 247, alpha)",  // Purple-500
      "rgba(244, 63, 94, alpha)",   // Rose-500
    ];

    const colorsDust = [
      "rgba(148, 163, 184, alpha)", // Slate-400
      "rgba(203, 213, 225, alpha)", // Slate-300
      "rgba(100, 116, 139, alpha)", // Slate-500
    ];

    // Star sparkle trail lists
    let lastMouseX = 0;
    let lastMouseY = 0;
    const trailParticles = [];

    // Helper: Draw 4-pointed star sparkle
    const drawStar = (ctx, cx, cy, spikes, outerRadius, innerRadius, color, rotation) => {
      let rot = (Math.PI / 2) * 3 + rotation;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    };

    // Track mouse position and spawn trail sparkles
    const handleMouseMove = (e) => {
      const mx = e.clientX;
      const my = e.clientY;

      mouseRef.current.x = mx;
      mouseRef.current.y = my;
      mouseRef.current.active = true;

      // Spawn stars based on cursor move distance threshold (6px)
      const dx = mx - lastMouseX;
      const dy = my - lastMouseY;
      const distMoved = Math.sqrt(dx * dx + dy * dy);

      if (distMoved > 6) {
        // Spawn 1-2 star sparkles or dust particles
        const spawnCount = Math.random() > 0.5 ? 2 : 1;
        for (let s = 0; s < spawnCount; s++) {
          const isBlue = Math.random() > 0.5;
          const template = isBlue
            ? colorsBlue[Math.floor(Math.random() * colorsBlue.length)]
            : colorsMagenta[Math.floor(Math.random() * colorsMagenta.length)];

          trailParticles.push({
            x: mx + (Math.random() - 0.5) * 5,
            y: my + (Math.random() - 0.5) * 5,
            vx: (Math.random() - 0.5) * 1.6,
            vy: -0.6 - Math.random() * 1.5, // float upward (anti-gravity)
            size: 2.0 + Math.random() * 2.8,
            alpha: 1.0,
            decay: 0.015 + Math.random() * 0.018,
            colorTemplate: template,
            type: Math.random() > 0.45 ? "star" : "dust",
            rotation: Math.random() * Math.PI,
            rotationSpeed: (Math.random() - 0.5) * 0.08,
          });
        }
        lastMouseX = mx;
        lastMouseY = my;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("pointermove", handleMouseMove);
    window.addEventListener("pointerleave", handleMouseLeave);
    document.addEventListener("pointerout", handleMouseLeave);

    // Create particles
    // 1. Vortex Spiral Particles (blue and magenta)
    const spiralCount = 1400;
    const particles = [];

    for (let i = 0; i < spiralCount; i++) {
      const isArmA = Math.random() > 0.5; // Arm A (Blue) vs Arm B (Magenta)
      const baseAngle = isArmA ? 0 : Math.PI;
      const nr = Math.random() * 1.2; // normalized radius to fill screen initially
      
      const depth = 0.5 + Math.random() * 2.0;

      particles.push({
        type: "spiral",
        isArmA,
        nr,
        baseAngle,
        angleNoise: (Math.random() - 0.5) * 0.35,
        nxNoise: (Math.random() - 0.5) * 0.8,
        nyNoise: (Math.random() - 0.5) * 0.8,
        speed: 0.001 + Math.random() * 0.002, // slow expansion speed
        z: depth,
        radius: (0.8 + Math.random() * 1.0) * (depth * 0.6), // width of streak
        colorTemplate: isArmA
          ? colorsBlue[Math.floor(Math.random() * colorsBlue.length)]
          : colorsMagenta[Math.floor(Math.random() * colorsMagenta.length)],
        mxOffset: 0,
        myOffset: 0,
        vxOffset: 0,
        vyOffset: 0,
        lastX: 0,
        lastY: 0,
        isFirstFrame: true,
      });
    }

    // 2. Background Dust Particles (grey slate)
    const dustCount = 800;
    for (let i = 0; i < dustCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.sqrt(Math.random()) * 1.2;
      const depth = 0.3 + Math.random() * 1.2;

      particles.push({
        type: "dust",
        nx: Math.cos(angle) * dist,
        ny: Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 0.0004,
        vy: -0.0002 - Math.random() * 0.0006, // float upward slowly
        z: depth,
        radius: (0.4 + Math.random() * 0.6) * (depth * 0.6),
        colorTemplate: colorsDust[Math.floor(Math.random() * colorsDust.length)],
        mxOffset: 0,
        myOffset: 0,
        vxOffset: 0,
        vyOffset: 0,
        lastX: 0,
        lastY: 0,
        isFirstFrame: true,
      });
    }

    let globalRotation = 0;

    // Animation Loop
    const animate = () => {
      // Solid white background fill on canvas
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const maxDim = Math.max(width, height);
      const mouse = mouseRef.current;
      const radiusOfInfluence = 125;

      globalRotation += 0.0006; // extremely slow vortex rotation

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        let baseX = 0;
        let baseY = 0;
        let alpha = 1.0;

        if (p.type === "spiral") {
          // 1. Update spiral position
          p.nr += p.speed;

          // Recycle when it drifts too far
          if (p.nr > 1.25) {
            p.nr = Math.random() * 0.02; // reset near center
            p.isFirstFrame = true; // prevent draw streak from screen border
          }

          // Spiral equation: theta curves based on radius nr
          const spiralFactor = 3.6;
          const angle = p.baseAngle + p.nr * spiralFactor + globalRotation + p.angleNoise;
          const rx = Math.cos(angle) * (p.nr * maxDim * 0.45);
          const ry = Math.sin(angle) * (p.nr * maxDim * 0.45);

          // Add minor noise cloud spreads
          baseX = cx + rx + p.nxNoise * maxDim * 0.015;
          baseY = cy + ry + p.nyNoise * maxDim * 0.015;

          // Fade out as it expands past screen boundaries
          if (p.nr < 0.1) {
            alpha = p.nr / 0.1;
          } else if (p.nr > 0.8) {
            alpha = Math.max(0, 1.0 - (p.nr - 0.8) / 0.45);
          }
        } else {
          // 2. Update ambient dust position
          p.nx += p.vx;
          p.ny += p.vy;

          // Recycle when off-screen
          if (p.ny < -1.3 || Math.abs(p.nx) > 1.3) {
            const angle = Math.random() * Math.PI * 2;
            p.nx = Math.cos(angle) * 1.2;
            p.ny = 1.2;
            p.isFirstFrame = true;
          }

          baseX = cx + p.nx * cx * 1.3;
          baseY = cy + p.ny * cy * 1.3;
          
          alpha = 0.4; // constant faint dust opacity
        }

        // 3. Mouse repulsion physics
        let targetOffsetX = 0;
        let targetOffsetY = 0;

        if (mouse.active) {
          const dx = (baseX + p.mxOffset) - mouse.x;
          const dy = (baseY + p.myOffset) - mouse.y;
          const distToMouse = Math.sqrt(dx * dx + dy * dy);

          if (distToMouse < radiusOfInfluence && distToMouse > 0.1) {
            const force = (radiusOfInfluence - distToMouse) / radiusOfInfluence;
            const pushX = dx / distToMouse;
            const pushY = dy / distToMouse;
            targetOffsetX = pushX * force * 52 * p.z;
            targetOffsetY = pushY * force * 52 * p.z;
          }
        }

        const k = 0.06;
        const damping = 0.84;
        const ax = (targetOffsetX - p.mxOffset) * k;
        const ay = (targetOffsetY - p.myOffset) * k;
        p.vxOffset = (p.vxOffset + ax) * damping;
        p.vyOffset = (p.vyOffset + ay) * damping;
        p.mxOffset += p.vxOffset;
        p.myOffset += p.vyOffset;

        const finalX = baseX + p.mxOffset;
        const finalY = baseY + p.myOffset;

        if (p.isFirstFrame) {
          p.lastX = finalX;
          p.lastY = finalY;
          p.isFirstFrame = false;
        }

        // 4. Draw particle streak/dash
        const finalColor = p.colorTemplate.replace("alpha", (alpha * 0.72).toFixed(2));
        ctx.strokeStyle = finalColor;
        ctx.lineWidth = p.radius;
        ctx.lineCap = "round";

        ctx.beginPath();
        // If it hasn't moved much, draw a tiny segment so it stays visible as a dot
        const dx = finalX - p.lastX;
        const dy = finalY - p.lastY;
        const distMoved = Math.sqrt(dx * dx + dy * dy);
        
        if (distMoved < 0.5) {
          ctx.moveTo(finalX - 0.5, finalY);
          ctx.lineTo(finalX + 0.5, finalY);
        } else {
          ctx.moveTo(p.lastX, p.lastY);
          ctx.lineTo(finalX, finalY);
        }
        ctx.stroke();

        p.lastX = finalX;
        p.lastY = finalY;
      }

      // 5. Draw cursor trail sparkles
      for (let i = trailParticles.length - 1; i >= 0; i--) {
        const tp = trailParticles[i];
        tp.x += tp.vx;
        tp.y += tp.vy;
        tp.alpha -= tp.decay;
        tp.size *= 0.96;
        tp.rotation += tp.rotationSpeed;

        if (tp.alpha <= 0 || tp.size < 0.2) {
          trailParticles.splice(i, 1);
          continue;
        }

        const color = tp.colorTemplate.replace("alpha", tp.alpha.toFixed(2));
        if (tp.type === "star") {
          drawStar(ctx, tp.x, tp.y, 4, tp.size, tp.size * 0.25, color, tp.rotation);
        } else {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(tp.x, tp.y, tp.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handleMouseMove);
      window.removeEventListener("pointerleave", handleMouseLeave);
      document.removeEventListener("pointerout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-white">
      <canvas ref={canvasRef} className="block h-full w-full pointer-events-none" />
    </div>
  );
}
