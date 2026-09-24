---
title: 客户端协议兼容
lead: 服务端原生支持多种客户端模组协议，安装对应模组即可获得增强体验；未安装任何模组也完全不影响正常游玩。
order: 3
blurb: 投影、Servux、Jade、小地图等客户端模组与服务端的协议兼容支持。
---

## 本地分支的 Servux 修复

本地分支重写了 Servux 兼容层：修复了握手竞态与协议标识校验问题，并按客户端版本区分两代线格式—— 新版（<a href="https://github.com/maruohon/litematica" target="_blank" rel="noopener noreferrer">Litematica</a> ≥ 0.28.5 / <a href="https://github.com/maruohon/malilib" target="_blank" rel="noopener noreferrer">malilib</a> 系）与旧版客户端的投影粘贴、实体数据、结构边界框均可正常工作。

## 投影与建造

### `protocol.servux.litematics`

**上限 500 KB**

<a href="https://github.com/maruohon/servux" target="_blank" rel="noopener noreferrer">Servux</a> 投影协议：Litematica 投影的上传、下载与服务端粘贴，单次 NBT 上限 500 KB。

### `protocol.syncmatica`

<a href="https://github.com/altrisi/syncmatica" target="_blank" rel="noopener noreferrer">Syncmatica</a> 协议：在服务器上与其他玩家共享投影，协同建造。

### `protocol.alternative-block-placement`

**LITEMATICA**

服务端支持 Litematica 的轻松放置（Easy Place）协议，无需作弊模式即可使用轻松放置。

### `protocol.servux.structure-protocol`

Servux 结构协议：向客户端提供结构边界框等结构数据。

### `protocol.jade-protocol`

<a href="https://github.com/Snownee/Jade" target="_blank" rel="noopener noreferrer">Jade</a> 协议：同步方块与实体信息，供 Jade（WAILA 系）前端显示。

## 数据同步

### `protocol.servux.entity-protocol`

Servux 实体协议：向客户端同步实体详细数据（<a href="https://github.com/maruohon/minihud" target="_blank" rel="noopener noreferrer">MiniHUD</a> 等）。

### `protocol.servux.hud-logger-protocol`

**TPS · MOB_CAPS**

Servux HUD 数据记录器：向客户端同步 TPS 与生物上限数据，每秒更新一次。

### `protocol.servux.hud-metadata-protocol-share-seed`

HUD 元数据共享包含世界种子（服务器种子本就公开，见[服务器游玩规定](/mcserver/rules)）。

### `protocol.appleskin`

<a href="https://github.com/squeek502/AppleSkin" target="_blank" rel="noopener noreferrer">AppleSkin</a> 协议：同步饱食度等数据，使 AppleSkin 显示准确。

### `protocol.xaero-map-protocol`

<a href="https://modrinth.com/mod/xaeros-minimap" target="_blank" rel="noopener noreferrer">Xaero’s 小地图</a>协议：向客户端同步世界信息，地图数据跨会话一致。

### `protocol.rei-server-protocol`

<a href="https://github.com/shedaniel/RoughlyEnoughItems" target="_blank" rel="noopener noreferrer">REI</a> 服务端协议：同步合成、烧炼等配方数据。

## 其他协议

### `protocol.bladeren.mspt-sync-protocol`

**每 20 tick**

Bladeren MSPT 同步协议：向客户端同步服务器 MSPT，供 Bladeren 等模组显示。

### `protocol.chat-image-protocol`

聊天图片协议：支持在聊天中发送与显示图片。

### `protocol.leaves-carpet-support`

向 Carpet 系客户端同步服务端规则状态（如 creativeNoClip），使客户端行为与服务端一致。

### `protocol.pca · protocol.bbor-protocol`

**未启用**

PCA 同步协议与 BBOR 协议当前未启用。
