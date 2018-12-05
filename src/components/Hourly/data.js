const BU = { name: 'Build', desc: 'Increase 1 building Power', points: 1000 };
const BUS = { name: 'Build SU', desc: 'Every 1 min of building speed-up items used', points: 900 };
const TE = { name: 'Tech', desc: 'Increase 1 technology Power', points: 400 };
const TES = { name: 'Tech SU', desc: 'Every 1 min of technology speed-up items used', points: 0 };
const TR = { name: 'Train', desc: 'Training', points: 0 };
const TRS = { name: 'Train SU', desc: 'Every 1 min of training speed-up items used', points: 0 };
const HRZ = { name: 'Hero Recruitment', desc: 'Hero Recruitment & Zombies', points: 0 };
const WMZ = { name: 'Wisdom Medals & Zombies', desc: 'Wisdom Medals & Zombies', points: 0 };
const HRW = { name: 'Hero Recruitment & Wisdom Medals', desc: 'Hero Recruitment & Wisdom Medals', points: 0 };
const AHD = { name: 'All Hero Development', desc: 'All Hero Development', points: 0 };
const ASU = { name: 'Any SU', desc: 'Any speed-up items', points: 0 };
const EVENTS = [BU, TE, TR];
const SU = [BUS, TE, TRS];

const MONDAY_EVENTS = [
  { time: '0:00', events: [BU, BUS] },
  { time: '1:00', events: [BU] },
  { time: '2:00', events: [TRS] },
  { time: '3:00', events: [TR, BU] },
  { time: '4:00', events: [BU, TE, TRS] },
  { time: '5:00', events: [BU, TE, BUS] },
  { time: '6:00', events: [TR, BU, TE] },
  { time: '7:00', events: [BU] },

  { time: '8:00', events: [BU, BUS] },
  { time: '9:00', events: [BU] },
  { time: '10:00', events: [TRS] },
  { time: '11:00', events: [TR, BU] },
  { time: '12:00', events: [SU] },
  { time: '13:00', events: [BU, TE, TRS] },
  { time: '14:00', events: [BU, TE, TR] },
  { time: '15:00', events: [BU] },

  { time: '16:00', events: [BU, BUS] },
  { time: '17:00', events: [BU] },
  { time: '18:00', events: [TRS] },
  { time: '19:00', events: [BU, TR] },
  { time: '20:00', events: [SU] },
  { time: '21:00', events: [BU, TE, TRS] },
  { time: '22:00', events: [BU, TE, TR] },
  { time: '23:00', events: [BU] },
]

const TUESDAY_EVENTS = [
  { time: '0:00', events: [BU] },
  { time: '1:00', events: [BU, TE, TRS] },
  { time: '2:00', events: [BU] },
  { time: '3:00', events: [ASU] },
  { time: '4:00', events: [BU, TE] },
  { time: '5:00', events: [BU, BUS] },
  { time: '6:00', events: [BU, TE] },
  { time: '7:00', events: [BU, TE, TR] },

  { time: '8:00', events: [BU] },
  { time: '9:00', events: [BU, TE, TRS] },
  { time: '10:00', events: [BU] },
  { time: '11:00', events: [ASU] },
  { time: '12:00', events: [BU, TE] },
  { time: '13:00', events: [BU, BUS] },
  { time: '14:00', events: [BU, TE] },
  { time: '15:00', events: [BU, TE, TR] },

  { time: '16:00', events: [BU] },
  { time: '17:00', events: [BU, TE, TRS] },
  { time: '18:00', events: [BU] },
  { time: '19:00', events: [ASU] },
  { time: '20:00', events: [BU, TE] },
  { time: '21:00', events: [BU, BUS] },
  { time: '22:00', events: [BU, TE] },
  { time: '23:00', events: [BU, TE, TR] },
]

const WEDNESDAY_EVENTS = [
  { time: '0:00', events: [ASU] },
  { time: '1:00', events: [TE, TES] },
  { time: '2:00', events: [SU] },
  { time: '3:00', events: [BU, TE] },
  { time: '4:00', events: [BU, TE] },
  { time: '5:00', events: [SU] },
  { time: '6:00', events: [BU, TE, TRS] },
  { time: '7:00', events: [BU, TE] },

  { time: '8:00', events: [ASU] },
  { time: '9:00', events: [TE, TES] },
  { time: '10:00', events: [SU] },
  { time: '11:00', events: [BU, TE] },
  { time: '12:00', events: [BU, TE] },
  { time: '13:00', events: [SU] },
  { time: '14:00', events: [BU, TE, TRS] },
  { time: '15:00', events: [BU, TE] },

  { time: '16:00', events: [ASU] },
  { time: '17:00', events: [TE, TES] },
  { time: '18:00', events: [SU] },
  { time: '19:00', events: [BU, TE] },
  { time: '20:00', events: [BU, TE] },
  { time: '21:00', events: [SU] },
  { time: '22:00', events: [BU, TE, TRS] },
  { time: '23:00', events: [BU, TE] },
]

