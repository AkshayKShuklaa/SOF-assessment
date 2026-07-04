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

    // Tech color palettes (Indian Flag Theme)
    const colorsSaffron = [
      "rgba(210, 90, 0, alpha)",   // Saffron
      "rgba(255, 128, 0, alpha)",    // Darker orange
      "rgba(255, 178, 102, alpha)",  // Lighter orange
      "rgba(255, 165, 0, alpha)",    // Orange
    ];

    const colorsGreen = [
      "rgba(0, 90, 0, alpha)",    // Indian Green
      "rgba(0, 128, 0, alpha)",     // Standard green
      "rgba(34, 139, 34, alpha)",   // Forest green
      "rgba(50, 205, 50, alpha)",   // Lime green
    ];

    const colorsDust = [
      "rgba(0, 0, 128, alpha)",     // Navy blue
      "rgba(148, 163, 184, alpha)", // Slate-400
      "rgba(210, 90, 0, alpha)",  // Saffron
      "rgba(0, 90, 0, alpha)",    // Green
    ];

    // Expanded technical and scientific formula pool
    const techSymbols = [
      "0", "1", "0x", "FF", "+", "[]", "<>", "||", "e-",
      "E=mc²", "∇×E=-∂B/∂t", "Δx·Δp≥ℏ/2", "F=G(mm)/r²",
      "f(x)=∫f(t)dt", "PV=nRT", "[X, P]=iℏ"
    ];
    const trailParticles = [];

    // Component drawing helpers
    const drawResistor = (ctx, x, y, horizontal = true) => {
      ctx.beginPath();
      if (horizontal) {
        ctx.moveTo(x - 14, y);
        ctx.lineTo(x - 10, y);
        ctx.lineTo(x - 8, y - 4);
        ctx.lineTo(x - 4, y + 4);
        ctx.lineTo(x, y - 4);
        ctx.lineTo(x + 4, y + 4);
        ctx.lineTo(x + 8, y - 4);
        ctx.lineTo(x + 10, y);
        ctx.lineTo(x + 14, y);
      } else {
        ctx.moveTo(x, y - 14);
        ctx.lineTo(x, y - 10);
        ctx.lineTo(x - 4, y - 8);
        ctx.lineTo(x + 4, y - 4);
        ctx.lineTo(x - 4, y);
        ctx.lineTo(x + 4, y + 4);
        ctx.lineTo(x - 4, y + 8);
        ctx.lineTo(x, y + 10);
        ctx.lineTo(x, y + 14);
      }
      ctx.stroke();
    };

    const drawCapacitor = (ctx, x, y, horizontal = true) => {
      ctx.beginPath();
      if (horizontal) {
        ctx.moveTo(x - 10, y); ctx.lineTo(x - 2, y);
        ctx.moveTo(x + 2, y); ctx.lineTo(x + 10, y);
        ctx.moveTo(x - 2, y - 6); ctx.lineTo(x - 2, y + 6);
        ctx.moveTo(x + 2, y - 6); ctx.lineTo(x + 2, y + 6);
      } else {
        ctx.moveTo(x, y - 10); ctx.lineTo(x, y - 2);
        ctx.moveTo(x, y + 2); ctx.lineTo(x, y + 10);
        ctx.moveTo(x - 6, y - 2); ctx.lineTo(x + 6, y - 2);
        ctx.moveTo(x - 6, y + 2); ctx.lineTo(x + 6, y + 2);
      }
      ctx.stroke();
    };

    const drawGround = (ctx, x, y) => {
      ctx.beginPath();
      ctx.moveTo(x, y - 8);
      ctx.lineTo(x, y);
      ctx.moveTo(x - 8, y);
      ctx.lineTo(x + 8, y);
      ctx.moveTo(x - 5, y + 3);
      ctx.lineTo(x + 5, y + 3);
      ctx.moveTo(x - 2, y + 6);
      ctx.lineTo(x + 2, y + 6);
      ctx.stroke();
    };

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
        const isSaffron = Math.random() > 0.5;
        const colorTemplate = isSaffron
          ? colorsSaffron[Math.floor(Math.random() * colorsSaffron.length)]
          : colorsGreen[Math.floor(Math.random() * colorsGreen.length)];

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

    // Dynamic paths for AI Neural Brain silhouette relative to (cx, cy)
    const getCircuitPaths = (cx, cy, scale) => {
      return [
        // Face profile outline
        [
          { x: cx - 40 * scale, y: cy - 140 * scale },
          { x: cx - 70 * scale, y: cy - 100 * scale },
          { x: cx - 70 * scale, y: cy - 70 * scale },
          { x: cx - 90 * scale, y: cy - 50 * scale },
          { x: cx - 80 * scale, y: cy - 40 * scale },
          { x: cx - 95 * scale, y: cy - 20 * scale },
          { x: cx - 85 * scale, y: cy - 10 * scale },
          { x: cx - 90 * scale, y: cy + 10 * scale },
          { x: cx - 75 * scale, y: cy + 30 * scale },
          { x: cx - 50 * scale, y: cy + 50 * scale },
          { x: cx - 10 * scale, y: cy + 70 * scale },
          { x: cx - 10 * scale, y: cy + 140 * scale }
        ],
        // Back of head outline
        [
          { x: cx + 20 * scale, y: cy - 150 * scale },
          { x: cx + 80 * scale, y: cy - 120 * scale },
          { x: cx + 110 * scale, y: cy - 60 * scale },
          { x: cx + 100 * scale, y: cy + 20 * scale },
          { x: cx + 70 * scale, y: cy + 70 * scale },
          { x: cx + 70 * scale, y: cy + 140 * scale }
        ],
        // Brain Cortex 1 (Top crown)
        [
          { x: cx - 10 * scale, y: cy - 120 * scale },
          { x: cx - 10 * scale, y: cy - 140 * scale },
          { x: cx + 30 * scale, y: cy - 140 * scale },
          { x: cx + 60 * scale, y: cy - 110 * scale },
          { x: cx + 60 * scale, y: cy - 80 * scale },
          { x: cx + 30 * scale, y: cy - 50 * scale }
        ],
        // Brain Cortex 2 (Mid lobe)
        [
          { x: cx - 40 * scale, y: cy - 70 * scale },
          { x: cx - 10 * scale, y: cy - 100 * scale },
          { x: cx + 40 * scale, y: cy - 100 * scale },
          { x: cx + 70 * scale, y: cy - 70 * scale },
          { x: cx + 70 * scale, y: cy - 40 * scale },
          { x: cx + 40 * scale, y: cy - 10 * scale },
          { x: cx + 10 * scale, y: cy - 10 * scale }
        ],
        // Brain Cortex 3 (Lower lobe / center)
        [
          { x: cx - 50 * scale, y: cy - 20 * scale },
          { x: cx - 20 * scale, y: cy - 50 * scale },
          { x: cx + 30 * scale, y: cy - 50 * scale },
          { x: cx + 50 * scale, y: cy - 20 * scale },
          { x: cx + 30 * scale, y: cy + 10 * scale },
          { x: cx - 10 * scale, y: cy + 10 * scale }
        ],
        // Center Core / Thalamus loops
        [
          { x: cx - 10 * scale, y: cy - 40 * scale },
          { x: cx + 15 * scale, y: cy - 40 * scale },
          { x: cx + 25 * scale, y: cy - 25 * scale },
          { x: cx + 15 * scale, y: cy - 10 * scale },
          { x: cx - 10 * scale, y: cy - 10 * scale },
          { x: cx - 20 * scale, y: cy - 25 * scale },
          { x: cx - 10 * scale, y: cy - 40 * scale }
        ],
        // Outgoing Trace 1: Front of brain to Top-Left
        [
          { x: cx - 40 * scale, y: cy - 110 * scale },
          { x: cx - 100 * scale, y: cy - 110 * scale },
          { x: cx - 150 * scale, y: cy - 160 * scale },
          { x: 0, y: cy - 160 * scale }
        ],
        // Outgoing Trace 2: Mid face to Left Edge
        [
          { x: cx - 75 * scale, y: cy - 10 * scale },
          { x: cx - 140 * scale, y: cy - 10 * scale },
          { x: cx - 200 * scale, y: cy - 70 * scale },
          { x: 0, y: cy - 70 * scale }
        ],
        // Outgoing Trace 3: Lower jaw to Bottom-Left
        [
          { x: cx - 30 * scale, y: cy + 60 * scale },
          { x: cx - 90 * scale, y: cy + 60 * scale },
          { x: cx - 150 * scale, y: cy + 120 * scale },
          { x: 0, y: cy + 120 * scale }
        ],
        // Outgoing Trace 4: Back crown to Top-Right
        [
          { x: cx + 60 * scale, y: cy - 120 * scale },
          { x: cx + 120 * scale, y: cy - 120 * scale },
          { x: cx + 180 * scale, y: cy - 180 * scale },
          { x: width, y: cy - 180 * scale }
        ],
        // Outgoing Trace 5: Mid occipital to Right Edge
        [
          { x: cx + 105 * scale, y: cy - 30 * scale },
          { x: cx + 170 * scale, y: cy - 30 * scale },
          { x: cx + 230 * scale, y: cy + 30 * scale },
          { x: width, y: cy + 30 * scale }
        ],
        // Outgoing Trace 6: Lower neck to Bottom-Right
        [
          { x: cx + 70 * scale, y: cy + 100 * scale },
          { x: cx + 140 * scale, y: cy + 100 * scale },
          { x: cx + 200 * scale, y: cy + 160 * scale },
          { x: width, y: cy + 160 * scale }
        ]
      ];
    };

    // Calculate pulse coordinate along a path segment
    const getPointOnPath = (path, progress) => {
      if (path.length < 2) return null;
      
      const totalSegments = path.length - 1;
      const segmentProgress = progress * totalSegments;
      const index = Math.floor(segmentProgress);
      const segmentT = segmentProgress - index;
      
      if (index >= totalSegments) {
        return path[path.length - 1];
      }
      
      const p1 = path[index];
      const p2 = path[index + 1];
      
      return {
        x: p1.x + (p2.x - p1.x) * segmentT,
        y: p1.y + (p2.y - p1.y) * segmentT
      };
    };

    // Dynamic signal pulses array
    const pulses = [];
    const maxPulses = 14;

    // Static ambient stars for deep tech look
    const ambientCount = 80;
    const ambientNodes = [];
    for (let i = 0; i < ambientCount; i++) {
      ambientNodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 0.8 + Math.random() * 1.0,
        color: colorsDust[Math.floor(Math.random() * colorsDust.length)].replace("alpha", (0.2 + Math.random() * 0.3).toFixed(2))
      });
    }

    // Animation Loop
    const animate = () => {
      // Clean white background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const mouse = mouseRef.current;

      // Scale design context for responsiveness (mobile/tablet/desktop scale)
      const designScale = width < 768 ? 0.72 : (width < 1024 ? 0.85 : 1.0);

      // 1. Draw Blueprint Grid
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

      // 2. Draw Blueprint Crosses (+)
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

      // 3. Draw Ambient Slate Star Points
      ambientNodes.forEach((node) => {
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Draw Concentric Coordinate Rings
      ctx.strokeStyle = "rgba(15, 23, 42, 0.014)";
      ctx.lineWidth = 0.8;
      const radiusRings = [180, 360, 540];
      radiusRings.forEach((r) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r * designScale, 0, Math.PI * 2);
        ctx.stroke();
      });

      // 5. Draw CAD Technical Dimension Lines (Blueprint measurements)
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

      // 6. Draw Static Electrical Schematic Components (Circuit symbols in margins)
      ctx.strokeStyle = "rgba(15, 23, 42, 0.04)";
      ctx.lineWidth = 1;
      ctx.fillStyle = "rgba(15, 23, 42, 0.08)";
      ctx.font = "7px Courier New, monospace";

      // Resistor R1 near top-left dimension
      drawResistor(ctx, 360, 80, true);
      ctx.fillText("R1=10k", 360, 72);

      // Ground terminal next to bottom-left dimension
      drawGround(ctx, 80, 410);
      ctx.fillText("GND", 80, 424);

      // Capacitor C1 in top-right area
      drawCapacitor(ctx, width - 260, 150, true);
      ctx.fillText("C1=100nF", width - 260, 142);

      // Ground terminal in bottom-right near CAD block
      drawGround(ctx, width - 240, height - 50);
      ctx.fillText("GND", width - 240, height - 36);

      // 7. Get and Draw AI Neural Brain Circuit Traces
      const paths = getCircuitPaths(cx, cy, designScale);

      ctx.lineWidth = 1.2;
      const wireColors = [
        "rgba(210, 90, 0, 0.25)", // Saffron
        "rgba(0, 90, 0, 0.25)",   // Green
        "rgba(0, 0, 128, 0.15)",    // Navy blue
      ];
      const jointColors = [
        "rgba(210, 90, 0, 0.4)", // Saffron
        "rgba(0, 90, 0, 0.4)",   // Green
        "rgba(0, 0, 128, 0.25)",   // Navy blue
      ];

      paths.forEach((path, idx) => {
        if (path.length < 2) return;
        
        ctx.strokeStyle = wireColors[idx % 3];
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for (let p = 1; p < path.length; p++) {
          ctx.lineTo(path[p].x, path[p].y);
        }
        ctx.stroke();

        // Draw solder donut joints at coordinates
        path.forEach((pt) => {
          ctx.strokeStyle = jointColors[idx % 3];
          ctx.fillStyle = "#ffffff";
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2.6, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        });
      });

      // 8. Pulsing central neural core (Representing Thalamus processing center)
      const coreX = cx;
      const coreY = cy - 25 * designScale;
      const pulseFactor = 1.0 + Math.sin(Date.now() * 0.0035) * 0.15;
      
      const grad = ctx.createRadialGradient(coreX, coreY, 2, coreX, coreY, 32 * designScale * pulseFactor);
      grad.addColorStop(0, "rgba(210, 90, 0, 0.32)");
      grad.addColorStop(0.35, "rgba(0, 90, 0, 0.12)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(coreX, coreY, 32 * designScale * pulseFactor, 0, Math.PI * 2);
      ctx.fill();

      // Glowing bright inner core dot
      ctx.fillStyle = "rgba(0, 0, 128, 0.8)";
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(0, 0, 128, 0.9)";
      ctx.beginPath();
      ctx.arc(coreX, coreY, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0; // reset shadow

      // 9. Update and Spawn Animated Signal Pulses
      if (pulses.length < maxPulses && Math.random() > 0.94) {
        const pathIdx = Math.floor(Math.random() * paths.length);
        const color = Math.random() > 0.5 
          ? "rgba(210, 90, 0, alpha)" 
          : "rgba(0, 90, 0, alpha)";
        
        pulses.push({
          pathIndex: pathIdx,
          progress: 0,
          speed: 0.0035 + Math.random() * 0.0055,
          color
        });
      }

      // Draw active signal pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;

        if (p.progress >= 1.0) {
          pulses.splice(i, 1);
          continue;
        }

        const path = paths[p.pathIndex];
        const pt = getPointOnPath(path, p.progress);
        if (pt) {
          // Fade in at start and fade out at end
          const alpha = p.progress < 0.18 
            ? p.progress / 0.18 
            : (p.progress > 0.82 ? (1.0 - p.progress) / 0.18 : 1.0);
          
          const drawColor = p.color.replace("alpha", (alpha * 0.85).toFixed(2));

          ctx.shadowBlur = 6;
          ctx.shadowColor = drawColor;
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.8, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = drawColor;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0; // Reset shadow
        }
      }

      // 10. Draw CAD Drawing Title Block (Bottom-Right Metadata Widget)
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
      ctx.fillText("DWG: SOF-BRAIN-2.0", bx + 6, by + 12);
      ctx.fillText("SCALE: 1:1 (PX)", bx + 6, by + 28);
      
      ctx.font = "7px Courier New, monospace";
      ctx.fillText("GRID: 100px", bx + 6, by + 44);
      ctx.fillText("UNITS: SEC", bx + 6, by + 56);
      
      ctx.fillText("CORE: ACTIVE", bx + 74, by + 44);
      ctx.fillText("STAT: OK", bx + 74, by + 56);

      // 11. Draw CAD Cursor Crosshairs & Coordinate Overlay
      if (mouse.active) {
        ctx.strokeStyle = "rgba(210, 90, 0, 0.28)";
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
        ctx.fillStyle = "rgba(210, 90, 0, 0.6)";
        ctx.font = "9px Courier New, monospace";
        ctx.textAlign = "left";
        ctx.fillText(`[X:${Math.round(mouse.x)} Y:${Math.round(mouse.y)}]`, mouse.x + 12, mouse.y - 4);
      }

      // 12. Draw Technical Cursor Trail Indicators
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
