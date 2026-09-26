const C = {
  ground: '#0f0e12',
  surface: '#18161d',
  ember: '#e8a547',
  moon: '#7d9bb3',
  bone: '#e6dfd3',
  muted: '#958e9e',
  line: '#2a2631',
};

type Draw = (ctx: CanvasRenderingContext2D, w: number, h: number) => void;

function fit(canvas: HTMLCanvasElement) {
  const r = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, Math.round(r.width * dpr));
  canvas.height = Math.max(1, Math.round(r.height * dpr));
  const ctx = canvas.getContext('2d')!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w: r.width, h: r.height };
}

const scenes = {
  olvidaron(ctx, w, h) {
    const s = Math.max(14, Math.round(w / 18));
    for (let y = 0; y < h; y += s) {
      for (let x = 0; x < w; x += s) {
        const k = ((x / s) * 7 + (y / s) * 13) % 5;
        ctx.fillStyle = k === 0 ? '#141218' : '#19161e';
        ctx.fillRect(x + 1, y + 1, s - 2, s - 2);
      }
    }
    for (let i = 0; i < 4; i++) {
      ctx.fillStyle = `rgba(10,9,12,${0.5 + i * 0.12})`;
      ctx.fillRect(w * 0.72 + i * s * 0.6, h * 0.25 + i * s * 0.6, s * 2.2, s * 0.6);
    }
    const cx = w * 0.38;
    const cy = h * 0.58;
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.32);
    g.addColorStop(0, 'rgba(232,165,71,0.35)');
    g.addColorStop(1, 'rgba(10,9,12,0.92)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = C.ember;
    ctx.fillRect(cx - 3, cy - 10, 6, 12);
    ctx.fillStyle = C.bone;
    ctx.fillRect(cx - 4, cy + 2, 8, 10);
  },

  hide(ctx, w, h) {
    ctx.fillStyle = '#121419';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#1f2229';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 22) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 22) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    ctx.fillStyle = '#23262e';
    ctx.fillRect(w * 0.1, h * 0.2, w * 0.18, h * 0.5);
    ctx.fillRect(w * 0.55, h * 0.62, w * 0.3, h * 0.14);
    const gx = w * 0.7;
    const gy = h * 0.28;
    ctx.fillStyle = 'rgba(125,155,179,0.22)';
    ctx.beginPath();
    ctx.moveTo(gx, gy);
    ctx.arc(gx, gy, w * 0.42, Math.PI * 0.62, Math.PI * 0.98);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = C.moon;
    ctx.beginPath();
    ctx.arc(gx, gy, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = C.ember;
    ctx.beginPath();
    ctx.arc(w * 0.36, h * 0.8, 5, 0, Math.PI * 2);
    ctx.fill();
  },

  gravity(ctx, w, h) {
    ctx.fillStyle = '#101116';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#262a33';
    ctx.fillRect(0, 0, w, h * 0.16);
    ctx.fillRect(0, h * 0.84, w, h * 0.16);
    ctx.fillRect(w * 0.55, h * 0.16, w * 0.12, h * 0.2);
    ctx.fillRect(w * 0.25, h * 0.64, w * 0.12, h * 0.2);
    ctx.strokeStyle = 'rgba(232,165,71,0.5)';
    ctx.setLineDash([4, 6]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.18, h * 0.8);
    ctx.quadraticCurveTo(w * 0.45, h * 0.5, w * 0.78, h * 0.2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = C.ember;
    ctx.fillRect(w * 0.78 - 8, h * 0.16, 16, 16);
  },

  guardian(ctx, w, h) {
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#161a24');
    sky.addColorStop(1, '#0d0e13');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = C.bone;
    ctx.globalAlpha = 0.6;
    for (let i = 0; i < 26; i++) ctx.fillRect((i * 97) % w, (i * 53) % (h * 0.45), 1.2, 1.2);
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#1c1f28';
    ctx.beginPath();
    ctx.moveTo(0, h * 0.62);
    const ridge: [number, number][] = [[0.15, 0.42], [0.3, 0.55], [0.48, 0.3], [0.62, 0.5], [0.8, 0.36], [1, 0.52]];
    ridge.forEach(([x, y]) => ctx.lineTo(w * x, h * y));
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.fill();
    ctx.fillStyle = '#121319';
    ctx.fillRect(0, h * 0.78, w, h * 0.22);
    ctx.strokeStyle = '#1c1f28';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    const cardones: [number, number, number][] = [[0.2, 0.78, 0.2], [0.74, 0.8, 0.16]];
    cardones.forEach(([x, y, s]) => {
      ctx.beginPath();
      ctx.moveTo(w * x, h * y);
      ctx.lineTo(w * x, h * (y - s));
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(w * x, h * (y - s * 0.5));
      ctx.lineTo(w * (x - 0.03), h * (y - s * 0.5));
      ctx.lineTo(w * (x - 0.03), h * (y - s * 0.8));
      ctx.stroke();
    });
    ctx.lineWidth = 1.5;
    for (let i = 1; i <= 4; i++) {
      ctx.strokeStyle = `rgba(125,155,179,${0.5 - i * 0.1})`;
      ctx.beginPath();
      ctx.arc(w * 0.45, h * 0.86, i * 14, Math.PI, Math.PI * 2);
      ctx.stroke();
    }
  },

  familiar(ctx, w, h) {
    ctx.fillStyle = '#0b0a0d';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 22; i++) {
      const x = (i / 22) * w + ((i * 37) % 11);
      ctx.strokeStyle = i % 3 ? '#16171a' : '#1d1e20';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x, h);
      ctx.lineTo(x + ((i % 5) - 2) * 3, h * 0.12 + (i % 4) * 8);
      ctx.stroke();
    }
    const ex = w * 0.56;
    const ey = h * 0.5;
    [ex - 14, ex + 14].forEach((x) => {
      const g = ctx.createRadialGradient(x, ey, 0, x, ey, 18);
      g.addColorStop(0, 'rgba(232,120,50,0.9)');
      g.addColorStop(1, 'rgba(232,120,50,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, ey, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffd09a';
      ctx.beginPath();
      ctx.ellipse(x, ey, 4, 2.4, 0, 0, Math.PI * 2);
      ctx.fill();
    });
  },
} satisfies Record<string, Draw>;

export type Scene = keyof typeof scenes;

function drawPrinter(canvas: HTMLCanvasElement) {
  const { ctx, w, h } = fit(canvas);
  ctx.fillStyle = C.surface;
  ctx.fillRect(0, 0, w, h);
  const cx = w / 2;
  const cy = h * 0.58;
  const R = Math.min(w, h) * 0.28;
  for (let layer = 0; layer < 12; layer++) {
    ctx.strokeStyle = layer === 11 ? C.ember : `rgba(232,165,71,${0.08 + layer * 0.04})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    const oy = cy - layer * 4;
    for (let a = 0; a <= Math.PI * 2 + 0.01; a += 0.05) {
      const ear = Math.max(0, Math.cos(a * 2 - Math.PI * 0.5)) ** 8 * (a > Math.PI ? 0 : 0.55);
      const r = R * (1 + ear);
      const x = cx + Math.cos(a) * r;
      const y = oy + Math.sin(a) * r * 0.42;
      if (a === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  const nozzleX = cx + R * 0.6;
  ctx.fillStyle = C.line;
  ctx.fillRect(nozzleX, cy - 70, 26, 18);
  ctx.fillStyle = C.ember;
  ctx.beginPath();
  ctx.moveTo(nozzleX + 9, cy - 52);
  ctx.lineTo(nozzleX + 17, cy - 52);
  ctx.lineTo(nozzleX + 13, cy - 44);
  ctx.fill();
  ctx.font = "12px 'IBM Plex Mono', monospace";
  ctx.fillStyle = C.muted;
  ctx.fillText(canvas.dataset.caption ?? '', 16, h - 16);
}

const EYES = {
  count: 3,
  revealAt: 260,
  fullAt: 140,
  fleeAt: 70,
  gap: 16,
  cooldown: 2500,
};

interface Eyes {
  x: number;
  y: number;
  alpha: number;
  fleeing: boolean;
  cooldown: number;
  blinkUntil: number;
  nextBlink: number;
}

// Pairs of eyes that only show up in the lantern's light and hide when it gets too close.
function createEyes() {
  const place = (e: Eyes, w: number, h: number, light?: { x: number; y: number }) => {
    for (let tries = 0; tries < 12; tries++) {
      e.x = 0.58 + Math.random() * 0.37;
      e.y = 0.14 + Math.random() * 0.72;
      if (!light || Math.hypot(e.x * w - light.x, e.y * h - light.y) > EYES.revealAt + 60) return;
    }
  };

  const eyes: Eyes[] = Array.from({ length: EYES.count }, () => ({
    x: 0,
    y: 0,
    alpha: 0,
    fleeing: false,
    cooldown: 0,
    blinkUntil: 0,
    nextBlink: 1500 + Math.random() * 4000,
  }));
  let placed = false;

  const update = (w: number, h: number, light: { x: number; y: number }, t: number, dt: number) => {
    if (!placed) {
      eyes.forEach((e) => place(e, w, h, light));
      placed = true;
    }
    // Only one pair on screen at a time: the rest wait until it has fully faded out.
    let shown = eyes.find((e) => e.alpha > 0 || e.fleeing);
    for (const e of eyes) {
      if (shown && shown !== e) continue;
      if (e.cooldown > 0) {
        e.cooldown -= dt;
        continue;
      }
      const d = Math.hypot(e.x * w - light.x, e.y * h - light.y);
      if (e.fleeing) {
        e.alpha -= dt * 0.006;
        if (e.alpha <= 0) {
          e.alpha = 0;
          e.fleeing = false;
          e.cooldown = EYES.cooldown;
          place(e, w, h, light);
        }
        continue;
      }
      if (d < EYES.fleeAt && e.alpha > 0.1) {
        e.fleeing = true;
        continue;
      }
      const wanted =
        d >= EYES.revealAt ? 0 : Math.min(1, (EYES.revealAt - d) / (EYES.revealAt - EYES.fullAt));
      e.alpha += (wanted - e.alpha) * Math.min(1, dt * 0.004);
      if (e.alpha < 0.005) e.alpha = 0;
      if (e.alpha > 0) shown = e;
      if (t > e.nextBlink) {
        e.blinkUntil = t + 140;
        e.nextBlink = t + 2000 + Math.random() * 4500;
      }
    }
  };

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
    for (const e of eyes) {
      if (e.alpha <= 0.01) continue;
      const lid = t < e.blinkUntil ? 0.12 : 1;
      const cx = e.x * w;
      const cy = e.y * h;
      [cx - EYES.gap / 2, cx + EYES.gap / 2].forEach((x) => {
        const g = ctx.createRadialGradient(x, cy, 0, x, cy, 14);
        g.addColorStop(0, `rgba(232,120,50,${0.55 * e.alpha})`);
        g.addColorStop(1, 'rgba(232,120,50,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, cy, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(255,208,154,${e.alpha})`;
        ctx.beginPath();
        ctx.ellipse(x, cy, 3.4, 2 * lid, 0, 0, Math.PI * 2);
        ctx.fill();
      });
    }
  };

  return { update, draw };
}

