'use client';

import { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
    type: 'star' | 'cross';
}

interface Meteor {
    x: number;
    y: number;
    length: number;
    speed: number;
    angle: number;
}

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        let meteors: Meteor[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const starCount = Math.floor((canvas.width * canvas.height) / 6000);

            for (let i = 0; i < starCount; i++) {
                const type = Math.random() > 0.95 ? 'cross' : 'star';
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: type === 'cross' ? Math.random() * 2.5 + 1.0 : Math.random() * 2 + 0.5,
                    opacity: Math.random(),
                    speed: Math.random() * 0.02,
                    type: type
                });
            }
        };

        const createMeteor = () => {
            const meteor: Meteor = {
                x: Math.random() * (canvas.width + 500) - 200, // Wider range to cover screen from right
                y: -100,
                length: Math.random() * 80 + 20,
                speed: Math.random() * 10 + 5,
                angle: (3 * Math.PI) / 4 + (Math.random() * 0.2 - 0.1) // ~135 degrees (Top-Right to Bottom-Left)
            };
            meteors.push(meteor);
        };

        const drawStar = (star: Star) => {
            if (star.type === 'cross') {
                ctx.save();
                ctx.translate(star.x, star.y);

                const size = star.size * 12; // Longer spikes

                // Horizontal spike with gradient
                const gradH = ctx.createLinearGradient(-size, 0, size, 0);
                gradH.addColorStop(0, `rgba(255, 255, 255, 0)`);
                gradH.addColorStop(0.5, `rgba(255, 255, 255, ${star.opacity})`);
                gradH.addColorStop(1, `rgba(255, 255, 255, 0)`);

                ctx.beginPath();
                ctx.strokeStyle = gradH;
                ctx.lineWidth = 0.5;
                ctx.moveTo(-size, 0);
                ctx.lineTo(size, 0);
                ctx.stroke();

                // Vertical spike with gradient
                const gradV = ctx.createLinearGradient(0, -size, 0, size);
                gradV.addColorStop(0, `rgba(255, 255, 255, 0)`);
                gradV.addColorStop(0.5, `rgba(255, 255, 255, ${star.opacity})`);
                gradV.addColorStop(1, `rgba(255, 255, 255, 0)`);

                ctx.beginPath();
                ctx.strokeStyle = gradV;
                ctx.moveTo(0, -size);
                ctx.lineTo(0, size);
                ctx.stroke();

                // Bright center
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.arc(0, 0, star.size * 0.3, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            } else {
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        const drawMeteor = (meteor: Meteor) => {
            const endX = meteor.x - meteor.length * Math.cos(meteor.angle);
            const endY = meteor.y - meteor.length * Math.sin(meteor.angle);

            const gradient = ctx.createLinearGradient(meteor.x, meteor.y, endX, endY);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(meteor.x, meteor.y);
            ctx.lineTo(endX, endY);
            ctx.stroke();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw and update stars
            stars.forEach(star => {
                star.opacity += star.speed;
                if (star.opacity > 1 || star.opacity < 0) {
                    star.speed = -star.speed;
                }
                drawStar(star);
            });

            // Draw and update meteors
            if (Math.random() < 0.02) { // Chance to spawn meteor
                createMeteor();
            }

            meteors.forEach((meteor, index) => {
                meteor.x += meteor.speed * Math.cos(meteor.angle);
                meteor.y += meteor.speed * Math.sin(meteor.angle);

                drawMeteor(meteor);

                if (meteor.y > canvas.height + 100 || meteor.x > canvas.width + 100) {
                    meteors.splice(index, 1);
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    );
}
