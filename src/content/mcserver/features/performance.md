---
title: 性能与修复
lead: 服务端的性能优化与原版漏洞修复。这些改动主要影响服务端内部行为，多数对玩家无直接感知。
order: 5
blurb: 服务端性能优化与原版漏洞修复，多数对玩家无直接感知。
---

## 本地分支性能优化

### `performance.lithium-optimization`

**全部子项启用**

**本地分支**

Leaves 内置 <a href="https://github.com/CaffeineMC/lithium" target="_blank" rel="noopener noreferrer">Lithium</a> 优化的分类开关：生物 AI（目标选择器 / POI 感知 / 刷怪）、实体（碰撞 / 窒息 / 移动）、方块（方块实体 tick / 装备追踪）、区块（序列化）。

### `performance.c2me-optimization`

**本地分支**

启用 <a href="https://github.com/RelativityMC/C2ME-fabric" target="_blank" rel="noopener noreferrer">C2ME</a> 衍生的噪声生成数学优化（对 JIT 友好的实现），加速地形生成。

### `performance.iron-machine-villager-optimization`

**本地分支**

刷铁机村民优化：仅保留影响铁傀儡产出的村民大脑运算，空闲时冻结大脑，铁傀儡产出不受影响。仅针对命名为 `iron_machine` 且认领了床的村民。

### `performance.minecart-monster-optimization`

**本地分支**

乘坐矿车的敌对生物跳过在原版游戏中根本不会起任何作用的导航与移动控制，索敌、受伤、掉落与消失等行为不变。

### `performance.minecart-monster-skip-pathfinding`

**本地分支**

进一步跳过乘坐矿车敌对生物的 A\* 寻路计算（矿车刷怪农场推荐与上者一同启用）。

## 上游性能优化

以下优化对游戏行为无可见影响，列出以供了解。

### `performance.dont-send-useless-entity-packets`

不发送无意义的实体数据包。

### `performance.reduce-entity-allocations`

减少实体相关对象分配。

### `performance.cache-climb-check`

缓存实体攀爬检测。

### `performance.reduce-chuck-load-and-lookup`

减少区块加载与查找开销。

### `performance.cache-ignite-odds`

缓存方块点燃概率计算。

### `performance.optimize-sun-burn-tick`

优化阳光灼烧 tick。

### `performance.check-frozen-ticks-before-landing-block`

落地方块处理前先检查冻结刻。

### `performance.skip-negligible-planar-movement-multiplication`

跳过可忽略的平面移动乘法。

### `performance.remove`

**tick-guard · damage**

移除 tick 守卫与伤害处理的 lambda 分配开销。

## 本地分支漏洞修复

### `fix.spear-fix`

**本地分支**

修复长枪（Spear）难以命中高速目标（按 3 刻回退的碰撞箱复检）与未命中也消耗蓄力冷却两个原版 Bug（MC-310857、MC-310858），客户端无需安装任何模组。

### `fix.mining-fatigue-fix`

**本地分支**

修复挖掘疲劳 III 及以上的挖掘速度倍率差 10 倍的问题（MC-279819），对真实玩家与假人均生效。

### `fix.vanilla-end-void-rings`

**本地分支**

恢复末地远处地形密度函数的原版溢出算法，重新生成经典的“虚空环”图案。

### `fix.tripwire-no-scheduled-tick`

**默认开启**

**本地分支**

修复 26.2 引入的绊线 0gt 幽灵计划刻问题（MC-310372），绊线不会再破坏整个区块的时序。

### `直接修复或调整（无配置项）`

**本地分支**

末影珍珠被活塞推动跨区块后自加载失效修复；假人补货扩展至 16 上限物品；假人物品栏快捷栏选择行等。

## 上游漏洞修复

### `fix.stacked-container-destroyed-drop`

堆叠容器被破坏时正确掉落其中内容物。

### `fix.vanilla-portal-handle`

传送门实体处理恢复原版行为。
