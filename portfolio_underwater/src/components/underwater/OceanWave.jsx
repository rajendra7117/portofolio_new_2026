import { motion, useReducedMotion } from 'motion/react'

const WAVE_VARIANTS = {
  'dark-to-light': {
    layers: [
      {
        d: 'M0,92 C170,112 320,56 520,82 C680,106 810,130 980,96 C1134,66 1270,54 1440,78 L1440,180 L0,180 Z',
        fill: '#06213B',
        duration: 12,
        offsetY: 5,
      },
      {
        d: 'M0,108 C180,134 340,86 540,106 C720,126 850,154 1018,128 C1178,104 1300,90 1440,110 L1440,180 L0,180 Z',
        fill: '#0B4B7A',
        duration: 11,
        offsetY: 8,
      },
      {
        d: 'M0,126 C180,150 338,116 518,128 C700,140 844,160 1006,146 C1190,130 1298,116 1440,132 L1440,180 L0,180 Z',
        fill: '#2C9BC9',
        duration: 10,
        offsetY: 10,
      },
      {
        d: 'M0,145 C220,168 360,128 580,142 C800,156 936,174 1090,156 C1220,142 1346,136 1440,146 L1440,180 L0,180 Z',
        fill: '#A8E8F2',
        duration: 9,
        offsetY: 12,
      },
    ],
  },
  'light-to-dark': {
    layers: [
      {
        d: 'M0,88 C160,108 300,60 478,76 C646,92 812,128 968,102 C1130,76 1292,60 1440,84 L1440,180 L0,180 Z',
        fill: '#A8E8F2',
        duration: 12,
        offsetY: 6,
      },
      {
        d: 'M0,104 C180,128 332,90 508,98 C678,106 812,138 980,116 C1160,92 1286,84 1440,106 L1440,180 L0,180 Z',
        fill: '#7CD9F5',
        duration: 11,
        offsetY: 8,
      },
      {
        d: 'M0,120 C176,142 318,110 500,120 C674,130 826,152 1000,132 C1170,112 1282,104 1440,120 L1440,180 L0,180 Z',
        fill: '#2D8EC8',
        duration: 10,
        offsetY: 10,
      },
      {
        d: 'M0,140 C212,162 350,128 540,138 C726,148 894,170 1056,150 C1206,132 1318,128 1440,140 L1440,180 L0,180 Z',
        fill: '#06213B',
        duration: 9,
        offsetY: 12,
      },
    ],
  },
  dark: {
    layers: [
      { d: 'M0,92 C180,116 334,54 538,74 C700,92 862,126 1024,98 C1180,72 1302,60 1440,82 L1440,180 L0,180 Z', fill: '#06213B', duration: 10, offsetY: 6 },
      { d: 'M0,112 C180,128 336,90 538,107 C712,122 892,150 1050,122 C1196,96 1306,88 1440,108 L1440,180 L0,180 Z', fill: '#0A3C6B', duration: 9, offsetY: 8 },
      { d: 'M0,136 C214,156 362,124 566,136 C752,148 912,170 1088,150 C1222,136 1334,130 1440,142 L1440,180 L0,180 Z', fill: '#0F5D92', duration: 8, offsetY: 10 },
    ],
  },
  light: {
    layers: [
      { d: 'M0,94 C206,116 348,62 560,80 C720,96 886,134 1046,108 C1190,84 1316,66 1440,90 L1440,180 L0,180 Z', fill: '#D4F5F7', duration: 10, offsetY: 6 },
      { d: 'M0,116 C190,140 342,102 564,116 C760,130 902,152 1076,130 C1208,112 1326,110 1440,120 L1440,180 L0,180 Z', fill: '#A8E8F2', duration: 9, offsetY: 8 },
      { d: 'M0,138 C200,158 364,128 570,142 C765,156 910,174 1086,150 C1224,130 1336,136 1440,146 L1440,180 L0,180 Z', fill: '#75D1E7', duration: 8, offsetY: 10 },
    ],
  },
}

function OceanWave({ variant = 'dark-to-light', className = '', flip = false, top = false }) {
  const reducedMotion = useReducedMotion()
  const classes = ['ocean-wave', top ? 'ocean-wave--top' : '', flip ? 'ocean-wave--flip' : '', className]
    .filter(Boolean)
    .join(' ')

  const layers = WAVE_VARIANTS[variant]?.layers ?? WAVE_VARIANTS['dark-to-light'].layers

  return (
    <div className={classes} aria-hidden="true">
      <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
        {layers.map((layer, index) => (
          <motion.path
            key={`${variant}-${index}`}
            d={layer.d}
            fill={layer.fill}
            initial={false}
            animate={
              reducedMotion
                ? { y: 0, x: 0 }
                : { x: [0, 14, -10, 0], y: [0, layer.offsetY, 0] }
            }
            transition={{
              duration: layer.duration,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: index * 0.8,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default OceanWave