function initLantern(hero: HTMLElement, canvas: HTMLCanvasElement, reduce: boolean) {
  let L = fit(canvas);
  const target = { x: 0, y: 0, active: false };
  const stars = Array.from({ length: 80 }, () => ({
    x: Math.random(),
    y: Math.random(),
    size: Math.random() * 1.1 + 0.4,
    base: Math.random() * 0.35 + 0.15,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.0025 + 0.0006,
  }));
  const motes = Array.from({ length: 24 }, () => ({
    x: Math.random(),
    y: Math.random(),
    s: Math.random() * 1.4 + 0.4,
    v: Math.random() * 0.00025 + 0.00008,
    phase: Math.random() * Math.PI * 2,
  }));
  const rest = () => ({ x: Math.min(L.w * 0.72, L.w - 120), y: L.h * 0.42 });
  const pos = rest();
  const eyes = reduce ? null : createEyes();
  let last = 0;

  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect();
    target.x = e.clientX - r.left;
    target.y = e.clientY - r.top;
    target.active = true;
  });
  hero.addEventListener('pointerleave', () => {
    target.active = false;
  });

  const draw = (t: number) => {
    const { ctx, w, h } = L;
    const goal = target.active ? target : rest();
    pos.x += (goal.x - pos.x) * 0.08;
    pos.y += (goal.y - pos.y) * 0.08;
    const flicker = reduce
      ? 1
      : 0.92 + Math.sin(t * 0.011) * 0.03 + Math.sin(t * 0.037) * 0.025 + Math.random() * 0.02;
    const radius = Math.max(w, h) * 0.55 * flicker;

    ctx.fillStyle = C.ground;
    ctx.fillRect(0, 0, w, h);
    const g = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, radius);
    g.addColorStop(0, 'rgba(232,165,71,0.22)');
    g.addColorStop(0.35, 'rgba(232,165,71,0.08)');
    g.addColorStop(1, 'rgba(15,14,18,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    const glow = (x: number, y: number) =>
      Math.max(0, 1 - Math.hypot(x - pos.x, y - pos.y) / (radius * 0.8));

    for (const s of stars) {
      const x = s.x * w;
      const y = s.y * h;
      // Cubing the sine keeps each star dim most of the time with short, bright peaks.
      const pulse = reduce ? 0.5 : (0.5 + 0.5 * Math.sin(t * s.speed + s.phase)) ** 3;
      const a = Math.min(1, s.base * (0.25 + pulse * 1.6) + glow(x, y) * 0.35);
      ctx.fillStyle = `rgba(230,223,211,${a})`;
      ctx.beginPath();
      ctx.arc(x, y, s.size * (0.8 + pulse * 0.5), 0, Math.PI * 2);
      ctx.fill();
    }

    if (eyes) {
      const dt = last ? Math.max(0, Math.min(t - last, 64)) : 16;
      eyes.update(w, h, pos, t, dt);
      eyes.draw(ctx, w, h, t);
    }
    last = t;

    for (const m of motes) {
      if (!reduce) {
        m.y -= m.v * 16;
        if (m.y < 0) {
          m.y = 1;
          m.x = Math.random();
        }
      }
      const sway = reduce ? 0 : Math.sin(t * 0.0006 + m.phase) * 18;
      const mx = m.x * w + sway;
      const my = m.y * h;
      const a = glow(mx, my) * 0.8;
      if (a <= 0) continue;
      ctx.fillStyle = `rgba(232,190,120,${a})`;
      ctx.beginPath();
      ctx.arc(mx, my, m.s, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  return {
    resize() {
      L = fit(canvas);
      draw(0);
    },
    start() {
      draw(0);
      if (reduce) return;
      const loop = (t: number) => {
        draw(t);
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    },
  };
}

export function initScenes() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  const lanternCanvas = document.querySelector<HTMLCanvasElement>('[data-lantern]');
  const printer = document.querySelector<HTMLCanvasElement>('[data-printer]');
  const lantern = hero && lanternCanvas ? initLantern(hero, lanternCanvas, reduce) : null;

  const drawStatic = () => {
    document.querySelectorAll<HTMLCanvasElement>('canvas[data-scene]').forEach((canvas) => {
      const draw = scenes[canvas.dataset.scene as Scene];
      if (!draw) return;
      const { ctx, w, h } = fit(canvas);
      draw(ctx, w, h);
    });
    if (printer) drawPrinter(printer);
  };

  drawStatic();
  lantern?.start();
  document.fonts?.ready.then(() => printer && drawPrinter(printer));

  let timer: number | undefined;
  window.addEventListener('resize', () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      drawStatic();
      lantern?.resize();
    }, 120);
  });
}
