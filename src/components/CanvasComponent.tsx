"use client";
import { useEffect, useRef } from "react";

const CanvasComponent = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const mouseMovedRef = useRef<boolean>(false);
  const mouseRef = useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const params = {
    pointsNumber: 30,
    widthFactor: 3, // change the size of sperm
    spring: 0.25,
    friction: 0.5,
  };

  const trail = useRef(
    new Array(params.pointsNumber).fill(0).map(() => ({
      x: mouseRef.current.x,
      y: mouseRef.current.y,
      dx: 0,
      dy: 0,
    }))
  ).current;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctxRef.current = ctx;
        setupCanvas();
        update(0);
      }
    }
    const updateMousePosition = (eX: number, eY: number) => {
      mouseRef.current.x = eX;
      mouseRef.current.y = eY;
    };
    const handleResize = () => {
      setupCanvas();
    };
    const handleMouseClick = (e: MouseEvent) => {
      updateMousePosition(e.pageX, e.pageY - window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      mouseMovedRef.current = true;
      const rect = canvasRef.current.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    window.addEventListener("click", handleMouseClick);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("click", handleMouseClick);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    const container = canvasContainerRef.current;
    if (canvas && container) {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    }
  };

  const update = (t: number) => {
    const ctx = ctxRef.current;
    if (ctx) {
      if (!mouseMovedRef.current) {
        mouseRef.current.x =
          (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) *
          window.innerWidth;
        mouseRef.current.y =
          (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.sin(0.01 * t)) *
          window.innerHeight;
      }
      ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
      trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? mouseRef.current : trail[pIdx - 1];
        const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvasRef.current!.width,
        canvasRef.current!.height
      );
      gradient.addColorStop(0, "rgb(255, 255, 0,0.2)");
      gradient.addColorStop(1, "rgb(255, 255, 0,0.2)");

      ctx.strokeStyle = gradient;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
      }

      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.stroke();

      window.requestAnimationFrame(update);
    }
  };

  return (
    <div
      ref={canvasContainerRef}
      className="absolute top-0 left-0 w-full h-full  "
    >
      <canvas ref={canvasRef} id="canvas1" className="w-full h-full -z-10" />
    </div>
  );
};

export default CanvasComponent;
