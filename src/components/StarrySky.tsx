"use client";
import React, { useEffect, useRef } from "react";

const StarrySky: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
    const stars: Particle[] = [];
    const shootingStars: Particle[] = [];
    const layers = [
      { speed: 0.015, scale: 0.2, count: 320 },
      { speed: 0.03, scale: 0.5, count: 50 },
      { speed: 0.05, scale: 0.75, count: 30 },
    ];
    const starsAngle = 150;
    const shootingStarSpeed = { min: 15, max: 40 };
    const shootingStarOpacityDelta = 0.05;
    const trailLengthDelta = 0.05;
    const shootingStarEmittingInterval = 700;
    const shootingStarLifeTime = 500;
    const maxTrailLength = 300;
    const starBaseRadius = 2;
    const shootingStarRadius = 10;
    let paused = false;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    function lineToAngle(
      x1: number,
      y1: number,
      length: number,
      radians: number
    ) {
      const x2 = x1 + length * Math.cos(radians);
      const y2 = y1 + length * Math.sin(radians);
      return { x: x2, y: y2 };
    }

    function randomRange(min: number, max: number) {
      return min + Math.random() * (max - min);
    }

    function degreesToRads(degrees: number) {
      return (degrees / 180) * Math.PI;
    }

    class Particle {
      x = 0;
      y = 0;
      vx = 0;
      vy = 0;
      radius = 0;
      opacity = 0;
      trailLengthDelta = 0;
      isSpawning = false;
      isDying = false;
      isDead = false;

      static create(x: number, y: number, speed: number, direction: number) {
        const particle = new Particle();
        particle.x = x;
        particle.y = y;
        particle.vx = Math.cos(direction) * speed;
        particle.vy = Math.sin(direction) * speed;
        return particle;
      }

      getSpeed() {
        return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      }

      setSpeed(speed: number) {
        const heading = this.getHeading();
        this.vx = Math.cos(heading) * speed;
        this.vy = Math.sin(heading) * speed;
      }

      getHeading() {
        return Math.atan2(this.vy, this.vx);
      }

      setHeading(heading: number) {
        const speed = this.getSpeed();
        this.vx = Math.cos(heading) * speed;
        this.vy = Math.sin(heading) * speed;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    for (let j = 0; j < layers.length; j++) {
      const layer = layers[j];
      for (let i = 0; i < layer.count; i++) {
        const star = Particle.create(
          randomRange(0, width),
          randomRange(0, height),
          0,
          0
        );
        star.radius = starBaseRadius * layer.scale;
        star.setSpeed(layer.speed);
        star.setHeading(degreesToRads(starsAngle));
        stars.push(star);
      }
    }

    function createShootingStar() {
      const shootingStar = Particle.create(
        randomRange(width / 2, width),
        randomRange(0, height / 2),
        0,
        0
      );
      shootingStar.setSpeed(
        randomRange(shootingStarSpeed.min, shootingStarSpeed.max)
      );
      shootingStar.setHeading(degreesToRads(starsAngle));
      shootingStar.radius = shootingStarRadius;
      shootingStar.opacity = 0;
      shootingStar.trailLengthDelta = 0;
      shootingStar.isSpawning = true;
      shootingStar.isDying = false;
      shootingStars.push(shootingStar);
    }

    function killShootingStar(shootingStar: Particle) {
      setTimeout(() => {
        shootingStar.isDying = true;
      }, shootingStarLifeTime);
    }

    function update() {
      if (!paused) {
        context?.clearRect(0, 0, width, height);
        if (context) {
          context.fillStyle = "#000000";
          context.fillRect(0, 0, width, height);
          context.fill();

          for (const star of stars) {
            star.update();
            drawStar(star);
            if (star.x > width) {
              star.x = 0;
            }
            if (star.x < 0) {
              star.x = width;
            }
            if (star.y > height) {
              star.y = 0;
            }
            if (star.y < 0) {
              star.y = height;
            }
          }

          for (const shootingStar of shootingStars) {
            if (shootingStar.isSpawning) {
              shootingStar.opacity += shootingStarOpacityDelta;
              if (shootingStar.opacity >= 1.0) {
                shootingStar.isSpawning = false;
                killShootingStar(shootingStar);
              }
            }
            if (shootingStar.isDying) {
              shootingStar.opacity -= shootingStarOpacityDelta;
              if (shootingStar.opacity <= 0.0) {
                shootingStar.isDying = false;
                shootingStar.isDead = true;
              }
            }
            shootingStar.trailLengthDelta += trailLengthDelta;
            shootingStar.update();
            if (shootingStar.opacity > 0.0) {
              drawShootingStar(shootingStar);
            }
          }

          for (let i = shootingStars.length - 1; i >= 0; i--) {
            if (shootingStars[i].isDead) {
              shootingStars.splice(i, 1);
            }
          }
        }
      }
      requestAnimationFrame(update);
    }

    function drawStar(star: Particle) {
      if (context) {
        context.fillStyle = "rgb(255, 221, 157)";
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        context.fill();
      }
    }

    function drawShootingStar(p: Particle) {
      if (context) {
        const x = p.x;
        const y = p.y;
        const currentTrailLength = maxTrailLength * p.trailLengthDelta;
        const pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());

        context.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        const starLength = 5;
        context.beginPath();
        context.moveTo(x - 1, y + 1);
        context.lineTo(x, y + starLength);
        context.lineTo(x + 1, y + 1);
        context.lineTo(x + starLength, y);
        context.lineTo(x + 1, y - 1);
        context.lineTo(x, y + 1);
        context.lineTo(x, y - starLength);
        context.lineTo(x - 1, y - 1);
        context.lineTo(x - starLength, y);
        context.lineTo(x - 1, y + 1);
        context.lineTo(x - starLength, y);
        context.closePath();
        context.fill();

        context.fillStyle = `rgba(255, 221, 157, ${p.opacity})`;
        context.beginPath();
        context.moveTo(x - 1, y - 1);
        context.lineTo(pos.x, pos.y);
        context.lineTo(x + 1, y + 1);
        context.closePath();
        context.fill();
      }
    }

    update();

    const shootingStarInterval = setInterval(() => {
      if (paused) return;
      createShootingStar();
    }, shootingStarEmittingInterval);

    const handleFocus = () => (paused = false);
    const handleBlur = () => (paused = true);

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    return () => {
      clearInterval(shootingStarInterval);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      className="absolute top-0 left-0 -z-10 w-full"
    />
  );
};

export default StarrySky;
