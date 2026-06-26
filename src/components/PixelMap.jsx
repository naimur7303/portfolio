const PIXEL_SIZE = 4;
const GRID_W = 80;
const GRID_H = 60;

const COLORS = {
  water: '#0a1628',
  waterLight: '#0d2040',
  land: '#0a2e1a',
  landMid: '#0d3f22',
  landBright: '#0f5a2a',
  river: '#0d4f4f',
  riverLight: '#106060',
  settlement: '#00ff88',
  arakan: '#1a0a0a',
  coast: '#0d3520',
};

// Simplified pixel map of Bengal delta + Arakan
const pattern = (() => {
  const g = Array.from({ length: GRID_H }, () => Array(GRID_W).fill(0));

  const fill = (y1, y2, x1, x2, v) => {
    for (let y = y1; y < y2; y++)
      for (let x = x1; x < x2; x++)
        if (y >= 0 && y < GRID_H && x >= 0 && x < GRID_W) g[y][x] = v;
  };

  // Bay of Bengal (south)
  fill(45, GRID_H, 0, GRID_W, 1);

  // Mainland Bangladesh
  fill(10, 45, 10, 55, 2);
  fill(8, 10, 15, 50, 2);
  fill(10, 12, 12, 52, 2);

  // North
  fill(0, 8, 20, 45, 3);

  // Sylhet / northeast
  fill(5, 12, 50, 60, 3);

  // Rivers (ganga/padma)
  for (let x = 15; x < 50; x++) {
    const y = 30 + Math.floor(Math.sin(x * 0.3) * 3);
    if (y >= 0 && y < GRID_H) { g[y][x] = 4; g[y + 1][x] = 4; }
  }

  // Meghna
  for (let y = 18; y < 40; y++) {
    const x = 48 + Math.floor(Math.sin(y * 0.25) * 2);
    if (x >= 0 && x < GRID_W) { g[y][x] = 4; g[y][x + 1] = 4; }
  }

  // Jamuna
  for (let y = 10; y < 35; y++) {
    const x = 28 + Math.floor(Math.sin(y * 0.2) * 1.5);
    if (x >= 0 && x < GRID_W) { g[y][x] = 4; }
  }

  // Delta (south)
  for (let x = 12; x < 52; x++) {
    const y = 40 + Math.floor(Math.sin(x * 0.4) * 4);
    if (y < 48) { g[y][x] = 5; g[y + 1][x] = 5; }
  }

  // Chittagong coast
  for (let y = 20; y < 42; y++) {
    const x = 55 + Math.floor(Math.sin(y * 0.15) * 1);
    if (x < GRID_W) { g[y][x] = 6; g[y][x - 1] = 6; }
  }

  // Arakan
  fill(15, 40, 62, 78, 7);
  fill(14, 15, 65, 75, 7);

  // Arakan coast
  for (let y = 15; y < 42; y++) {
    const x = 62;
    g[y][x] = 6;
  }

  // Dhaka
  g[22][38] = 8;
  g[22][39] = 8;
  g[23][38] = 8;

  // Chittagong
  g[32][56] = 8;

  // Sittwe (Arakan)
  g[35][65] = 8;

  // Sylhet
  g[8][54] = 8;

  return g;
})();

const colorMap = [COLORS.water, COLORS.waterLight, COLORS.land, COLORS.landMid, COLORS.river, COLORS.landBright, COLORS.coast, COLORS.arakan, COLORS.settlement];

export default function PixelMap({ className = '' }) {
  return (
    <svg
      viewBox={`0 0 ${GRID_W} ${GRID_H}`}
      className={`w-full h-full opacity-30 ${className}`}
      style={{ imageRendering: 'pixelated' }}
      preserveAspectRatio="xMidYMid meet"
    >
      {pattern.map((row, y) =>
        row.map((cell, x) => {
          if (cell === 0) return null;
          const color = colorMap[cell] || COLORS.water;
          const isSettlement = cell === 8;
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={color}
              opacity={isSettlement ? 1 : 0.6 + Math.random() * 0.4}
              className={isSettlement ? 'flicker' : ''}
            />
          );
        })
      )}
    </svg>
  );
}
