"use client";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Cloud,
  Compass,
  Droplets,
  Mountain,
  Play,
  ShoppingBag,
  Sparkles,
  Star,
  Waves,
  Wind,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Flavors", href: "#flavors" },
  { label: "Our Story", href: "#story" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const flavors = [
  {
    id: "original",
    name: "AURA Original",
    description: "Crisp, cold, and built for the first breath of altitude.",
    accent: "#8ce8ff",
    fill: "linear-gradient(180deg, rgba(164, 246, 255, 0.92), rgba(76, 182, 238, 0.94))",
    glow: "rgba(255, 91, 91, 0.52)",
    image: "/aura-original.jpg",
    hueRotate: 0,
  },
  {
    id: "lime",
    name: "AURA Lime",
    description: "Sharp citrus sparkle with a mountain-cool finish.",
    accent: "#c8ff7f",
    fill: "linear-gradient(180deg, rgba(213, 255, 139, 0.92), rgba(90, 208, 131, 0.88))",
    glow: "rgba(165, 255, 130, 0.42)",
    image: "/aura-lime.jpg",
    hueRotate: 42,
  },
  {
    id: "berry",
    name: "AURA Berry",
    description: "Wild fruit energy with a soft blue haze and bright lift.",
    accent: "#ffb5f8",
    fill: "linear-gradient(180deg, rgba(255, 189, 242, 0.85), rgba(152, 119, 255, 0.85))",
    glow: "rgba(208, 143, 255, 0.45)",
    image: "/aura-berry.jpg",
    hueRotate: 180,
  },
  {
    id: "citrus",
    name: "AURA Citrus",
    description: "A vibrant rush of orange and sky-blue refreshment.",
    accent: "#ffd66b",
    fill: "linear-gradient(180deg, rgba(255, 213, 129, 0.92), rgba(255, 140, 96, 0.88))",
    glow: "rgba(255, 202, 95, 0.42)",
    image: "/aura-citrus.jpg",
    hueRotate: -18,
  },
  {
    id: "frostbite",
    name: "AURA Frostbite",
    description: "Pure icy white refreshment glowing with winter cold.",
    accent: "#ffffff",
    fill: "linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(180, 180, 180, 0.94))",
    glow: "rgba(255, 255, 255, 0.42)",
    image: "/aura-frostbite.jpg",
    hueRotate: -60,
  },
  {
    id: "midnight",
    name: "AURA Midnight",
    description: "Deep dark berry with a mysterious midnight purple chill.",
    accent: "#6a0dad",
    fill: "linear-gradient(180deg, rgba(147, 112, 219, 0.92), rgba(75, 0, 130, 0.94))",
    glow: "rgba(138, 43, 226, 0.42)",
    image: "/aura-berry.jpg",
    hueRotate: 250,
  },
  {
    id: "alpine",
    name: "AURA Alpine",
    description: "Rich forest pine and lime zest for a fresh alpine breeze.",
    accent: "#006400",
    fill: "linear-gradient(180deg, rgba(60, 179, 113, 0.92), rgba(34, 139, 34, 0.94))",
    glow: "rgba(46, 139, 87, 0.42)",
    image: "/aura-lime.jpg",
    hueRotate: 95,
  }
];

const reviews = [
  { name: "Sarah L.", role: "Mountaineer", text: "The perfect companion for high altitudes. Crisp, clean, and absolutely refreshing." },
  { name: "James M.", role: "Creative Director", text: "A design masterpiece in a bottle. The taste is as premium as it looks." },
  { name: "Elena R.", role: "Fitness Athlete", text: "Pure energy without the crash. My go-to after every intense session." }
];

const featureCards = [
  {
    icon: Droplets,
    title: "Crisp & Refreshing",
    text: "Cold from the peaks, crisp to the last sip.",
  },
  {
    icon: Zap,
    title: "Bold Flavor",
    text: "Energetic taste built for movement and momentum.",
  },
  {
    icon: Mountain,
    title: "Mountain Inspired",
    text: "Naturally fresh ingredients, elevated by altitude.",
  },
  {
    icon: Sparkles,
    title: "Made for Every Moment",
    text: "From sunrise trails to late-night city lights.",
  },
];

function MagneticButton({
  children,
  className = "",
  variant = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.18, y: y * 0.18 });
  };

  return (
    <motion.button
      type="button"
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{ x: offset.x, y: offset.y }}
      className={[
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300",
        variant === "primary"
          ? "bg-linear-to-r from-fuchsia-400 via-violet-500 to-emerald-400 text-slate-950 shadow-[0_20px_55px_rgba(216,180,254,0.42)]"
          : "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10",
        className,
      ].join(" ")}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span
        className={[
          "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          variant === "primary" ? "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent_60%)]" : "bg-white/5",
        ].join(" ")}
      />
    </motion.button>
  );
}