const THURSDAY_EVENTS = [
  { time: '0:00', events: [HRZ] },
  { time: '1:00', events: [AHD] },
  { time: '2:00', events: [WMZ] },
  { time: '3:00', events: [AHD] },
  { time: '4:00', events: [HRW] },
  { time: '5:00', events: [AHD] },
  { time: '6:00', events: [WMZ] },
  { time: '7:00', events: [AHD] },

  { time: '8:00', events: [HRZ] },
  { time: '9:00', events: [ADH] },
  { time: '10:00', events: [WMZ] },
  { time: '11:00', events: [AHD] },
  { time: '12:00', events: [HRW] },
  { time: '13:00', events: [AHD] },
  { time: '14:00', events: [WMZ] },
  { time: '15:00', events: [AHD] },

  { time: '16:00', events: [HRZ] },
  { time: '17:00', events: [AHD] },
  { time: '18:00', events: [WMZ] },
  { time: '19:00', events: [AHD] },
  { time: '20:00', events: [HRW] },
  { time: '21:00', events: [AHD] },
  { time: '22:00', events: [WMZ] },
  { time: '23:00', events: [AHD] }
]

const FRIDAY_EVENTS = [
  { time: '0:00', events: [ASU] },
  { time: '1:00', events: [SU] },
  { time: '2:00', events: [BU, TE, TRS] },
  { time: '3:00', events: [TRS] },
  { time: '4:00', events: [BU, TE, TRS] },
  { time: '5:00', events: [BU, TR] },
  { time: '6:00', events: [TE, TR] },
  { time: '7:00', events: [ASU] },

  { time: '8:00', events: [ASU] },
  { time: '9:00', events: [SU] },
  { time: '10:00', events: [BU, TE, TRS] },
  { time: '11:00', events: [TRS] },
  { time: '12:00', events: [BU, TE, TRS] },
  { time: '13:00', events: [BU, TR] },
  { time: '14:00', events: [TE, TR] },
  { time: '15:00', events: [ASU] },

  { time: '16:00', events: [ASU] },
  { time: '17:00', events: [SU] },
  { time: '18:00', events: [BU, TE, TRS] },
  { time: '19:00', events: [TRS] },
  { time: '20:00', events: [BU, TE, TRS] },
  { time: '21:00', events: [TR, BU] },
  { time: '22:00', events: [TR, TE] },
  { time: '23:00', events: [ASU] },
]

const SATURDAY_EVENTS = [
  { time: '0:00', events: [ASU] },
  { time: '1:00', events: [TE, TES] },
  { time: '2:00', events: [BU, BUS] },
  { time: '3:00', events: [TRS] },
  { time: '4:00', events: [BU, TE, TRS] },
  { time: '5:00', events: [BU, TE, TRS] },
  { time: '6:00', events: [TR, BU] },
  { time: '7:00', events: [TR, TE] },

  { time: '8:00', events: [ASU] },
  { time: '9:00', events: [TE, TES] },
  { time: '10:00', events: [BU, BUS] },
  { time: '11:00', events: [TRS] },
  { time: '12:00', events: [BU, TE, TRS] },
  { time: '13:00', events: [BU, TE, TRS] },
  { time: '14:00', events: [TR, BU] },
  { time: '15:00', events: [TR, TE] },

  { time: '16:00', events: [ASU] },
  { time: '17:00', events: [TE, TES] },
  { time: '18:00', events: [BU, BUS] },
  { time: '19:00', events: [TRS] },
  { time: '20:00', events: [BU, TE, TRS] },
  { time: '21:00', events: [BU, TE, TRS] },
  { time: '22:00', events: [TR, BU] },
  { time: '23:00', events: [TR, TE] },
]

const SUNDAY_EVENTS = [
  { time: '0:00', events: [ASU] },
  { time: '1:00', events: [TE, TES] },
  { time: '2:00', events: [BU, BUS] },
  { time: '3:00', events: [TRS] },
  { time: '4:00', events: [BU, TE, TRS] },
  { time: '5:00', events: [BU, TE, TRS] },
  { time: '6:00', events: [TR, BU] },
  { time: '7:00', events: [TR, TE] },

  { time: '8:00', events: [ASU] },
  { time: '9:00', events: [TE, TES] },
  { time: '10:00', events: [BU, BUS] },
  { time: '11:00', events: [TRS] },
  { time: '12:00', events: [BU, TE, TRS] },
  { time: '13:00', events: [BU, TE, TRS] },
  { time: '14:00', events: [TR, BU] },
  { time: '15:00', events: [TR, TE] },

  { time: '16:00', events: [ASU] },
  { time: '17:00', events: [TE, TES] },
  { time: '18:00', events: [BU, BUS] },
  { time: '19:00', events: [TRS] },
  { time: '20:00', events: [BU, TE, TRS] },
  { time: '21:00', events: [BU, TE, TRS] },
  { time: '22:00', events: [TR, BU] },
  { time: '23:00', events: [TR, TE] },
]

export default [
  SUNDAY_EVENTS,
  MONDAY_EVENTS,
  TUESDAY_EVENTS,
  WEDNESDAY_EVENTS,
  THURSDAY_EVENTS,
  FRIDAY_EVENTS,
  SATURDAY_EVENTS,
];