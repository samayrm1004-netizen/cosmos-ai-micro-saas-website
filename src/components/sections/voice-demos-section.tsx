"use client";

import { PlayCircle } from "lucide-react";
import React, { useRef, useEffect } from "react";

const demoData = [
  {
    title: "Customer Support Inquiry",
    description: "AI agent handles customer inquiry in Hindi and English",
    scenario: "Customer calls with a support question",
    outcome: "Issue resolved + satisfaction confirmed",
    audioSrc: "https://rapidxai.app/audio/demo1.mp3",
  },
  {
    title: "Appointment Reminder Call",
    description: "AI agent confirms appointment and handles rescheduling",
    scenario: "Automated reminder call to customer",
    outcome: "Confirmed + calendar updated",
    audioSrc: "https://rapidxai.app/audio/demo2.mp3",
  },
  {
    title: "Lead Qualification",
    description: "AI agent qualifies incoming lead and books meeting",
    scenario: "Potential customer inquiry call",
    outcome: "Lead qualified + meeting scheduled",
    audioSrc: "https://rapidxai.app/audio/demo3.mp3",
  },
  {
    title: "Follow-up Call",
    description: "AI agent follows up on previous interaction",
    scenario: "Automated follow-up sequence",
    outcome: "Engagement maintained + next steps confirmed",
    audioSrc: "https://rapidxai.app/audio/demo4.mp3",
  },
];

interface DemoCardProps {
  title: string;
  description: string;
  scenario: string;
  outcome: string;
  audioSrc: string;
}

const DemoCard: React.FC<DemoCardProps> = ({ title, description, scenario, outcome, audioSrc }) => {
  return (
    <div className="group relative rounded-3xl p-px bg-gradient-to-b from-border/50 to-transparent hover:bg-gradient-to-br hover:from-accent-primary hover:to-accent-electric/20 transition-all duration-300">
      <div className="relative bg-background-tertiary/70 backdrop-blur-md rounded-[23px] p-6 lg:p-8 h-full flex flex-col transition-all duration-300">
        <h3 className="font-subheading text-2xl font-semibold text-text-primary">{title}</h3>
        <p className="mt-2 text-sm text-text-tertiary">{description}</p>
        
        <div className="mt-6 space-y-3 flex-grow">
          <div className="rounded-lg bg-background-accent/50 p-4 border border-border/50">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-primary">Scenario:</span>
            <p className="mt-1 text-sm text-text-secondary">{scenario}</p>
          </div>
          <div className="rounded-lg bg-background-accent/50 p-4 border border-border/50">
            <span className="text-xs font-semibold uppercase tracking-wider text-success">Outcome:</span>
            <p className="mt-1 text-sm text-text-secondary">{outcome}</p>
          </div>
        </div>

        <button className="mt-8 w-full flex items-center justify-center gap-2 rounded-xl bg-accent-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:bg-accent-primary/90 group-hover:scale-105">
          <PlayCircle className="h-5 w-5" />
          <span>Play Demo</span>
        </button>

        <div className="mt-4">
          <audio controls className="w-full audio-custom-style">
            <source src={audioSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          {/* 
            Note: The "cosmic-styled" audio player requires custom CSS targeting browser-specific pseudo-elements, 
            which should be added to a global stylesheet (e.g., globals.css) for consistent styling.
            Example for globals.css:
            .audio-custom-style { --player-accent: var(--color-accent-primary); --player-bg: var(--color-background-accent); }
            .audio-custom-style::-webkit-media-controls-panel { background-color: transparent !important; }
            .audio-custom-style::-webkit-media-controls-timeline { background: var(--player-bg); border-radius: 4px; height: 6px; margin: 0 10px; border: 1px solid var(--color-border); }
            .audio-custom-style::-webkit-media-controls-play-button, .audio-custom-style::-webkit-media-controls-mute-button { filter: invert(1); }
            .audio-custom-style::-webkit-media-controls-current-time-display, .audio-custom-style::-webkit-media-controls-time-remaining-display { color: var(--color-text-tertiary); }
          */}
        </div>
      </div>
    </div>
  );
};

const ParticleCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: { x: number, y: number, size: number, speedX: number, speedY: number, color: string }[] = [];
        const particleCount = 50;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5 + 0.5,
                    speedX: Math.random() * 0.3 - 0.15,
                    speedY: Math.random() * 0.3 - 0.15,
                    color: `rgba(229, 231, 235, ${Math.random() * 0.4 + 0.1})`
                });
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        
        resizeCanvas();
        animate();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full" />;
};


const VoiceDemosSection: React.FC = () => {
  return (
    <section id="demos" className="relative bg-background-secondary py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-background-primary to-background-secondary"></div>
        <div className="absolute inset-0 opacity-30">
            <ParticleCanvas />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-radial-gradient from-accent-primary/10 via-transparent to-transparent blur-3xl"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
                <div className="mb-6 inline-block rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-2">
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent-secondary">VOICE DEMONSTRATIONS</p>
                </div>
                <h2 className="font-heading text-4xl font-bold text-text-primary md:text-5xl mb-4">Listen to our AI voice in action</h2>
                <p className="mx-auto max-w-3xl text-lg text-text-secondary md:text-xl">Real scenarios. Human-grade conversations.</p>
                <p className="mt-4 text-sm italic text-accent-primary">Actual AI voice recordings from live deployments</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {demoData.map((demo, index) => (
                    <DemoCard key={index} {...demo} />
                ))}
            </div>

            <div className="mt-20 text-center">
                <p className="mb-4 text-xs uppercase tracking-widest text-text-tertiary font-medium">LIVE RECORDINGS</p>
                <p className="mb-8 text-lg text-text-secondary">Real AI voice agents from production deployments</p>
                <button className="rounded-full bg-gradient-to-r from-accent-primary to-indigo-500 py-4 px-8 font-semibold text-primary-foreground shadow-lg shadow-accent-primary/20 transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:shadow-accent-primary/40">
                    Get This For Your Business
                </button>
            </div>
        </div>
    </section>
  );
};

export default VoiceDemosSection;