function ProductBottle({
  imageSrc,
  label,
  glow,
  size = "md",
  hueRotate = 0,
}: {
  imageSrc?: string;
  label: string;
  glow: string;
  size?: "sm" | "md" | "lg" | "xl";
  hueRotate?: number;
}) {
  const sizes = {
    sm: "h-36 w-24",
    md: "h-64 w-40",
    lg: "h-80 w-52",
    xl: "h-144 w-88",
  };

  const src = imageSrc || "/aura-original.jpg";

  return (
    <motion.div
      whileHover={{ rotate: 4, y: -8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`relative ${sizes[size]} overflow-hidden rounded-4xl border border-white/10`}
      style={{
        filter: `drop-shadow(0 35px 48px rgba(59, 130, 246, 0.45)) contrast(1.08) saturate(1.25)`,
        background: `radial-gradient(circle at 50% 18%, rgba(255, 84, 84, 0.24) 0%, rgba(255,255,255,0.08) 24%, rgba(8,18,28,0.8) 58%, rgba(2,6,12,0.92) 100%)`,
        boxShadow: `inset 0 0 32px rgba(255,255,255,0.22), 0 22px 52px rgba(59, 130, 246, 0.38), 0 0 32px rgba(255, 84, 84, 0.18)`,
      }}
    >
      <div className="absolute inset-x-4 top-3 h-6 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm" />
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover opacity-100 contrast-125 saturate-150"
        style={{
          filter: `hue-rotate(${hueRotate}deg) saturate(2.1) brightness(1.08)`,
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),transparent_28%,transparent_72%,rgba(2,6,12,0.75))]" />
      <div className="absolute inset-x-4 bottom-5 rounded-full border border-red-200/20 bg-slate-950/55 px-2 py-1 text-center text-[0.55rem] font-black uppercase tracking-[0.42em] text-white/90 backdrop-blur-md">
        {label}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 22, mass: 0.2 });
  const [scrolled, setScrolled] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrolled(latest > 0.08);

    const orbitSection = document.getElementById("orbit-section");
    if (!orbitSection) return;

    const rect = orbitSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const localProgress = (windowHeight - rect.top) / (rect.height + windowHeight);
    const clamped = Math.min(Math.max(localProgress, 0), 1);
    const index = Math.round(clamped * (flavors.length - 1));
    setSelectedFlavor(index);
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const mountainY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const cloudX = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const barScaleX = useTransform(progress, [0, 1], [0, 1]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#03131f] text-white">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-120 hidden h-160 w-160 rounded-full bg-[radial-gradient(circle_at_center,rgba(110,231,255,0.12),rgba(152,119,255,0.05),transparent_60%)] blur-[80px] mix-blend-screen md:block"
        animate={{ x: cursor.x - 320, y: cursor.y - 320 }}
        transition={{ type: "spring", stiffness: 50, damping: 25, mass: 0.8 }}
      />

      <motion.div
        className="fixed left-0 top-0 z-100 h-1 w-full origin-left bg-linear-to-r from-fuchsia-400 via-violet-500 to-emerald-400"
        style={{ scaleX: barScaleX }}
      />

      <header className="fixed inset-x-0 top-0 z-50">
        <motion.nav
          initial={false}
          animate={{
            backgroundColor: scrolled ? "rgba(5, 14, 22, 0.48)" : "rgba(5, 14, 22, 0)",
            backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
            borderColor: scrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)",
          }}
          className="mx-auto mt-4 flex w-[min(92vw,1280px)] items-center justify-between rounded-full border px-5 py-3 transition-all duration-300"
        >
          <a href="#home" className="text-xl font-black tracking-[0.45em] text-white">
            AURA
          </a>

          <div className="hidden items-center gap-7 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-slate-200 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-cyan-200">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button type="button" className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/80 md:inline-flex">
              Shop Now
            </button>
            <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden" aria-label="Open menu">
              <span className="flex h-4 w-4 flex-col justify-between">
                <span className="block h-px w-full bg-white" />
                <span className="block h-px w-full bg-white" />
                <span className="block h-px w-full bg-white" />
              </span>
            </button>
          </div>
        </motion.nav>
      </header>

      <section id="home" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/mountain-bg.jpg" alt="Mountain landscape" fill className="object-cover object-bottom" priority />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#010609]/60 to-[#010609]" />
        </div>

        <motion.div style={{ y: cloudX }} className="pointer-events-none absolute inset-x-0 top-20 h-40 z-0">
          <div className="cloud left-[10%] top-6 h-12 w-40 opacity-70" />
          <div className="cloud left-[35%] top-16 h-14 w-52 opacity-60" />
          <div className="cloud left-[66%] top-8 h-10 w-36 opacity-75" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-screen w-[min(92vw,1280px)] items-center pb-16 pt-28">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl"
            >
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-fuchsia-200/20 bg-white/5 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-fuchsia-100 backdrop-blur-md">
                <Star className="h-3.5 w-3.5 fill-fuchsia-200 text-fuchsia-200" />
                Mountain-crafted refreshment
              </div>

              <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-tight text-white sm:text-6xl lg:text-8xl">
                Taste the <span className="text-fuchsia-300">Rush.</span>
              </h1>

              <p className="mt-6 max-w-md text-lg leading-8 text-slate-200">
                Born in the mountains. Crafted for your next adventure.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <MagneticButton>
                  Explore Flavors <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton variant="secondary">
                  <Play className="h-4 w-4 fill-current" />
                  Discover AURA
                </MagneticButton>
              </div>

              <div className="mt-12 flex items-center gap-8 text-slate-200/80">
                <div>
                  <div className="text-3xl font-black text-white">4</div>
                  <div className="text-[0.6rem] uppercase tracking-[0.22em]">Mountain blends</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">0%</div>
                  <div className="text-[0.6rem] uppercase tracking-[0.22em]">Artificial taste</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              style={{ y: heroY }}
              className="relative mx-auto flex w-full max-w-140 items-center justify-center"
            >
              <div className="absolute h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(110,231,255,0.35),rgba(95,118,255,0.14),transparent_70%)] blur-[120px]" />
              <motion.div
                animate={{ rotate: [0, 3, -3, 0], y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <ProductBottle label="AURA" imageSrc="/aura-original.jpg" glow="rgba(255, 76, 76, 0.7)" size="xl" hueRotate={180} />
              </motion.div>

              <div className="absolute bottom-10 left-8 h-20 w-20 rounded-full border border-cyan-200/25 bg-[radial-gradient(circle,rgba(103,232,249,0.22),rgba(255,255,255,0.04))] backdrop-blur-md" />
              <div className="absolute bottom-8 right-8 h-28 w-28 rounded-[30%] border border-cyan-200/20 bg-[radial-gradient(circle,rgba(125,211,252,0.16),rgba(255,255,255,0.04))] backdrop-blur-sm" />
              <div className="absolute bottom-20 left-1/2 h-10 w-36 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.32),transparent_70%)] blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="scrolling-ticker-wrapper">
        <div className="scrolling-ticker text-sm font-black uppercase tracking-[0.4em] text-violet-100/40">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 px-6">
              <span>PURE ELEVATION</span>
              <span>•</span>
              <span>0% ARTIFICIAL</span>
              <span>•</span>
              <span>MOUNTAIN CRAFTED</span>
              <span>•</span>
              <span>ICE COLD RUSH</span>
              <span>•</span>
              <span>PREMIUM TASTE</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      <section id="experience" className="relative mx-auto w-[min(92vw,1280px)] py-20 md:py-32">
        <div className="flex items-end justify-between gap-4 pb-10">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-fuchsia-200">AURA essentials</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.06em] text-white md:text-5xl">
              Choose Your Vibe
            </h2>
          </div>
          <div className="hidden items-center gap-2 text-slate-200 md:flex">
            <Compass className="h-4 w-4 text-fuchsia-300" />
            <span className="text-[0.7rem] uppercase tracking-[0.2em]">crafted for motion</span>
          </div>
        </div>

        <div id="orbit-section" className="relative grid items-center gap-10 rounded-4xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(40,116,151,0.35),rgba(7,21,30,0.8))] p-6 shadow-[0_30px_80px_rgba(3,17,24,0.8)] md:p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative mx-auto h-105 w-full max-w-155">
            <div className="absolute inset-12 rounded-full border border-white/10" />
            <div className="absolute inset-20 rounded-full border border-cyan-200/15" />

            {flavors.map((flavor, index) => {
              const selected = index === selectedFlavor;
              const angle = (index - selectedFlavor) * (Math.PI / (flavors.length / 2.5));
              const radiusX = 200;
              const radiusY = 92;
              const x = Math.cos(angle) * radiusX;
              const y = Math.sin(angle) * radiusY;

              return (
                <motion.div
                  key={flavor.id}
                  animate={{
                    x,
                    y,
                    scale: selected ? 1.18 : 0.86,
                    opacity: selected ? 1 : 0.76,
                    rotate: selected ? 0 : index % 2 === 0 ? 9 : -9,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <motion.div whileHover={{ y: -10 }} className="cursor-pointer">
                    <ProductBottle
                      label={flavor.name.split(" ")[1] || "AURA"}
                      imageSrc={flavor.image}
                      glow={flavor.glow}
                      size={selected ? "lg" : "md"}
                      hueRotate={flavor.hueRotate}
                    />
                  </motion.div>
                </motion.div>
              );
            })}

            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <div className="h-20 w-20 rounded-full border border-cyan-200/20 bg-white/5 backdrop-blur-md" />
            </div>
          </div>

          <motion.div
            key={selectedFlavor}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-slate-950/30 p-6 backdrop-blur-md md:p-8"
          >
            <div
              className="mb-6 inline-flex rounded-full border border-white/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-fuchsia-100"
              style={{ background: `linear-gradient(90deg, ${flavors[selectedFlavor].glow}, transparent)` }}
            >
              Featured selection
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter text-white md:text-4xl">
              {flavors[selectedFlavor].name}
            </h3>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-200/85">
              {flavors[selectedFlavor].description}
            </p>

            <div className="mt-8 flex gap-3">
              <MagneticButton>Shop now</MagneticButton>
              <MagneticButton variant="secondary">Learn more</MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="story" className="relative mt-8 overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(138,194,255,0.15),transparent_28%),radial-gradient(circle_at_75%_40%,rgba(58,132,160,0.1),transparent_32%)]" />
        <div className="relative mx-auto w-[min(92vw,1280px)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-8 max-w-2xl"
          >
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-fuchsia-200">From the peaks</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white md:text-6xl">
              Pure inspiration from the places where the air feels different.
            </h2>
          </motion.div>

          <div className="relative h-140 w-full overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
            <Image src="/mountain-bg.jpg" alt="Mountain peaks" fill className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-[#010609] via-[#010609]/40 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:bg-white/10">
                <div className="text-3xl font-black text-fuchsia-300">10,000+</div>
                <div className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-300">Ft. Elevation Sourced</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:bg-white/10">
                <div className="text-3xl font-black text-fuchsia-300">100%</div>
                <div className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-300">Glacial Purity</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:bg-white/10">
                <div className="text-3xl font-black text-fuchsia-300">0%</div>
                <div className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-300">Artificial Flavors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative my-8 flex min-h-[90vh] items-center justify-center overflow-hidden px-4"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(130,222,255,0.28),rgba(7,20,29,0.9)_36%,rgba(2,11,17,1)_100%)]" />
        <div className="absolute inset-0 opacity-80" style={{ background: "linear-gradient(120deg, rgba(255,255,255,0.06), transparent 30%, rgba(138,206,255,0.12) 60%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-[radial-gradient(circle_at_center,rgba(147,215,255,0.32),transparent_55%)]" />
        <div className="relative z-10 text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.38em] text-violet-100">Follow the current</p>
          <h2 className="mt-6 text-5xl font-black uppercase tracking-tight text-white md:text-7xl">
            Shift into a colder rhythm.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-200/80">
            A premium pulse of mountain air, icy sparkle, and bright flavor designed for every bold move.
          </p>
        </div>
      </motion.section>

      <section id="flavors" className="mx-auto w-[min(92vw,1280px)] py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-fuchsia-200">Premium lineup</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.06em] text-white md:text-5xl">
              Find your flow
            </h2>
          </div>
          <div className="hidden items-center gap-2 text-slate-200 md:flex">
            <Waves className="h-4 w-4 text-fuchsia-300" />
            <span className="text-[0.7rem] uppercase tracking-[0.2em]">Cold by design</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {flavors.map((flavor) => (
            <motion.article
              key={flavor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="group rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,31,44,0.7),rgba(6,18,26,0.95))] p-5 shadow-[0_20px_60px_rgba(3,15,23,0.5)]"
            >
              <div className="flex justify-center overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(82,216,255,0.25),rgba(10,20,28,0.75))] p-5">
                <ProductBottle label={flavor.name.split(" ")[1] || "AURA"} imageSrc={flavor.image} glow={flavor.glow} size="md" hueRotate={flavor.hueRotate} />
              </div>
              <div className="mt-5 flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold uppercase tracking-tight text-white">{flavor.name}</h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-fuchsia-200">AURA</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{flavor.description}</p>
              <button type="button" className="mt-6 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-fuchsia-200 transition group-hover:text-fuchsia-100">
                Explore Flavor <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="lifestyle" className="relative mt-10 overflow-hidden py-32 md:py-48">
        <div className="absolute inset-0">
          <Image src="/mountain-bg.jpg" alt="AURA Lifestyle" fill className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-[#010406] via-[#010609]/95 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-[#010406] via-transparent to-[#010406]/80" />
        </div>
        
        <div className="relative z-10 mx-auto grid w-[min(92vw,1280px)] items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="block h-px w-8 bg-fuchsia-400"></span>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-fuchsia-200">The AURA Lifestyle</p>
            </div>
            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-7xl">
              Elevate <br/> <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-slate-500">Your Everyday</span>
            </h2>
            <p className="mt-8 text-base font-light leading-8 tracking-wide text-slate-300">
              Whether you're conquering mountain peaks or navigating the corporate landscape, AURA provides the crystal-clear energy and premium refreshment you need to perform at your absolute best. Hold the power of the glacier in your hand.
            </p>
            <div className="mt-10">
              <MagneticButton variant="secondary" className="border-fuchsia-200/30 text-fuchsia-50 hover:bg-fuchsia-900/20 hover:border-fuchsia-200/60">
                Discover the lifestyle <ArrowRight className="h-4 w-4 opacity-70" />
              </MagneticButton>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto w-full max-w-105"
          >
            <div className="absolute -inset-1 rounded-[2.5rem] bg-linear-to-br from-cyan-300/20 via-transparent to-indigo-500/10 blur-xl" />
            <div className="aspect-3/4 relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#010609]/40 backdrop-blur-2xl shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_40%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,20,28,0.2),rgba(2,7,12,0.5))]" />

              <div className="absolute inset-0 flex items-center justify-center p-8">
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 3, -2, 0], scale: [1, 1.02, 1] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <ProductBottle label="AURA" imageSrc="/aura-original.jpg" glow="rgba(255, 76, 76, 0.72)" size="xl" />
                </motion.div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-center">
                <div className="rounded-full border border-fuchsia-200/20 bg-slate-950/55 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.28em] text-fuchsia-100 backdrop-blur-md">
                  Peak performance
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-y-0 left-0 right-0 bg-[radial-gradient(circle_at_center,rgba(138,194,255,0.18),transparent_26%)]" />
        <div className="relative mx-auto w-[min(92vw,1280px)]">
          <div className="mb-10 text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-fuchsia-200">Crafted for the adventure</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.06em] text-white md:text-5xl">
              Why AURA
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-fuchsia-300/30 to-emerald-400/20 text-fuchsia-200 ring-1 ring-inset ring-white/10">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="relative mt-20 overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <Image src="/mountain-bg.jpg" alt="Mountain backdrop" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-linear-to-b from-[#010609] via-[#010609]/60 to-[#010609]" />
        </div>
        
        <div className="relative z-10 mx-auto w-[min(92vw,1280px)]">
          <div className="mb-16 text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-fuchsia-200">Voices from the peaks</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.06em] text-white md:text-5xl">
              Elevated Reviews
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:bg-white/10"
              >
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-fuchsia-200 text-fuchsia-200" />
                  ))}
                </div>
                <p className="mb-8 text-base leading-7 text-slate-300">"{review.text}"</p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-900/40 font-bold text-fuchsia-200 ring-1 ring-white/20">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-white">{review.name}</h4>
                    <p className="text-xs text-slate-400">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative my-10 overflow-hidden py-14 md:py-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(98,220,255,0.35),rgba(8,26,35,0.85)_40%,rgba(3,16,23,1)_100%)]" />
        <div className="absolute inset-0 opacity-90" style={{ backgroundImage: "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)" }} />
        <div className="relative mx-auto flex w-[min(92vw,1280px)] items-center justify-between gap-8 rounded-[2.2rem] border border-white/10 bg-slate-950/20 px-6 py-10 backdrop-blur-lg md:px-10">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-violet-100">AURA experience</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.06em] text-white md:text-5xl">
              Pure momentum. Cold clarity.
            </h2>
          </div>
          <MagneticButton>Shop the collection</MagneticButton>
        </div>
      </motion.section>

      <section className="mx-auto w-[min(92vw,1280px)] pb-20 pt-10">
        <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,27,39,0.8),rgba(8,18,26,1))] p-6 md:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-fuchsia-200">Ready to feel the rush?</p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
                Grab your favorite AURA flavor and start your next adventure.
              </h2>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <MagneticButton>Shop now</MagneticButton>
                <MagneticButton variant="secondary">Explore Flavors</MagneticButton>
              </div>
            </div>

            <div className="relative flex min-h-105 items-center justify-center">
              <div className="absolute inset-x-12 bottom-0 h-32 rounded-full bg-fuchsia-200/10 blur-3xl" />
              <div className="absolute inset-0 rounded-4xl bg-[radial-gradient(circle_at_top,rgba(124,211,255,0.4),transparent_30%),linear-gradient(180deg,rgba(39,79,94,0.5),rgba(8,18,27,0.8))]" />
              <motion.div animate={{ y: [0, -10, 0], rotate: [0, 3, -2, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="relative z-10">
                <ProductBottle label="AURA" imageSrc="/aura-original.jpg" glow="rgba(255, 76, 76, 0.65)" size="xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 bg-[#020d13] py-10">
        <div className="mx-auto grid w-[min(92vw,1280px)] gap-8 md:grid-cols-[1fr_0.6fr_1fr]">
          <div>
            <div className="text-xl font-black tracking-[0.42em] text-white">AURA</div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
              Crafted for bold moments and mountain air.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-cyan-200">
                {item.label}
              </a>
            ))}
          </div>

          <div>
            <div className="mb-4 text-[0.7rem] uppercase tracking-[0.28em] text-fuchsia-200">Newsletter</div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                aria-label="Email address"
                placeholder="your@email.com"
                className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-200/40 focus:outline-none"
              />
              <button type="button" className="rounded-full bg-cyan-300 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-950">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 flex w-[min(92vw,1280px)] flex-col gap-3 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.18em] text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© 2026 AURA</span>
          <span>Born in the mountains. Built for the rush.</span>
        </div>
      </footer>
    </main>
  );
}
