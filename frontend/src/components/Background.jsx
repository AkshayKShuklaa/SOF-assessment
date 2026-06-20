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

    // Tech color palettes
    const colorsBlue = [
      "rgba(37, 99, 235, alpha)",   // Blue-600
      "rgba(59, 130, 246, alpha)",  // Blue-500
      "rgba(14, 165, 233, alpha)",  // Sky-500
      "rgba(96, 165, 250, alpha)",  // Blue-400
    ];

    const colorsMagenta = [
      "rgba(168, 85, 247, alpha)",  // Purple-500
      "rgba(219, 39, 119, alpha)",  // Pink-600
      "rgba(236, 72, 153, alpha)",  // Pink-500
      "rgba(129, 140, 248, alpha)", // Indigo-400
    ];

    const colorsDust = [
      "rgba(148, 163, 184, alpha)", // Slate-400
      "rgba(203, 213, 225, alpha)", // Slate-300
      "rgba(100, 116, 139, alpha)", // Slate-500
    ];

    // Expanded technical and scientific formula pool
    const techSymbols = [
      "0", "1", "0x", "FF", "+", "[]", "<>", "||", "e-",
      "E=mc²", "∇×E=-∂B/∂t", "Δx·Δp≥ℏ/2", "F=G(mm)/r²",
      "f(x)=∫f(t)dt", "PV=nRT", "[X, P]=iℏ"
    ];
    const trailParticles = [];

    // Track mouse position and spawn trail sparkles
    const handleMouseMove = (e) => {
      const mx = e.clientX;
      const my = e.clientY;

      mouseRef.current.x = mx;
      mouseRef.current.y = my;
      mouseRef.current.active = true;

      // Spawn technical indicators on mouse movement
      if (Math.random() > 0.45) {
        const symbol = techSymbols[Math.floor(Math.random() * techSymbols.length)];
        const isBlue = Math.random() > 0.5;
        const colorTemplate = isBlue
          ? colorsBlue[Math.floor(Math.random() * colorsBlue.length)]
          : colorsMagenta[Math.floor(Math.random() * colorsMagenta.length)];

        trailParticles.push({
          x: mx + (Math.random() - 0.5) * 16,
          y: my + (Math.random() - 0.5) * 16,
          vx: (Math.random() - 0.5) * 1.4,
          vy: -0.5 - Math.random() * 1.4, // Float upwards slowly
          symbol,
          colorTemplate,
          alpha: 1.0,
          decay: 0.012 + Math.random() * 0.015,
          size: 7 + Math.random() * 5,
          type: Math.random() > 0.5 ? "symbol" : "plus",
        });
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("pointermove", handleMouseMove);
    window.addEventListener("pointerleave", handleMouseLeave);
    document.addEventListener("pointerout", handleMouseLeave);

    // Create technical nodes
    const nodeCount = 180;
    const particles = [];

    for (let i = 0; i < nodeCount; i++) {
      const isArmA = Math.random() > 0.5;
      const baseAngle = isArmA ? 0 : Math.PI;
      const nr = Math.random() * 1.1; // normalized radius
      const depth = 0.5 + Math.random() * 1.5;

      particles.push({
        type: "spiral",
        isArmA,
        nr,
        baseAngle,
        angleNoise: (Math.random() - 0.5) * 0.35,
        nxNoise: (Math.random() - 0.5) * 0.6,
        nyNoise: (Math.random() - 0.5) * 0.6,
        speed: 0.0006 + Math.random() * 0.0012, // Slow technical drift
        z: depth,
        colorTemplate: isArmA
          ? colorsBlue[Math.floor(Math.random() * colorsBlue.length)]
          : colorsMagenta[Math.floor(Math.random() * colorsMagenta.length)],
        techType: ["plus", "binary", "square", "crosshair"][Math.floor(Math.random() * 4)],
        techSymbol: techSymbols[Math.floor(Math.random() * techSymbols.length)],
        mxOffset: 0,
        myOffset: 0,
        vxOffset: 0,
        vyOffset: 0,
        lastX: 0,
        lastY: 0,
        isFirstFrame: true,
      });
    }

    // Static ambient nodes
    const ambientCount = 100;
    for (let i = 0; i < ambientCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.sqrt(Math.random()) * 1.1;
      const depth = 0.3 + Math.random() * 1.0;

      particles.push({
        type: "ambient",
        nx: Math.cos(angle) * dist,
        ny: Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 0.0002,
        vy: -0.0001 - Math.random() * 0.0004,
        z: depth,
        colorTemplate: colorsDust[Math.floor(Math.random() * colorsDust.length)],
        techType: ["dot", "plus"][Math.floor(Math.random() * 2)],
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
      // Clean white canvas background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const maxDim = Math.max(width, height);
      const mouse = mouseRef.current;
      const radiusOfInfluence = 135;

      globalRotation += 0.0003; // Slowly rotates technical arms

      // 1. Draw Blueprint Alignment Grid
      ctx.strokeStyle = "rgba(15, 23, 42, 0.012)";
      ctx.lineWidth = 1;
      const gridSize = 100;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw Blueprint Grid Intersection Crosses (+)
      ctx.strokeStyle = "rgba(15, 23, 42, 0.06)";
      ctx.lineWidth = 0.8;
      for (let x = gridSize; x < width; x += gridSize) {
        for (let y = gridSize; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x - 4, y);
          ctx.lineTo(x + 4, y);
          ctx.moveTo(x, y - 4);
          ctx.lineTo(x, y + 4);
          ctx.stroke();
        }
      }

      // 3. Concentric coordinate degree rings (Radar Style)
      ctx.strokeStyle = "rgba(15, 23, 42, 0.014)";
      ctx.lineWidth = 0.8;
      const radiusRings = [180, 360, 540];
      radiusRings.forEach((r) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.fillStyle = "rgba(15, 23, 42, 0.06)";
        ctx.font = "8px Courier New, monospace";
        ctx.textAlign = "left";
        ctx.fillText(`R = ${r}px`, cx + r - 32, cy - 4);
      });

      // Faint radial angle lines
      ctx.strokeStyle = "rgba(15, 23, 42, 0.01)";
      const radialAngles = [0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4, Math.PI, (5 * Math.PI) / 4, (3 * Math.PI) / 2, (7 * Math.PI) / 4];
      radialAngles.forEach((angle) => {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * 600, cy + Math.sin(angle) * 600);
        ctx.stroke();
      });

      // 4. CAD Technical Dimension Lines (Blueprint measurements)
      ctx.strokeStyle = "rgba(15, 23, 42, 0.02)";
      ctx.fillStyle = "rgba(15, 23, 42, 0.08)";
      ctx.lineWidth = 0.8;

      // Horizontal dimension line (Top-Left)
      const dx1 = 120, dy1 = 80, dlen1 = 200;
      ctx.beginPath();
      ctx.moveTo(dx1, dy1);
      ctx.lineTo(dx1 + dlen1, dy1);
      ctx.moveTo(dx1, dy1 - 6); ctx.lineTo(dx1, dy1 + 6);
      ctx.moveTo(dx1 + dlen1, dy1 - 6); ctx.lineTo(dx1 + dlen1, dy1 + 6);
      ctx.stroke();
      ctx.font = "8px Courier New, monospace";
      ctx.textAlign = "center";
      ctx.fillText("d = 200.00 px", dx1 + dlen1 / 2, dy1 - 6);

      // Vertical dimension line (Bottom-Left)
      const dx2 = 80, dy2 = 220, dlen2 = 150;
      ctx.beginPath();
      ctx.moveTo(dx2, dy2);
      ctx.lineTo(dx2, dy2 + dlen2);
      ctx.moveTo(dx2 - 6, dy2); ctx.lineTo(dx2 + 6, dy2);
      ctx.moveTo(dx2 - 6, dy2 + dlen2); ctx.lineTo(dx2 + 6, dy2 + dlen2);
      ctx.stroke();
      ctx.textAlign = "left";
      ctx.fillText("h = 150.00 px", dx2 + 10, dy2 + dlen2 / 2);

      // 5. Update particle positions
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        let baseX = 0;
        let baseY = 0;
        let alpha = 1.0;

        if (p.type === "spiral") {
          p.nr += p.speed;

          if (p.nr > 1.2) {
            p.nr = Math.random() * 0.05;
            p.isFirstFrame = true;
          }

          const spiralFactor = 3.6;
          const angle = p.baseAngle + p.nr * spiralFactor + globalRotation + p.angleNoise;
          const rx = Math.cos(angle) * (p.nr * maxDim * 0.42);
          const ry = Math.sin(angle) * (p.nr * maxDim * 0.42);

          baseX = cx + rx + p.nxNoise * maxDim * 0.02;
          baseY = cy + ry + p.nyNoise * maxDim * 0.02;

          if (p.nr < 0.1) {
            alpha = p.nr / 0.1;
          } else if (p.nr > 0.8) {
            alpha = Math.max(0, 1.0 - (p.nr - 0.8) / 0.4);
          }
        } else {
          // Ambient drift
          p.nx += p.vx;
          p.ny += p.vy;

          if (p.ny < -1.2 || Math.abs(p.nx) > 1.2) {
            const angle = Math.random() * Math.PI * 2;
            p.nx = Math.cos(angle) * 1.1;
            p.ny = 1.1;
            p.isFirstFrame = true;
          }

          baseX = cx + p.nx * cx * 1.2;
          baseY = cy + p.ny * cy * 1.2;
          alpha = 0.45;
        }

        // Mouse Repulsion physics
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
            targetOffsetX = pushX * force * 45 * p.z;
            targetOffsetY = pushY * force * 45 * p.z;
          }
        }

        const k = 0.07;
        const damping = 0.85;
        const ax = (targetOffsetX - p.mxOffset) * k;
        const ay = (targetOffsetY - p.myOffset) * k;
        p.vxOffset = (p.vxOffset + ax) * damping;
        p.vyOffset = (p.vyOffset + ay) * damping;
        p.mxOffset += p.vxOffset;
        p.myOffset += p.vyOffset;

        const finalX = baseX + p.mxOffset;
        const finalY = baseY + p.myOffset;

        p.lastX = finalX;
        p.lastY = finalY;
        p.alpha = alpha;
      }

      // 6. Draw Network Constellation Connections (only between spiral nodes)
      ctx.lineWidth = 0.6;
      const maxConnDist = 90;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        if (p1.type !== "spiral") continue;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          if (p2.type !== "spiral") continue;

          const dx = p1.lastX - p2.lastX;
          const dy = p1.lastY - p2.lastY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnDist) {
            const connAlpha = (1.0 - dist / maxConnDist) * p1.alpha * p2.alpha * 0.18;
            ctx.strokeStyle = `rgba(99, 102, 241, ${connAlpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(p1.lastX, p1.lastY);
            ctx.lineTo(p2.lastX, p2.lastY);
            ctx.stroke();
          }
        }
      }

      // 7. Draw Technical Glyph Nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const finalColor = p.colorTemplate.replace("alpha", (p.alpha * 0.64).toFixed(2));
        ctx.fillStyle = finalColor;
        ctx.strokeStyle = finalColor;
        ctx.lineWidth = 0.8;

        if (p.techType === "plus") {
          // Plus sign (+)
          ctx.beginPath();
          ctx.moveTo(p.lastX - 4, p.lastY);
          ctx.lineTo(p.lastX + 4, p.lastY);
          ctx.moveTo(p.lastX, p.lastY - 4);
          ctx.lineTo(p.lastX, p.lastY + 4);
          ctx.stroke();
        } else if (p.techType === "binary") {
          // Monospace Code Glyph (0, 1, FF etc)
          ctx.font = "8px Courier New, monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(p.techSymbol, p.lastX, p.lastY);
        } else if (p.techType === "square") {
          // Micro Square outline
          ctx.strokeRect(p.lastX - 2, p.lastY - 2, 4, 4);
        } else if (p.techType === "crosshair") {
          // Technical micro crosshair
          ctx.beginPath();
          ctx.arc(p.lastX, p.lastY, 2, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          // Ambient dot
          ctx.beginPath();
          ctx.arc(p.lastX, p.lastY, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 8. Draw CAD Drawing Title Block (Bottom-Right Metadata Widget)
      const blockWidth = 136;
      const blockHeight = 66;
      const bx = width - blockWidth - 24;
      const by = height - blockHeight - 24;

      ctx.strokeStyle = "rgba(15, 23, 42, 0.04)";
      ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
      ctx.lineWidth = 1;
      ctx.fillRect(bx, by, blockWidth, blockHeight);
      ctx.strokeRect(bx, by, blockWidth, blockHeight);

      // Lines inside widget
      ctx.beginPath();
      ctx.moveTo(bx, by + 18);
      ctx.lineTo(bx + blockWidth, by + 18);
      ctx.moveTo(bx, by + 34);
      ctx.lineTo(bx + blockWidth, by + 34);
      ctx.moveTo(bx + 68, by + 34);
      ctx.lineTo(bx + 68, by + blockHeight);
      ctx.stroke();

      // Info Texts
      ctx.fillStyle = "rgba(15, 23, 42, 0.44)";
      ctx.font = "bold 8px Courier New, monospace";
      ctx.textAlign = "left";
      ctx.fillText("DWG: SOF-SYS-V2.0", bx + 6, by + 12);
      ctx.fillText("SCALE: 1:1 (PX)", bx + 6, by + 28);
      
      ctx.font = "7px Courier New, monospace";
      ctx.fillText("GRID: 100px", bx + 6, by + 44);
      ctx.fillText("UNITS: SEC", bx + 6, by + 56);
      
      ctx.fillText("VRTX: ON", bx + 74, by + 44);
      ctx.fillText("STAT: OK", bx + 74, by + 56);

      // 9. Draw CAD Cursor Crosshairs & Coordinate Overlay
      if (mouse.active) {
        ctx.strokeStyle = "rgba(99, 102, 241, 0.28)";
        ctx.lineWidth = 0.8;

        // Custom CAD crosshairs centered on cursor
        ctx.setLineDash([2, 3]);
        ctx.beginPath();
        // horizontal
        ctx.moveTo(mouse.x - 50, mouse.y);
        ctx.lineTo(mouse.x + 50, mouse.y);
        // vertical
        ctx.moveTo(mouse.x, mouse.y - 50);
        ctx.lineTo(mouse.x, mouse.y + 50);
        ctx.stroke();
        ctx.setLineDash([]); // Reset line dash

        // Central cursor circle
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 6, 0, Math.PI * 2);
        ctx.stroke();

        // Coordinate details next to mouse pointer
        ctx.fillStyle = "rgba(99, 102, 241, 0.6)";
        ctx.font = "9px Courier New, monospace";
        ctx.textAlign = "left";
        ctx.fillText(`[X:${Math.round(mouse.x)} Y:${Math.round(mouse.y)}]`, mouse.x + 12, mouse.y - 4);
      }

      // 10. Draw Technical Cursor Trail Indicators
      for (let i = trailParticles.length - 1; i >= 0; i--) {
        const tp = trailParticles[i];
        tp.x += tp.vx;
        tp.y += tp.vy;
        tp.alpha -= tp.decay;
        tp.size *= 0.97;

        if (tp.alpha <= 0 || tp.size < 2) {
          trailParticles.splice(i, 1);
          continue;
        }

        const color = tp.colorTemplate.replace("alpha", tp.alpha.toFixed(2));
        ctx.fillStyle = color;
        ctx.strokeStyle = color;

        if (tp.type === "symbol") {
          ctx.font = `${Math.round(tp.size)}px Courier New, monospace`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(tp.symbol, tp.x, tp.y);
        } else {
          // Floating plus trail
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(tp.x - 3, tp.y);
          ctx.lineTo(tp.x + 3, tp.y);
          ctx.moveTo(tp.x, tp.y - 3);
          ctx.lineTo(tp.x, tp.y + 3);
          ctx.stroke();
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
