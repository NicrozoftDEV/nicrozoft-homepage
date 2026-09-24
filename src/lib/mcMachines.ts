// Machine wiki data: tag presets (with icons) and the machines listed on each
// /mcserver/machines/* category page. Entries are placeholders — details will
// be filled in later.

export interface MachineTagDef {
  label: string;
  /** Glyph shown before the label. */
  icon: string;
  /** Badge tone (see Badge.astro). */
  tone: 'neutral' | 'success' | 'caution' | 'critical' | 'accent';
  /** Tooltip / legend text explaining the tag. */
  hint?: string;
}

export const machineTags: Record<string, MachineTagDef> = {
  tier1: { label: 'I 类', icon: '▁', tone: 'neutral', hint: '效率 < 5 万' },
  tier2: { label: 'II 类', icon: '▄', tone: 'neutral', hint: '效率 10 万 ~ 100 万' },
  tier3: { label: 'III 类', icon: '█', tone: 'neutral', hint: '效率 > 100 万' },
  produce: { label: '生产', icon: '⛏', tone: 'neutral' },
  process: { label: '加工', icon: '⚙', tone: 'neutral' },
  storage: { label: '存储', icon: '📦', tone: 'neutral' },
  unique: { label: '独有产物', icon: '✪', tone: 'accent' },
  precious: { label: '珍贵产物', icon: '💎', tone: 'accent' },
  largeRedstone: { label: '大型红石机器', icon: '⚡', tone: 'neutral' },
  lagExclusive: {
    label: '高卡独占',
    icon: '⚠',
    tone: 'critical',
    hint: '卡顿高，为防止掉刻，开启时不建议同时开启其它机器',
  },
  lowLag: { label: '低卡高效', icon: '🌱', tone: 'success' },
  active: { label: '现役机器', icon: '●', tone: 'success' },
  retired: { label: '退役机器', icon: '○', tone: 'neutral' },
  demolish: { label: '待拆除', icon: '✕', tone: 'critical' },
  building: { label: '建造中', icon: '⏳', tone: 'caution' },
};

/** Legend groups shown on the machines index page. */
export const machineTagLegend: { title: string; tags: string[] }[] = [
  { title: '效率分类', tags: ['tier1', 'tier2', 'tier3'] },
  { title: '功能', tags: ['produce', 'process', 'storage', 'unique', 'precious'] },
  { title: '规模与性能', tags: ['largeRedstone', 'lagExclusive', 'lowLag'] },
  { title: '状态', tags: ['active', 'retired', 'demolish', 'building'] },
];

export interface Machine {
  name: string;
  /** Tag ids — must exist in machineTags. */
  tags: string[];
}

export interface MachineCategory {
  id: string;
  title: string;
  desc: string;
  machines: Machine[];
}

export const machineCategories: MachineCategory[] = [
  {
    id: 'natural',
    title: '自然刷怪类',
    desc: '基于自然刷怪机制的机器（刷怪塔等）。',
    machines: [
      { name: '空置域小船吸刷怪塔', tags: ['tier2', 'produce', 'retired'] },
      { name: '百万效率空置域 EOL 溺尸塔', tags: ['tier3', 'produce', 'unique', 'precious', 'building'] },
      { name: 'Y=-54 空置域 EOL 女巫小屋塔', tags: ['tier2', 'produce', 'lowLag', 'active'] },
      { name: '堆门猪人塔', tags: ['tier2', 'produce', 'active'] },
      { name: '沼泽刷怪塔 × 2', tags: ['tier1', 'produce'] },
      { name: '小黑搬瓜塔', tags: ['tier1', 'produce', 'building'] },
    ],
  },
  {
    id: 'mechanism',
    title: '机制刷怪类',
    desc: '利用游戏机制生成目标的机器（刷铁机、袭击塔等）。',
    machines: [
      { name: '48 核刷铁机', tags: ['tier1', 'produce', 'active'] },
      { name: '矿车加速袭击塔', tags: ['tier2', 'produce', 'unique', 'precious', 'largeRedstone', 'building'] },
      { name: '16 核刷铁机', tags: ['tier1', 'produce', 'demolish'] },
      { name: '4 核刷铁机', tags: ['tier1', 'produce'] },
      { name: '2 核刷铁机', tags: ['tier1', 'demolish'] },
    ],
  },
  {
    id: 'structure',
    title: '结构利用类',
    desc: '利用自然生成结构的机器（试炼密室等）。',
    machines: [
      { name: '空置域三联 56 笼 150 假人试炼密室农场', tags: ['tier2', 'tier3', 'produce', 'unique', 'precious', 'lagExclusive', 'largeRedstone', 'active'] },
      { name: '720k 祭坛刷沙机', tags: ['tier2', 'produce', 'unique', 'largeRedstone', 'building'] },
      { name: '432k 主世界刷沙机', tags: ['tier2', 'produce', 'unique', 'retired'] },
    ],
  },
  {
    id: 'redstone',
    title: '普通红石机器类',
    desc: '全物品、刷沙机等常规红石机器。',
    machines: [
      { name: '编码全物品', tags: ['storage', 'largeRedstone', 'active'] },
      { name: '百万效率刷石机', tags: ['tier3', 'produce', 'unique', 'active'] },
      { name: '960 效率熔炉组', tags: ['tier2', 'process', 'active'] },
      { name: '树场 × 2', tags: ['tier1', 'produce', 'active'] },
      { name: '废石合成机', tags: ['tier2', 'process', 'active'] },
      { name: '猪灵交易所', tags: ['tier2', 'process', 'active'] },
      { name: '320 效率熔炉组', tags: ['tier1', 'process', 'active'] },
      { name: '水爆树场', tags: ['tier1', 'produce', 'retired'] },
    ],
  },
];
