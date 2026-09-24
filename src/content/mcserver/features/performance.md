---
title: 性能与修复
lead: 服务端的性能优化与原版漏洞修复。这些改动主要影响服务端内部行为，多数对玩家无直接感知。
order: 5
blurb: 服务端性能优化与原版漏洞修复，多数对玩家无直接感知。
configGroups:
  - title: 本地分支性能优化
    entries:
      - key: performance.lithium-optimization
        meta: ['全部子项启用']
        origin: 本地分支
        body: 'Leaves 内置 <a href="https://github.com/CaffeineMC/lithium" target="_blank" rel="noopener noreferrer">Lithium</a> 优化的分类开关：生物 AI（目标选择器 / POI 感知 / 刷怪）、实体（碰撞 / 窒息 / 移动）、方块（方块实体 tick / 装备追踪）、区块（序列化）。'
      - key: performance.c2me-optimization
        origin: 本地分支
        body: '启用 <a href="https://github.com/RelativityMC/C2ME-fabric" target="_blank" rel="noopener noreferrer">C2ME</a> 衍生的噪声生成数学优化（对 JIT 友好的实现），加速地形生成。'
      - key: performance.iron-machine-villager-optimization
        origin: 本地分支
        body: '刷铁机村民优化：仅保留影响铁傀儡产出的村民大脑运算，空闲时冻结大脑，铁傀儡产出不受影响。仅针对命名为 <code>iron_machine</code> 且认领了床的村民。'
      - key: performance.minecart-monster-optimization
        origin: 本地分支
        body: '乘坐矿车的敌对生物跳过在原版游戏中根本不会起任何作用的导航与移动控制，索敌、受伤、掉落与消失等行为不变。'
      - key: performance.minecart-monster-skip-pathfinding
        origin: 本地分支
        body: '进一步跳过乘坐矿车敌对生物的 A* 寻路计算（矿车刷怪农场推荐与上者一同启用）。'
  - title: 上游性能优化
    lead: 以下优化对游戏行为无可见影响，列出以供了解。
    entries:
      - key: performance.dont-send-useless-entity-packets
        body: '不发送无意义的实体数据包。'
      - key: performance.reduce-entity-allocations
        body: '减少实体相关对象分配。'
      - key: performance.cache-climb-check
        body: '缓存实体攀爬检测。'
      - key: performance.reduce-chuck-load-and-lookup
        body: '减少区块加载与查找开销。'
      - key: performance.cache-ignite-odds
        body: '缓存方块点燃概率计算。'
      - key: performance.optimize-sun-burn-tick
        body: '优化阳光灼烧 tick。'
      - key: performance.check-frozen-ticks-before-landing-block
        body: '落地方块处理前先检查冻结刻。'
      - key: performance.skip-negligible-planar-movement-multiplication
        body: '跳过可忽略的平面移动乘法。'
      - key: performance.remove
        meta: ['tick-guard · damage']
        body: '移除 tick 守卫与伤害处理的 lambda 分配开销。'
  - title: 本地分支漏洞修复
    entries:
      - key: fix.spear-fix
        origin: 本地分支
        body: '修复长枪（Spear）难以命中高速目标（按 3 刻回退的碰撞箱复检）与未命中也消耗蓄力冷却两个原版 Bug（MC-310857、MC-310858），客户端无需安装任何模组。'
      - key: fix.mining-fatigue-fix
        origin: 本地分支
        body: '修复挖掘疲劳 III 及以上的挖掘速度倍率差 10 倍的问题（MC-279819），对真实玩家与假人均生效。'
      - key: fix.vanilla-end-void-rings
        origin: 本地分支
        body: '恢复末地远处地形密度函数的原版溢出算法，重新生成经典的“虚空环”图案。'
      - key: fix.tripwire-no-scheduled-tick
        meta: ['默认开启']
        origin: 本地分支
        body: '修复 26.2 引入的绊线 0gt 幽灵计划刻问题（MC-310372），绊线不会再破坏整个区块的时序。'
      - key: 直接修复或调整（无配置项）
        origin: 本地分支
        body: '末影珍珠被活塞推动跨区块后自加载失效修复；假人补货扩展至 16 上限物品；假人物品栏快捷栏选择行等。'
  - title: 上游漏洞修复
    entries:
      - key: fix.stacked-container-destroyed-drop
        body: '堆叠容器被破坏时正确掉落其中内容物。'
      - key: fix.vanilla-portal-handle
        body: '传送门实体处理恢复原版行为。'
---
