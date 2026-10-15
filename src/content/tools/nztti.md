---
title: 'NZTTI'
subtitle: '运行于浏览器的图片文本加密隐写工具——加密、认证与像素选择全部在页面内完成，图片永不离开你的设备'
cover: '/img/nztti.png'
hero: '/img/nztti.png'
status: 'active'
order: 50
blurb: 'NZTTI —— 把文本隐藏进图片的浏览器端加密隐写工具（NZTTI-1 格式）'
downloads:
  - { label: '在线使用', href: 'https://nztti.nicrozoft.org', kind: 'link', section: '使用' }
  - { label: '查看 GitHub 存储库', href: 'https://github.com/Nicrozoft/NZTTI', kind: 'link' }
---

NZTTI web 把一段文本隐藏进图片，用密钥封存；持同一密钥即可读回。这是一个运行于浏览器的隐写工具——加密、认证、像素选择全部在本页面内完成，图片永不离开你的设备。界面遵循 WinUI 3 / Fluent 设计语言，中英文即时切换，支持浅色 / 深色 / 跟随系统主题。

## 功能

- **加密** — 选择载体图片（浏览、拖放或粘贴），输入文本与密钥即可加密，页面实时显示容量与用量，结果可直接预览并下载为 PNG。
- **解密** — 选择加密后的图片并输入密钥即可读回文本。密钥错误与图片未携带文本这两种情况被刻意设计得无法区分。
- **设置** — 界面语言、外观主题、可选的默认密钥与内置自检。

加密与解密均在 Web Worker 中运行，带进度条且可随时取消，大图片不会冻结页面。

## 格式 NZTTI-1

文本在写入图片前先加密并认证，密钥同时决定使用哪些像素——没有密钥就无从寻找，也无从读取。文本仅写入完全不透明像素颜色字节的最低位，每个通道至多偏移 1/255，不可察觉；一张 2000×1500 的不透明图片约可容纳 1.1 MB 文本。本页面与 NZTTI 桌面程序使用同一 NZTTI-1 格式：桌面版加密的图片可在此解密，此处下载的 PNG 亦可在桌面版中读回。完整格式规范见 [GitHub 存储库](https://github.com/Nicrozoft/NZTTI)。

## 安全须知

文本经过加密与认证，错误密钥被 128 位 HMAC 拒绝。但请注意：最低位改动不抗隐写分析；任何有损环节（JPEG、截图、聊天软件的自动重压缩等）都会摧毁载荷，请仅以 PNG 保存；工具不触碰 EXIF 等元数据；默认密钥（可选功能）以明文存储于浏览器本地存储。

## 浏览器说明

需要 `CompressionStream` / `DecompressionStream` 与模块 Worker（Chrome/Edge 80+、Firefox 114+、Safari 16.4+）。带非 sRGB ICC 标签的载体可能无法逐位回环，未标记或 sRGB 的 PNG 不受影响。

## 许可证

[AGPL-3.0](https://github.com/Nicrozoft/NZTTI/blob/main/LICENSE)

Author: Nicrozoft
