// Navigation tree for the Minecraft server wiki (/mcserver/*). Single source of
// truth so the sidebar (McWikiLayout) and the section index pages stay in sync.

export interface McWikiLink {
  label: string;
  href: string;
}

export interface McWikiSection {
  label: string;
  /** Section landing page; omit when only child pages exist. */
  href?: string;
  items?: McWikiLink[];
}

export const mcWikiNav: McWikiSection[] = [
  { label: '简介', href: '/mcserver' },
  {
    label: '群组',
    items: [
      { label: '群组链接', href: '/mcserver/group' },
      { label: '群规', href: '/mcserver/group/rules' },
    ],
  },
  { label: '加入方式', href: '/mcserver/join' },
  { label: '玩法', href: '/mcserver/gameplay' },
  {
    label: '特性',
    items: [
      { label: '总览', href: '/mcserver/features' },
      { label: '生电与技术规则', href: '/mcserver/features/technical' },
      { label: '假人系统', href: '/mcserver/features/fakeplayer' },
      { label: '客户端协议兼容', href: '/mcserver/features/protocol' },
      { label: '插件特性', href: '/mcserver/features/plugins' },
      { label: '性能与修复', href: '/mcserver/features/performance' },
    ],
  },
  {
    label: '机器',
    items: [
      { label: '总览', href: '/mcserver/machines' },
      { label: '自然刷怪类', href: '/mcserver/machines/natural' },
      { label: '机制刷怪类', href: '/mcserver/machines/mechanism' },
      { label: '结构利用类', href: '/mcserver/machines/structure' },
      { label: '普通红石机器类', href: '/mcserver/machines/redstone' },
    ],
  },
  {
    label: '规定',
    items: [
      { label: '服务器游玩规定', href: '/mcserver/rules' },
      { label: '违规封禁措施', href: '/mcserver/rules/penalties' },
    ],
  },
];

/** Normalize a URL pathname for nav matching: strip .html suffix and trailing slash. */
export function normalizeWikiPath(pathname: string): string {
  let p = pathname.replace(/\.html$/, '');
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p;
}
